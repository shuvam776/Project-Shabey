import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type TextRevealCardProps = {
  text: string
  className?: string
}

export const TextRevealCard: React.FC<TextRevealCardProps> = ({
  text,
  className,
}) => {
  const words = text.split(" ")

  return (
    <h1 className={cn("overflow-hidden", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: "120%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{
            delay: i * 0.08,
            duration: 0.6,
            ease: "easeOut",
          }}
          className="inline-block mr-2" 
        >
          {word}
        </motion.span>
      ))}
    </h1>
  )
}
