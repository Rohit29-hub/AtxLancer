import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleButton from "../../ui/GoogleButton";
import AuthDisclaimer from "../../ui/AuthDisclaimer";
import GithubButton from "../../ui/GithubButton";
import apiRequest from "@/services/api";
import DividerLine from "../../ui/DividerLine";
import FormTopDescription from "../../ui/FormTopDescription";
import FormImageSection from "../../ui/FormImageSection";
import {
  authValidationSchema,
  AuthSchema,
} from "@/validation/onboarding/validationSchema";

function Authentication() {
  const navigate = useNavigate();

  const form = useForm<AuthSchema>({
    resolver: zodResolver(authValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Email signup
  const onSubmit = async (userData: AuthSchema) => {
    console.log(userData);
    const data = await apiRequest("POST", "/api/user/v1/auth/credentials", userData);
    if (data.success) {
      navigate("choose-role");
    }
  };

  // Google signup
  const handleGoogleResponse = (data: any) => {
    alert(data.message);
    navigate("choose-role");
  };

  // GitHub signup
  const handleGithubResponse = (data: any) => {
    alert(data.message);
    navigate("choose-role");
  };

  return (
    <div className="overflow-hidden w-full flex gap-x-2 h-full dark:bg-background">
      {/* Left container */}
      <FormImageSection
        heading="Join Our Family!"
        message="Create an account and unlock a world of opportunities. Let’s build your future together."
        quote="The best journeys begin with a single step."
        imageUrl="/images/onboarding-img.png"
      />

      {/* Right Section: Signup Form */}
      <div className="flex flex-col lg:flex-row flex-1">
        <div className="flex-1 bg-white p-2 flex flex-col justify-center dark:bg-background">
          {/* Form description */}
          <FormTopDescription
            formTitle="Create new Account"
            formLink="login"
            formLinkTitle="SignIn"
            formMessage="Already have an account?"
          />

          {/* Input fields */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Email Field */}
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" {...field} placeholder="Email" />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.email?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        placeholder="Password"
                      />
                    </FormControl>
                    <FormMessage>
                      {form.formState.errors.password?.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-atxlancer_theme_color text-white hover:bg-atxlancer_theme_color"
              >
                Sign Up
              </Button>
            </form>
          </Form>

          {/* Divider line */}
          <DividerLine />

          {/* Google button and GitHub button */}
          <div className="space-y-3">
            <GoogleButton handleGoogleResponse={handleGoogleResponse} />
            <GithubButton handleGithubResponse={handleGithubResponse} />
          </div>

          {/* Auth disclaimer */}
          <AuthDisclaimer />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
