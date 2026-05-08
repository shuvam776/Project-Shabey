import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/authContext";
import { useCart } from "@/context/cartContext";
import {
  User as UserIcon,
  ShoppingBag,
  MapPin,
  Package,
  ArrowRight,
} from "lucide-react";

export default function BuyerProfile() {
  const { user, loading, updateUser } = useAuth();
  const { cartItems } = useCart();

  const navigate = useNavigate();

  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showAddress, setShowAddress] = useState(false);

  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    address: "",
  });

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name || "",
        bio: user.bio || "",
        address: user.address || "",
      });
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);

    try {
      await updateUser(profile);
      setIsSaved(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-sm font-bold text-green-600">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center text-sm font-bold text-slate-400">
        Access denied
      </div>
    );
  }

  const isSeller = user.usertype === "seller";

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 px-6">
      <div className="mx-auto max-w-6xl">
        {showAddress ? (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-8 border-b border-slate-50 flex items-center gap-3">
              <MapPin className="text-green-600" size={20} />

              <h2 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">
                Saved Addresses
              </h2>
            </div>

            <div className="p-16 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
                <MapPin size={28} className="text-slate-200" />
              </div>

              <p className="text-sm font-bold text-slate-400">
                No addresses saved
              </p>

              <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                Your saved addresses will appear here
              </p>

              <button
                onClick={() => setShowAddress(false)}
                className="mt-4 px-8 h-12 border-2 border-dashed border-slate-200 text-slate-400 text-xs font-black uppercase tracking-widest rounded-xl hover:border-green-400 hover:text-green-600 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-10">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                {/* HEADER */}
                <div className="p-8 border-b border-slate-50 flex flex-col items-center text-center bg-slate-50/30">
                  <div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-200 overflow-hidden shadow-sm mb-4">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <UserIcon size={40} className="text-slate-200" />
                    )}
                  </div>

                  <h1 className="text-2xl font-black text-slate-900 tracking-tighter">
                    {user.name}
                  </h1>

                  <p className="text-[10px] text-slate-400 font-black mt-1 uppercase tracking-widest">
                    {user.email}
                  </p>

                  {isSeller && (
                    <button
                      onClick={() => navigate("/seller/onboarding")}
                      className="mt-6 w-full py-3 bg-green-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-100 active:scale-95"
                    >
                      Go to Seller Dashboard
                    </button>
                  )}
                </div>

                {/* PROFILE FORM */}
                <div className="p-8">
                  {!isSaved ? (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                            Full Name
                          </label>

                          <input
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            className="w-full h-12 border border-slate-200 rounded-xl px-4 text-sm font-bold text-slate-900 focus:outline-none focus:border-green-500 transition-colors"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                            Bio
                          </label>

                          <textarea
                            name="bio"
                            value={profile.bio}
                            onChange={handleChange}
                            rows={3}
                            className="w-full border border-slate-200 rounded-xl p-4 text-sm font-medium text-slate-600 focus:outline-none focus:border-green-500 transition-colors resize-none"
                            placeholder="Tell us a little about yourself..."
                          />
                        </div>
                      </div>

                      <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="w-full h-12 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-black transition-all active:scale-95"
                      >
                        {isSaving ? "Saving..." : "Update Profile"}
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-4">
                      <div className="text-center">
                        <UserIcon
                          size={40}
                          className="text-slate-200 mx-auto mb-2"
                        />

                        <p>Name : {profile.name}</p>
                        <p>Bio : {profile.bio}</p>
                      </div>

                      <p className="text-green-600 text-xs font-bold">
                        Profile updated successfully!
                      </p>

                      <button
                        onClick={() => setIsSaved(false)}
                        className="px-6 py-3 bg-green-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-black transition-all active:scale-95"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* BECOME SELLER */}
              {!isSeller && (
                <div className="bg-green-600 rounded-2xl p-8 text-white shadow-xl shadow-green-100">
                  <h3 className="text-xl font-black tracking-tight mb-2">
                    Start Selling
                  </h3>

                  <p className="text-sm font-medium opacity-75 leading-relaxed mb-6">
                    Turn your passion into profit. Join SHABEY as a verified
                    seller.
                  </p>

                  <Link
                    to="/seller/onboarding"
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:gap-4 transition-all"
                  >
                    Open Seller Dashboard <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-8 space-y-8">
              {/* CART */}
              {cartItems && cartItems.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                  <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShoppingBag className="text-green-600" size={20} />

                      <h2 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">
                        Items In Cart
                      </h2>
                    </div>

                    <button
                      onClick={() => navigate("/cart")}
                      className="text-[10px] font-black text-green-600 uppercase tracking-widest hover:underline"
                    >
                      View Cart
                    </button>
                  </div>

                  <div className="divide-y divide-slate-50">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-6 flex items-center gap-4"
                      >
                        <div className="w-14 h-14 bg-slate-100 rounded-xl overflow-hidden border border-slate-100 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm font-bold text-slate-900">
                            {item.title}
                          </p>

                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                            Qty: {item.quantity}
                          </p>
                        </div>

                        <p className="text-sm font-black text-green-600 tracking-tighter">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ORDER HISTORY */}
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-8 border-b border-slate-50 flex items-center gap-3">
                  <Package className="text-green-600" size={20} />

                  <h2 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">
                    Order History
                  </h2>
                </div>

                <div className="p-16 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
                    <Package size={28} className="text-slate-200" />
                  </div>

                  <p className="text-sm font-bold text-slate-400">
                    No purchases yet
                  </p>

                  <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                    Your completed orders will appear here
                  </p>

                  <button
                    onClick={() => navigate("/explore")}
                    className="mt-4 px-8 h-12 bg-green-600 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-green-700 transition-all active:scale-95 shadow-lg shadow-green-100"
                  >
                    Start Shopping
                  </button>
                </div>
              </div>

              {/* ADDRESSES */}
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-8 border-b border-slate-50 flex items-center gap-3">
                  <MapPin className="text-green-600" size={20} />

                  <h2 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">
                    Saved Addresses
                  </h2>
                </div>

                <div className="p-16 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center">
                    <MapPin size={28} className="text-slate-200" />
                  </div>

                  <p className="text-sm font-bold text-slate-400">
                    No addresses saved
                  </p>

                  <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                    Your saved addresses will appear here
                  </p>

                  <button
                    onClick={() => setShowAddress(true)}
                    className="mt-4 px-8 h-12 border-2 border-dashed border-slate-200 text-slate-400 text-xs font-black uppercase tracking-widest rounded-xl hover:border-green-400 hover:text-green-600 transition-all"
                  >
                    Add Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}