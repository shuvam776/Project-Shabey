import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type SpotlightProps = {
  className?: string
  fill?: string
}

export const Spotlight: React.FC<SpotlightProps> = ({
  className,
  fill = "white",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={cn(
        "pointer-events-none absolute z-0 h-[80rem] w-[80rem] rounded-full blur-3xl",
        className
      )}
      style={{
        background: `radial-gradient(circle at center, ${fill} 0%, transparent 60%)`,
      }}
    />
  )
}
