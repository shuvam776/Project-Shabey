import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../context/authContext"

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-xl text-green-700">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />
  }

  return <>{children}</>
}
