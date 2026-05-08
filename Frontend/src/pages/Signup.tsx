import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { signInWithPopup } from "firebase/auth"
import { auth, googleProvider } from "@/lib/firebase"
import { useState } from "react"

export default function Signup() {

  const [usertype, setUsertype] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [avatar, setAvatar] = useState("")
  const [provider, setProvider] = useState("")
  
  const handleRoleChange = (role: string) => {
    setUsertype(role)
  }
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const idToken = await result.user.getIdToken()

      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/google`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: idToken }),
        }
      )

      if (!res.ok) throw new Error("Signup failed")

      const data = await res.json()
      localStorage.setItem("token", data.token)

      window.location.href = "/"
    } catch (err) {
      console.error(err)
      alert("Google signup failed")
    }
  }

  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="w-full max-w-md border border-green-200 bg-white shadow-sm p-8 rounded-lg">
        <h1 className="text-2xl font-bold text-center text-green-900">
          Create your account
        </h1>

        <p className="mt-2 text-center text-sm text-green-700">
          Join SHABEY using Google
        </p>

        <Button
          onClick={handleGoogleSignup}
          className="w-full mt-8 border border-green-300 bg-green-50 text-green-800 hover:bg-green-100 transition shadow-none"
        >
          Continue with Google
        </Button>

        <div className="mt-8">
          <label className="text-sm font-medium text-green-700">Select Role:</label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="buyer"
                checked={usertype === "buyer"}
                onChange={(e) => handleRoleChange(e.target.value)}
                className="text-green-700"
              />
              Buyer
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="seller"
                checked={usertype === "seller"}
                onChange={(e) => handleRoleChange(e.target.value)}
                className="text-green-700"
              />
              Seller
            </label>
          </div>
        </div>
        
        <p className="mt-6 text-center text-sm text-green-700">
          Already have an account?
          <Link to="/auth" className="underline hover:text-green-900 font-medium">
            Log in
          </Link>
        </p>
      </div>
    </section>
  )
}
