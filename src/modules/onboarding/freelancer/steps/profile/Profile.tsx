import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import OnbordHader from "@/modules/onboarding/components/ui/OnbordHader";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


function Profile() {
  return (
    <div>
      <OnbordHader
        title="Profile & Specification"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit sint tempore temporibus ipsa dolores!"
      />
      <div>
        <form className="mt-8">
          <div className="flex gap-6">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>

          <div className="flex items-center gap-7 mt-5 justify-between">
            <div className="flex gap-x-2 items-center w-full">
              {" "}
              {/* Added w-full */}
              <Label htmlFor="freelancerImage">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>DP</AvatarFallback>
                </Avatar>
              </Label>
              <Input
                className="w-full" // Input takes full width
                type="file"
                id="freelancerImage"
                accept="image/jpeg"
              />
            </div>

            <Input
              placeholder="bilalfaiz@gmail.com"
              disabled
              className="w-full" // Added w-full for equal width
            />
          </div>
          <div className="flex mt-5 gap-6">
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light"></SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
