import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createSubscribers as createSubscribersApi } from "../../apiServices/apiSubscribers";

export default function CreateSubscriberForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate: createSubscriber, isLoading: isCreatingSubscriber } =
    useMutation({
      mutationFn: createSubscribersApi,
      onSuccess: () => {
        toast.success("You successfully subscribed");
        reset();
      },
      onError: () => {
        toast.error("Failed to subscribe");
      },
    });

  function onSubmit(data) {
    createSubscriber(data);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="mt-5 flex items-center"
    >
      <p>
        <b>Get latest updates:</b>
      </p>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        disabled={isCreatingSubscriber}
        className="mx-2 w-[200px] rounded bg-yellow-600 p-2"
        {...register("email", {
          required: "Email is required to subscribe",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid email format",
          },
        })}
      />
      {errors.email && (
        <span className="text-sm text-red-700">{errors.email.message}</span>
      )}
      <button
        disabled={isCreatingSubscriber}
        className="rounded bg-blue-600 p-2 text-white"
      >
        <b>{isCreatingSubscriber ? "Subscribing..." : "Subscribe"}</b>
      </button>
    </form>
  );
}
