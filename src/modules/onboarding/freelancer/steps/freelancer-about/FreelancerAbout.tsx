import { useForm, Controller } from "react-hook-form";
import OnbordHader from "@/modules/onboarding/components/ui/OnbordHader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import NextStepButton from "@/modules/onboarding/components/ui/NextStepButton";

type FreelancerFormData = {
  description: string;
  specialty: string;
  gender: string;
  dateOfBirth: Date | null;
  hourlyRate: number;
  language: string;
  country: string;
};

function FreelancerAbout() {
  const { handleSubmit, control } = useForm<FreelancerFormData>({
    defaultValues: {
      description: "",
      specialty: "",
      gender: "",
      dateOfBirth: null,
      hourlyRate: 0,
      language: "",
      country: "",
    },
  });

  const [date, setDate] = useState<Date>();
  const onSubmit = (data: FreelancerFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <OnbordHader
        title="About you"
        description="Provide your details to help us customize your experience."
      />

      <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Description Section */}
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">
            Description
          </Label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Textarea
                rows={4}
                className="w-full"
                placeholder="Enter your description here..."
                {...field}
              />
            )}
          />
        </div>

        {/* Professional input */}
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium">
            Your specialty
          </Label>
          <Controller
            name="specialty"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                placeholder="Professional title"
                className="w-full"
                {...field}
              />
            )}
          />
        </div>

        <div className="flex justify-between gap-4 max-sm:items-start items-center max-sm:flex-col ">
          <div className="flex flex-row max-sm:w-full flex-1 items-center">
            {/* Gender Selection */}
            <div className="flex-1">
              <Label className="mb-2 block">Gender</Label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    className="flex gap-4"
                    {...field}
                    onValueChange={field.onChange}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                )}
              />
            </div>

            {/* Date of Birth Input */}
            <div className="flex-1">
              <Label htmlFor="date-picker" className="mb-2 block">
                Date of Birth
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date-picker"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Hourly Rate Input */}
          <div className="max-sm:w-full">
            <Label className="mb-2 block">Hourly Rate</Label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                $
              </span>
              <Controller
                name="hourlyRate"
                control={control}
                render={({ field }) => (
                  <Input
                    type="number"
                    placeholder="Enter your hourly rate"
                    className="pl-8 w-full"
                    min={0}
                    max={100}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        </div>

        {/* Select Fields Section */}
        <div className="flex justify-between gap-6">
          {/* Language Select */}
          <div className="w-1/2">
            <Label htmlFor="language" className="text-sm font-medium mb-2 block">
              Language
            </Label>
            <Controller
              name="language"
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* Country Select */}
          <div className="w-1/2">
            <Label htmlFor="country" className="text-sm font-medium mb-2 block">
              Country
            </Label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select {...field}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="korea">Korea</SelectItem>
                    <SelectItem value="japan">Japan</SelectItem>
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
}

export default FreelancerAbout;
