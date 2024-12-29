import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleButton from "@/modules/onboarding/components/ui/GoogleButton";
import AuthDisclaimer from "@/modules/onboarding/components/ui/AuthDisclaimer";
import GithubButton from "@/modules/onboarding/components/ui/GithubButton";
import apiRequest from "@/services/api";
import DividerLine from "@/modules/onboarding/components/ui/DividerLine";
import FormTopDescription from "@/modules/onboarding/components/ui/FormTopDescription";
import FormImageSection from "@/modules/onboarding/components/ui/FormImageSection";

type LoginFormData = {
  email: string;
  password: string;
};

function LoginScreen() {

  const navigate = useNavigate();
  const form = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (userData: LoginFormData) => {
    const data = await apiRequest('POST', '/api/v1/user/auth', userData);
    if (data.success) {
      navigate('/')
    }
  };

    // google login
    const handleGoogleResponse = (data: any) => {
      console.log('ye data aaya hai', data);
    }
  
    // github login
    const handleGithubResponse = (data: any) => {
      console.log('ye data aaya hai', data);
    }


  return (
    <div className="overflow-hidden w-full flex gap-x-2 h-full dark:bg-background">
      
      {/* left container */}
      <FormImageSection
        heading="Welcome Back!"
        message="Log in to continue exploring your personalized dashboard and stay connected."
        quote="Your next adventure awaits."
        imageUrl="/images/onboarding-img.png"
      />

      {/* right container */}
      <div className="flex flex-col lg:flex-row flex-1">
        <div className="flex-1 bg-white p-2 flex flex-col justify-center dark:bg-background">

          {/* form description */}
          <FormTopDescription
            formTitle="Welcome Back!"
            formLink="signup"
            formLinkTitle="Sign up"
            formMessage=" Don't have an account?"
          />

          {/* Inputs fields for email auth */}
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
                Log In
              </Button>
            </form>
          </Form>

          {/* divider line */}
          <DividerLine />

          {/* Google button and github button*/}
          <div className="space-y-3">
            <GoogleButton handleGoogleResponse={handleGoogleResponse}/>
            <GithubButton handleGithubResponse={handleGithubResponse}/>
          </div>
          
          {/* auth disclaimer */}
          <AuthDisclaimer />
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
