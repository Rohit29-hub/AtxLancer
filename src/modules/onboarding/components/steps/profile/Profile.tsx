import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import OnbordHader from "@/modules/onboarding/components/ui/OnbordHader";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import NextStepButton from "../../ui/NextStepButton";


function Profile() {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <OnbordHader
        title="Your Profile"
        description="Provide your details to help us customize your experience."
      />

      <div>
        <form className="mt-8 space-y-6">
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full flex flex-col">
              <Label htmlFor="firstName" className="text-sm font-medium mb-2">
                Enter your first name :
              </Label>
              <Input
                id="firstName"
                placeholder="First Name"
                className="w-full"
              />
            </div>
            <div className="w-full flex flex-col">
              <Label htmlFor="lastName" className="text-sm font-medium  mb-2">
                Enter your last name :
              </Label>
              <Input id="lastName" placeholder="Last Name" className="w-full" />
            </div>
          </div>

          {/* Avatar and Email Fields */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full flex flex-col">
              <Label
                htmlFor="freelancerImage"
                className="text-sm font-medium  mb-2"
              >
                Select profile picture :
              </Label>
              <div className="flex items-center gap-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>DP</AvatarFallback>
                </Avatar>
                <Input
                  className="w-full"
                  type="file"
                  id="freelancerImage"
                  accept="image/jpeg"
                />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <Label htmlFor="email" className="text-sm font-medium  mb-2">
                Your email :
              </Label>
              <Input
                id="email"
                placeholder="bilalfaiz@gmail.com"
                disabled
                className="w-full"
              />
            </div>
          </div>

          {/* Radio Group */}
          <div className="flex flex-col">
            <Label className="text-sm font-medium  mb-2">
              Select profile type :
            </Label>
            <RadioGroup
              defaultValue="option-one"
              className="flex flex-col sm:flex-row mt-3 gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one" className="text-sm font-medium ">
                  As a Indivisudal
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two" className="text-sm font-medium ">
                  As a Company
                </Label>
              </div>
            </RadioGroup>
          </div>
        </form>
        <NextStepButton handleSubmit={() => {}}/>
      </div>
    </div>
  );
}

export default Profile;
