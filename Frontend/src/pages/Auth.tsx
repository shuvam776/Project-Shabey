import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { useAuth } from "@/context/authContext";
import { useNavigate } from "react-router-dom";
import api from "@/lib/axios";

export default function Auth() {
  const { user, login, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();

      const res = await api.post("/auth/google", { token: idToken });

      const { token, user: userData } = res.data;
      login(token, userData);
      navigate("/");
    } catch (err) {
      console.error("Google Login Failed", err);
      alert("Login failed. Please try again.");
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center text-sm font-bold text-green-600">Loading...</div>;

  if (user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-slate-50">
        <h1 className="text-3xl font-black text-slate-900 tracking-tighter">Welcome back, <span className="text-green-600">{user.name}</span></h1>
        <button 
          onClick={logout} 
          className="px-10 h-14 bg-red-500 text-white font-black rounded-xl hover:bg-red-600 transition-all active:scale-95 shadow-lg shadow-red-100"
        >
          Logout from session
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-slate-50">
      <div className="w-full max-w-md p-12 bg-white border border-slate-200 rounded-[2.5rem] shadow-xl shadow-slate-100 text-center">
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">SHABEY</h1>
        <p className="text-slate-500 font-medium mb-10 leading-relaxed">Sign in to your premium <br /> marketplace account.</p>

        <button
          onClick={handleGoogleLogin}
          className="w-full h-16 bg-white border border-slate-200 text-slate-900 font-bold rounded-2xl transition-all flex items-center justify-center gap-4 shadow-sm hover:shadow-lg hover:border-green-500 active:scale-[0.98] group"
        >
          <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Continue with Google
        </button>

        <p className="mt-10 text-[10px] text-slate-300 font-bold uppercase tracking-widest leading-relaxed">
          By signing in, you agree to our <br /> Terms of Service & Privacy Policy.
        </p>
      </div>
    </div>
  );
}
