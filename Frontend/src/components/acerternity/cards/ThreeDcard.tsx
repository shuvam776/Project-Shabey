// src/components/ui/ThreeDCard.tsx
import { CardBody, CardContainer, CardItem } from "@/components/acerternity/cards/3d-card"

type ThreeDCardProps = {
  title: string
  description: string
  image: string
}

export default function ThreeDCard({
  title,
  description,
  image,
}: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody
        className="
          relative group/card
          h-full w-full
          rounded-xl
          border border-white/[0.15]
          bg-black
          p-4
        "
      >
        {/* Image — primary visual */}
        <CardItem translateZ={80} className="w-full">
          <img
            src={image}
            alt={title}
            className="h-48 w-full rounded-lg object-cover"
          />
        </CardItem>

        {/* Title */}
        <CardItem
          translateZ={40}
          className="mt-4 text-lg font-semibold text-white"
        >
          {title}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ={50}
          className="mt-1 text-sm text-neutral-400"
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
