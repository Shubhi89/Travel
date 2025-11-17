"use client";
import { useForm } from "react-hook-form";
import InputField from "@/components/forms/inputField";
import FooterLink from "@/components/forms/footerLink";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { signInWithEmail } from "@/lib/actions/auth.actions";
import { toast } from "sonner";

const SignInPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      const result = await signInWithEmail(data);
      if(result.success) router.push('/');
    } catch (e) {
      console.error(e);
      toast.error('Sign In failed', {
        description : e instanceof Error ? e.message : 'Failed to Sign In'
      })
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <InputField
        name="email"
        label="Email"
        placeholder="Enter your email address"
        register={register}
        error={errors.email}
        validation={{
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
        }}
      />
      <InputField
        name="password"
        label="Password"
        placeholder="Enter a strong password"
        type="password"
        register={register}
        error={errors.password}
        validation={{ required: "Password is required", minLength: 8 }}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="yellow-btn w-full mt-5"
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </Button>
      <FooterLink
        text="Don't have an account?"
        linkText="Sign Up"
        href="/sign-up"
      />
    </form>
  );
};

export default SignInPage;
