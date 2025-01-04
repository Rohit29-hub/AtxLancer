import { useForm, Controller } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import OnbordHader from "@/modules/onboarding/components/ui/OnbordHader";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import NextStepButton from "../../ui/NextStepButton";
import LabelInput from "../../ui/LabelInput";
import { Input } from "@/components/ui/input";


type ProfileFormData = {
  firstName: string;
  lastName: string;
  email: string;
  profileType: string;
  profileImage: File | null;
};

function Profile() {
  const { handleSubmit, control, setValue, watch } = useForm<ProfileFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "bilalfaiz@gmail.com",
      profileType: "",
      profileImage: null,
    },
  });

  const profileImage = watch("profileImage");

  const onSubmit = (data: ProfileFormData) => {
    console.log("Form Data:", data);
  };

  const handleFileChange = (file: File | null) => {
    setValue("profileImage", file);
  };

  return (
    <div className="realtive">
      <OnbordHader
        title="Your Profile"
        description="Provide your details to help us customize your experience."
      />
      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-4">
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <LabelInput
                id="firstname"
                label="Enter your firstName"
                placeholder="First Name"
                {...field}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <LabelInput
                id="lastname"
                label="Enter your lastName"
                placeholder="Last Name"
                {...field}
              />
            )}
          />
        </div>

        {/* Avatar and Email Fields */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full flex flex-col">
            <label className="text-sm font-medium mb-2">
              Select profile picture
            </label>
            <div className="flex items-center gap-x-4">
              <Avatar>
                {profileImage ? (
                  <AvatarImage src={URL.createObjectURL(profileImage)} />
                ) : (
                  <AvatarFallback>DP</AvatarFallback>
                )}
              </Avatar>
              <Controller
                name="profileImage"
                control={control}
                render={() => (
                  <Input
                    type="file"
                    accept="image/jpeg,image/png"
                    className="w-full"
                    onChange={(e) =>
                      handleFileChange(e.target.files?.[0] || null)
                    }
                  />
                )}
              />
            </div>
          </div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <LabelInput
                id="email"
                label="Your email"
                placeholder="bilalfaiz@gmail.com"
                disabled
                {...field}
              />
            )}
          />
        </div>

        {/* Radio Group */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-2">Select profile type</label>
          <Controller
            name="profileType"
            control={control}
            render={({ field }) => (
              <RadioGroup
                {...field}
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-col sm:flex-row mt-3 gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Individual" id="individual" />
                  <label htmlFor="individual" className="text-sm font-medium">
                    As an Individual
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Company" id="company" />
                  <label htmlFor="company" className="text-sm font-medium">
                    As a Company
                  </label>
                </div>
              </RadioGroup>
            )}
          />
        </div>

        <NextStepButton handleSubmit={onSubmit} />
      </form>
    </div>
  );
}

export default Profile;
