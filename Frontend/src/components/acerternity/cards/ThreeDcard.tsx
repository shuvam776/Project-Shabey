import React from "react"
import { CardBody, CardContainer, CardItem } from "@/components/acerternity/cards/3d-card"

type ThreeDcardProps = {
  title: string
  description: string
  image: string
}

export function ThreeDcard({ title, description, image }: ThreeDcardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card bg-black border border-white/[0.15] w-[18rem] h-auto rounded-xl p-4">
        
        <CardItem
          translateZ={40}
          className="text-lg font-semibold text-white"
        >
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ={50}
          className="text-sm text-neutral-400 mt-1"
        >
          {description}
        </CardItem>

        <CardItem translateZ={80} className="w-full mt-3">
          <img
            src={image}
            className="h-48 w-full object-cover rounded-lg"
            alt={title}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
