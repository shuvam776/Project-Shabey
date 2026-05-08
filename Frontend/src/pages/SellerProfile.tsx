import React, { useState } from "react";
import { useAuth } from "@/context/authContext";
import { useProductContext } from "@/context/productContext";
import { Trash2, PackagePlus, Store, LayoutGrid } from "lucide-react";
import api from "@/lib/axios";
import { number } from "framer-motion";
import type { Product } from "@/lib/products";

export default function SellerProfile() {
  const { user, loading, updateUser } = useAuth();
  const { products, addProduct, removeProduct } = useProductContext();
  const [isEditingStore, setIsEditingStore] = useState(!user?.name || !user?.bio);
  const [isSavingProfile, setIsSavingProfile] = useState(false);

  const [seller, setSeller] = useState({
    name: user?.name || "",
    description: user?.bio || "",
    avatar: user?.avatar || "",
  });

  const handleSellerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSeller((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    setIsSavingProfile(true);
    try {
      await updateUser({ name: seller.name, bio: seller.description });
      setIsEditingStore(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSavingProfile(false);
    }
  };

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files?.[0] ?? null);
  };

  const handleAddProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) return;
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const { data: uploadData } = await api.post("/upload/image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      addProduct({
        id: Date.now(),
        title: newProduct.name,
        price: Number(newProduct.price),
        description: newProduct.description,
        image: uploadData.url,
        thumbnail: uploadData.url,
      });

      setNewProduct({ name: "", price: "", description: "" });
      setImageFile(null);
    } catch (err) {
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center text-sm font-bold text-green-600">Loading...</div>;
  if (!user) return <div className="h-screen flex items-center justify-center text-sm font-bold text-slate-400">Access denied</div>;

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
              Seller <span className="text-green-600">Admin</span>
            </h1>
            <p className="text-slate-500 font-medium mt-2">Manage your storefront and product listings.</p>
          </div>
          {!isEditingStore && (
            <button
              onClick={() => setIsEditingStore(true)}
              className="text-xs font-black text-green-600 uppercase tracking-widest hover:bg-green-50 px-4 py-2 rounded-lg transition-all"
            >
              Edit Store Info
            </button>
          )}
        </header>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left: Store Settings & Add Product */}
          <div className="lg:col-span-4 space-y-8">
            {isEditingStore ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Store className="text-black" size={20} />
                  <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Store Identity</h2>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Display Name</label>
                    <input name="name" value={seller.name} onChange={handleSellerChange} className="w-full h-12 border border-slate-200 rounded-xl px-4 text-sm font-bold text-slate-900 focus:outline-none focus:border-green-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Store Bio</label>
                    <textarea name="description" value={seller.description} onChange={handleSellerChange} className="w-full min-h-[100px] border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-600 focus:outline-none focus:border-green-500 transition-colors" />
                  </div>
                  <div className="flex gap-3">
                    <button onClick={handleSaveProfile} disabled={isSavingProfile} className="flex-1 h-12 bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all hover:bg-black active:scale-95">
                      {isSavingProfile ? "Saving..." : "Save"}
                    </button>
                    {user?.name && (
                      <button onClick={() => setIsEditingStore(false)} className="px-6 h-12 border border-slate-200 text-slate-400 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all">
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-green-600 rounded-2xl p-8 text-white shadow-xl shadow-green-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Store size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black tracking-tight">{user.name}</h2>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Verified Store</p>
                  </div>
                </div>
                <p className="text-sm font-medium leading-relaxed opacity-80">{user.bio}</p>
              </div>
            )}

            {/* Add Product */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <PackagePlus className="text-green-600" size={20} />
                <h2 className="text-xs font-black text-green-600 uppercase tracking-[0.2em]">Add New Item</h2>
              </div>
              <form onSubmit={handleAddProductSubmit} className="space-y-4">
                <input name="name" placeholder="Product Title" value={newProduct.name} onChange={handleProductChange} className="w-full h-12 border border-slate-200 rounded-xl px-4 text-sm font-bold focus:outline-none focus:border-green-500" required />
                <input name="price" type="number" placeholder="Price (₹)" value={newProduct.price} onChange={handleProductChange} className="w-full h-12 border border-slate-200 rounded-xl px-4 text-sm font-bold focus:outline-none focus:border-green-500" required />
                <textarea name="description" placeholder="Short description..." value={newProduct.description} onChange={handleProductChange} className="w-full min-h-[100px] border border-slate-200 rounded-xl p-4 text-sm font-medium focus:outline-none focus:border-green-500" />
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Product Media</label>
                  <input type="file" accept="image/*" onChange={handleFileChange} className="text-xs text-slate-500 font-bold bg-slate-50 w-full p-3 rounded-xl border border-dashed border-slate-200 cursor-pointer" required />
                </div>
                <button type="submit" disabled={isUploading} className="w-full h-14 bg-green-600 text-white text-sm font-black rounded-xl transition-all hover:bg-green-700 hover:shadow-xl hover:shadow-green-100 active:scale-95">
                  {isUploading ? "Uploading..." : "Publish Listing"}
                </button>
              </form>
            </div>
          </div>

          {/* Right: Catalog */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <LayoutGrid className="text-green-600" size={20} />
                  <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Active Catalog</h2>
                </div>
                <span className="bg-slate-50 text-slate-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {products.length} Listing{products.length !== 1 && "s"}
                </span>
              </div>
              <div className="divide-y divide-slate-50">
                {products.length === 0 ? (
                  <div className="p-24 text-center">
                    <p className="text-sm font-bold text-slate-300">Your store catalog is currently empty.</p>
                  </div>
                ) : (
                  products.map((p) => (
                    <div key={p.id} className="p-6 flex items-center gap-6 group hover:bg-slate-50/50 transition-colors">
                      <div className="h-20 w-20 bg-slate-100 rounded-xl overflow-hidden border border-slate-100 flex-shrink-0">
                        <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-black text-slate-900 tracking-tight">{p.title}</p>
                        <p className="text-lg font-black text-green-600 tracking-tighter">₹{p.price}</p>
                      </div>
                      <button onClick={() => removeProduct(p.id)} className="p-3 text-red-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100 active:scale-90">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}