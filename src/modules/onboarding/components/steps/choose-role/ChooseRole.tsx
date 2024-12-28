import ChooseRoleCard from "../../ui/ChooseRoleCard";

function ChooseRole() {
  const handleChooseRole = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    // Traverse up to find the element with `data-role` if clicked inside
    const role = target.closest("[data-role]")?.getAttribute("data-role");

    if (role) {
      console.log("Selected Role:", role);
    } else {
      console.log("No role found");
    }
  };
    
  
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-y-10 ">
      <div className="">
        <h1 className="text-4xl">Choose Your Role</h1>
      </div>
      <div className="flex  gap-x-3 h-min " onClick={handleChooseRole}>
        <div data-role="freelancer">
          <ChooseRoleCard
            cardTitle="freelancer"
            cardImage="https://i.pinimg.com/736x/61/9a/64/619a64f22b92742d7595d0bbee3afdee.jpg"
            cardDescription="I'm Find for the jon"
          />
        </div>
        <div data-role="client">
          <ChooseRoleCard
            cardTitle="Client"
            cardImage="https://i.pinimg.com/736x/37/ce/c5/37cec543a859adc8f52e68b214d23be3.jpg"
            cardDescription="Search for Developer"
          />
        </div>
      </div>
    </div>
  );
}

export default ChooseRole;
