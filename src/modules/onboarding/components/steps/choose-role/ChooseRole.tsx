import { useState } from "react";
import ChooseRoleCard from "../../ui/ChooseRoleCard";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function ChooseRole() {
  const navigate = useNavigate();
  const [role, setRole] = useState<string>();

  const handleChooseRole = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const role = target.closest("[data-role]")?.getAttribute("data-role");
    setRole(role!.toLowerCase());
  };

  const handleRoleSubmit = () => {
    if (role !== 'freelancer' && role !== 'client') return;
    navigate(`../${role}/profile`);
  };

  return (
    <div className="w-full h-full flex items-center justify-between flex-col gap-y-4">
      <div className="w-full text-center leading-10">
        <h1 className="md:text-4xl text-2xl">Choose Your Role</h1>
        <p className="text-sm md:text-base">Let us know your purpose and make your experience tailored to your needs.</p>
      </div>
      <div className="md:h-4/5 overflow-hidden grid grid-cols-2 md:gap-x-6 gap-x-2" onClick={handleChooseRole}>
        <div data-role="freelancer" className="col-span-1">
          <ChooseRoleCard
            isCardActive={role === 'freelancer'}
            cardTitle="freelancer"
            cardImage="https://i.pinimg.com/736x/61/9a/64/619a64f22b92742d7595d0bbee3afdee.jpg"
            cardDescription="I'm Find for the join"
          />
        </div>
        <div data-role="client" className="col-span-1">
          <ChooseRoleCard
            isCardActive={role === 'client'}
            cardTitle="client"
            cardImage="https://i.pinimg.com/736x/37/ce/c5/37cec543a859adc8f52e68b214d23be3.jpg"
            cardDescription="Search for dev"
          />
        </div>
      </div>
      <div className="w-full flex justify-end">
        <Button variant={'custom'} onClick={handleRoleSubmit} size={'lg'}>
          Next {" "}
          <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
}

export default ChooseRole;
