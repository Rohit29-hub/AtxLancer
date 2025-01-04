import OnbordHader from "@/modules/onboarding/components/ui/OnbordHader";
// import LabelInput from "../../ui/LabelInput";
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

function FreelancerAbout() {
  const [date, setDate] = useState<Date>();
  return (
    <div className=" ">
      <OnbordHader
        title="About you"
        description="Provide your details to help us customize your experience."
      />

      <form className="mt-4 space-y-6">
        {/* Description Section */}
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-gray-700">
            Description
          </Label>
          <Textarea
          rows={4}
          
            className="w-full "
            placeholder="Enter your description here..."
          />
        </div>
        {/* professional input */}
        <div className=" flex flex-col gap-2">
          <Label className="text-sm font-medium text-gray-700">
            Your specility
          </Label>
          <Input
            type="text"
            placeholder="Professional title "
            className="w-full"
          />
        </div>
   {/* Gender Selection */}
<div className="flex justify-between gap-6 items-start">
  <div className="flex-grow basis-0">
    <Label className="mb-2 block">Gender</Label>
    <RadioGroup className="flex gap-4">
      <div className="flex items-center space-x-2">
        <RadioGroupItem id="male" value="male" />
        <Label htmlFor="male">Male</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem id="female" value="female" />
        <Label htmlFor="female">Female</Label>
      </div>
    </RadioGroup>
  </div>

  {/* Date of Birth Input */}
  <div className="flex-grow basis-0">
    <Label
      htmlFor="date-picker"
      className="mb-2 block text-sm font-medium text-gray-700"
    >
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
          <CalendarIcon className="mr-2 " />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  </div>

  {/* Hourly Rate Input */}
  <div className="flex-grow basis-0">
    <Label className="mb-2 block">Hourly Rate</Label>
    <div className="relative flex items-center ">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
        $
      </span>
      <Input
        type="number"
        placeholder="Enter your hourly rate"
        className="pl-8 w-full"
      />
    </div>
  </div>
</div>

        {/* Select Fields Section */}
        <div className="flex justify-between gap-6">
          {/* Language Select */}
          <div className="w-1/2">
            <Label
              htmlFor="availability1"
              className="text-sm font-medium mb-2 block"
            >
              Language
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="french">French</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Country Select */}
          <div className="w-1/2">
            <Label
              htmlFor="availability2"
              className="text-sm font-medium mb-2 block"
            >
              Country
            </Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="india">India</SelectItem>
                <SelectItem value="korea">Korea</SelectItem>
                <SelectItem value="japan">Japan</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <NextStepButton />
      </form>
    </div>
  );
}

export default FreelancerAbout;
