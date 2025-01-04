import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import NextStepButton from "@/modules/onboarding/components/ui/NextStepButton";
import OnbordHader from "@/modules/onboarding/components/ui/OnbordHader";

interface FormData {
  category: string;
  availability: string;
  primarySkill: string;
  experienceYears: string;
  experienceMonths: string;
}

const FreelancerPreference: React.FC = () => {
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      category: "",
      availability: "",
      primarySkill: "",
      experienceYears: "",
      experienceMonths: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="relative">

      <OnbordHader
        title="Freelancer Preference"
        description="Tell us about your preferences to match you with projects that align with your skills and interests."
      />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        {/* Category Field */}
        <div className="flex flex-col mb-4">
          <label htmlFor="category" className="text-sm font-medium mb-2">
            Select the Category that best describes your work
          </label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                  <SelectItem value="IT & Programming">IT & Programming</SelectItem>
                  <SelectItem value="Content Writing">Content Writing</SelectItem>
                  <SelectItem value="Video Editing">Video Editing</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        {/* Availability and Primary Skill Fields */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="availability" className="text-sm font-medium mb-2 block">
              Your Availability
            </label>
            <Controller
              name="availability"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Full-time: 30+ hrs/week">
                      Full-time: 30+ hrs/week
                    </SelectItem>
                    <SelectItem value="Part-time: 10-30 hrs/week">
                      Part-time: 10-30 hrs/week
                    </SelectItem>
                    <SelectItem value="As needed">As needed</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div>
            <label htmlFor="primarySkill" className="text-sm font-medium mb-2 block">
              Your Primary Skill
            </label>
            <Controller
              name="primarySkill"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Skill" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="YouTube">YouTube</SelectItem>
                    <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                    <SelectItem value="SEO">SEO</SelectItem>
                    <SelectItem value="Social Media Marketing">
                      Social Media Marketing
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>

        {/* Work Experience Fields */}
        <div>
          <label className="text-sm font-medium mb-2 block">Your Work Experience</label>
          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="experienceYears"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Years" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 10 }, (_, i) => (
                      <SelectItem key={i} value={i.toString()}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <Controller
              name="experienceMonths"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Months" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => (
                      <SelectItem key={i} value={i.toString()}>
                        {i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
        <NextStepButton handleSubmit={onSubmit} />
      </form>

    </div>
  );
};

export default FreelancerPreference;
