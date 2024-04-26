"use client";
import { useForm } from "react-hook-form";
import { FormData, UserSchema } from "@/types/form";
import FormField from "./FormField";
import { zodResolver } from "@hookform/resolvers/zod";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({ resolver: zodResolver(UserSchema) });

  const onSubmit = async (data: FormData) => {
    console.log("SUCCESS", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid col-auto  p-2 rounded-lg text-black font-bold bg-[#d5bdaf]">
        <h1 className="text-3xl font-bold mb-4">Zod & React-Hook-Form</h1>
        <FormField
          type="text"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />

        <FormField
          type="text"
          placeholder="GitHub URL"
          name="githubUrl"
          register={register}
          error={errors.githubUrl}
        />

        <FormField
          type="number"
          placeholder="Years of Experience (1 - 10)"
          name="yearsOfExperience"
          register={register}
          error={errors.yearsOfExperience}
          valueAsNumber
        />

        <FormField
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password}
        />

        <FormField
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword}
        />
        <button
          type="submit"
          className="bg-[#edede9] border border-black p-1 rounded-lg text-2xl"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
