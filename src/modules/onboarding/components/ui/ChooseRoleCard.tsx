import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface ChooseRoleCardProps {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
}

function ChooseRoleCard({
  cardTitle,
  cardDescription,
  cardImage,
}: ChooseRoleCardProps) {
  return (
      <CardContainer className="inter-var flex-1">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
         dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-full 
          border rounded-xl overflow-hidden cursor-pointer">
          {/* Image and Overlay */}
          <CardItem translateZ="100" className="relative w-full">
            <img
              src={cardImage}
              className="h-full w-full object-cover  group-hover/card:shadow-xl"
              alt="thumbnail"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-black"
              >
                {cardTitle}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm text-black max-w-sm mt-2"
              >
                {cardDescription}
              </CardItem>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
  );
}

export default ChooseRoleCard;
