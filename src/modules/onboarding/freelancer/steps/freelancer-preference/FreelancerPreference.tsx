import OnbordHader from "@/modules/onboarding/components/ui/OnbordHader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import NextStepButton from "@/modules/onboarding/components/ui/NextStepButton";

function FreelancerPreference() {
  return (
    <div>
      <OnbordHader
        title="Freelancer Preference"
        description="Tell us about your preferences to match you with projects that align with your skills and interests."
      />

      <div className="mt-6">
        {/* First Select */}
        <div className="flex flex-col">
          <Label htmlFor="themeSelect1" className="text-sm font-medium mb-2">
            Select Cetegory:
          </Label>
          <Select>
            <SelectTrigger id="themeSelect1">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="IT & Programming">IT & Programming</SelectItem>
              <SelectItem value="Content Writing">Content Writing</SelectItem>
              <SelectItem value="Graphic Design">Graphic Design</SelectItem>
              <SelectItem value="Video & Multimedia">
                Video & Multimedia
              </SelectItem>
              <SelectItem value="Data Entry & Admin">
                Data Entry & Admin
              </SelectItem>
              <SelectItem value="Customer Support & Service">
                Customer Support & Service
              </SelectItem>
              <SelectItem value="Virtual Assistant">
                Virtual Assistant
              </SelectItem>
              <SelectItem value="Sales & Lead Generation">
                Sales & Lead Generation
              </SelectItem>
              <SelectItem value="Translation">Translation</SelectItem>
              <SelectItem value="Audio & Music">Audio & Music</SelectItem>
              <SelectItem value="Finance & Accounting">
                Finance & Accounting
              </SelectItem>
              <SelectItem value="Legal">Legal</SelectItem>
              <SelectItem value="Social Media">Social Media</SelectItem>
              <SelectItem value="SEO & SEM">SEO & SEM</SelectItem>
              <SelectItem value="Digital Marketing">
                Digital Marketing
              </SelectItem>
              <SelectItem value="Architecture & 3D Design">
                Architecture & 3D Design
              </SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Second Row of Selects */}
        <div className="flex gap-5 mt-5">
          <div className="w-full">
            <Label htmlFor="themeSelect2" className="text-sm font-medium mb-2">Your Availability</Label>
            <Select>
              <SelectTrigger id="themeSelect2">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Full time</SelectItem>
                <SelectItem value="dark">Part time</SelectItem>
                <SelectItem value="system">As needed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <Label htmlFor="themeSelect3" className="text-sm font-medium mb-2">
              Select an additional preference:
            </Label>
            <Select>
              <SelectTrigger id="themeSelect3">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Third Row of Selects */}
        <div className="flex gap-5 mt-5">
          <div className="w-full">
            <Label htmlFor="themeSelect4" className="text-sm font-medium mb-2">
              Select another option:
            </Label>
            <Select>
              <SelectTrigger id="themeSelect4">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full">
            <Label htmlFor="themeSelect5" className="text-sm font-medium mb-2">
              Choose your final preference:
            </Label>
            <Select>
              <SelectTrigger id="themeSelect5">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Next Step Button */}
      <div className="mt-6">
        <Label htmlFor="nextStep" className="sr-only">
          Proceed to the next step
        </Label>
        <NextStepButton handleSubmit={() => {}} />
      </div>
    </div>
  );
}

export default FreelancerPreference;
