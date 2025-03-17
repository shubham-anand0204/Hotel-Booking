import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
export type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const { showToast } = useAppContext();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const mutation = useMutation({
    mutationFn: apiClient.register,
    onSuccess: () => {
      showToast({ message: "Registration Success", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-8"
        onSubmit={onSubmit}
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Create an Account
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="text-gray-700 text-sm font-bold">
            First Name
            <input
              className="border rounded w-full py-2 px-3 font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("firstName", { required: "This field is required" })}
            />
            {errors.firstName && (
              <span className="text-red-500 text-xs">
                {errors.firstName.message}
              </span>
            )}
          </label>
          <label className="text-gray-700 text-sm font-bold">
            Last Name
            <input
              className="border rounded w-full py-2 px-3 font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("lastName", { required: "This field is required" })}
            />
            {errors.lastName && (
              <span className="text-red-500 text-xs">
                {errors.lastName.message}
              </span>
            )}
          </label>
        </div>
        <label className="text-gray-700 text-sm font-bold mt-4 block">
          Email
          <input
            type="email"
            className="border rounded w-full py-2 px-3 font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold mt-4 block">
          Password
          <input
            type="password"
            className="border rounded w-full py-2 px-3 font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password must be longer than 6 characters",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold mt-4 block">
          Confirm Password
          <input
            type="password"
            className="border rounded w-full py-2 px-3 font-normal focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("confirmPassword", {
              validate: (val) => {
                if (!val) {
                  return "This field is required";
                } else if (watch("password") !== val) {
                  return "Passwords do not match";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-xs">
              {errors.confirmPassword.message}
            </span>
          )}
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 mt-6 font-bold rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
