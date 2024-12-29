import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface ChooseRoleCardProps {
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
  isCardActive: boolean;
}

function ChooseRoleCard({
  cardTitle,
  cardDescription,
  cardImage,
  isCardActive
}: ChooseRoleCardProps) {

  return (
    <CardContainer className="inter-var flex-1">
      <CardBody
        className={`relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] h-full rounded-xl transition-all ease-out 
        overflow-hidden cursor-pointer ${isCardActive
            ? "border-2 border-dashed p-2 border-black dark:border-white "
            : "hover:border-2 border hover:p-2 hover:border-black hover:dark:border-white"
          }`}
      >
        {/* Image and Overlay */}
        <CardItem translateZ="100" className="relative w-full h-full">
          <img
            src={cardImage}
            className={`object-cover w-full h-full ${isCardActive ? "shadow-xl" : "group-hover/card:shadow-xl"
              }`}
            alt="thumbnail"
          />

          {/* Overlay Content */}
          <div
            title={cardTitle}
            className={`absolute inset-0 flex transition-all ease-linear items-center flex-col justify-center p-4 ${isCardActive
              ? "backdrop-blur-0 bg-opacity-0"
              : "backdrop-blur-sm bg-white bg-opacity-10 dark:bg-black dark:bg-opacity-50 hover:backdrop-blur-0 hover:bg-opacity-0"
              }`}
          >
            <CardItem
              translateZ="50"
              className="text-xl md:text-3xl font-atxlancer_secondary font-bold text-black dark:text-white"
            >
              {cardTitle}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-sm md:text-base text-center text-black dark:text-white max-w-sm mt-2"
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
