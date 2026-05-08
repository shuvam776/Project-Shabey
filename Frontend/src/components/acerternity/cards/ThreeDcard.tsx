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
          border border-green-200
          bg-white
          p-4 shadow-sm hover:shadow-md transition-shadow
        "
      >
        {/* Image — primary visual */}
        <CardItem translateZ={80} className="w-full">
          <img
            src={image}
            alt={title}
            className="h-48 w-full rounded-lg object-cover bg-green-50"
          />
        </CardItem>

        {/* Title */}
        <CardItem
          translateZ={40}
          className="mt-4 text-lg font-bold text-green-900"
        >
          {title}
        </CardItem>

        {/* Description */}
        <CardItem
          as="p"
          translateZ={50}
          className="mt-1 text-sm font-medium text-green-700"
        >
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
