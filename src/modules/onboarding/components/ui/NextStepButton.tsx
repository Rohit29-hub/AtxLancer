import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface NextStepButtonProps {
  handleSubmit: () => void;
}

function NextStepButton({handleSubmit}:NextStepButtonProps) {
  return (
    <div className="w-full flex justify-end">
      <Button variant={"custom"} size={"lg"} onClick={handleSubmit}>
        Next <ArrowRight size={20} />
      </Button>
    </div>
  );
}

export default NextStepButton;
