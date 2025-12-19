import { ProfileProgressAvatar } from "@/components/ProfileProgressAvatar"

export default function Profile() {
  const user = {
    name: "User",
    email: "user@email.com",
    avatar: "",
    profileCompletion: 40,
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="flex items-center gap-6">
        <ProfileProgressAvatar
          avatar={user.avatar}
          percent={user.profileCompletion}
        />

        <div>
          <h1 className="text-2xl font-semibold">
            {user.name}
          </h1>
          <p className="text-sm text-neutral-400">
            Profile {user.profileCompletion}% complete
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6">
        <p className="text-neutral-400">
          Profile settings will live here.
        </p>
      </div>
    </section>
  )
}
