export function ProfileProgressAvatar({
  avatar,
  percent,
}: {
  avatar?: string
  percent: number
}) {
  const circumference = 2 * Math.PI * 18
  const offset = circumference - (percent / 100) * circumference

  return (
    <div className="relative w-10 h-10">
      <svg
        className="absolute inset-0 -rotate-90"
        width="40"
        height="40"
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-500"
        />
      </svg>

      <img
        src={avatar || "/public/images/pfp.jpg"}
        className="w-10 h-10 rounded-full object-cover"
        alt="profile"
      />
    </div>
  )
}
