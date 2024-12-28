import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleButton from "../../ui/GoogleButton";
import AuthDisclaimer from "../../ui/AuthDisclaimer";
import GithubButton from "../../ui/GithubButton";
import apiRequest from "@/services/api";
import DividerLine from "../../ui/DividerLine";
import FormTopDescription from "../../ui/FormTopDescription";
import FormImageSection from "../../ui/FormImageSection";

type SignupFormData = {
  email: string;
  password: string;
};

function Authentication() {
  const navigate = useNavigate();

  const form = useForm<SignupFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (userData: SignupFormData) => {
    const data = await apiRequest('POST', '/api/v1/user/auth', userData);
    if (data.success) {
      navigate('/choose-role')
    }
  };

  return (
    <div className="w-full flex gap-x-2 h-full dark:bg-background">
      
      {/* left container */}
      <FormImageSection
        heading="Join Our Family!"
        message="Create an account and unlock a world of opportunities. Let’s build your future together."
        quote="The best journeys begin with a single step."
        imageUrl="/public/images/onboarding-img.png"
      />

      {/* Right Section: Signup Form */}
      <div className="flex-1 bg-white p-2 flex flex-col justify-center dark:bg-background">

        {/* form description */}
        <FormTopDescription
          formTitle="Create new Account"
          formLink="login"
          formLinkTitle="SignIn"
          formMessage="Already have an account ?"
        />

        {/* inputs fields */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" {...field} placeholder="Email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" {...field} placeholder="Password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-atxlancer_theme_color text-white hover:bg-atxlancer_theme_color ">
              Sign Up
            </Button>
          </form>
        </Form>

        {/* Divider line */}
        <DividerLine />

        {/* Google button and github button*/}
        <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <GoogleButton />
          <GithubButton />
        </div>

        {/* auth disclaimer */}
        <AuthDisclaimer />

      </div>
    </div>
  );
}

export default Authentication;
