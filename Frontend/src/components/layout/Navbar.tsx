import { Link } from "react-router-dom"
import { isAuthenticated, logout } from "@/lib/auth"
import { ProfileProgressAvatar } from "@/components/ProfileProgressAvatar"

export default function Navbar() {
  const loggedIn = isAuthenticated()

  // TEMP mock until you fetch user from backend
  const user = {
    avatar: "",
    profileCompletion: 40,
  }

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10">
      <Link to="/" className="text-xl font-semibold">
        SHABEY
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/explore">Explore</Link>

        {!loggedIn ? (
          <Link to="/auth">Get Started</Link>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/profile">
              <ProfileProgressAvatar
                avatar={user.avatar}
                percent={user.profileCompletion}
              />
            </Link>

            <button
              onClick={logout}
              className="text-sm text-neutral-400 hover:text-white"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
