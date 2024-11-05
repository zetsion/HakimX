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
        <b className="ml-4 flex flex-wrap text-xs sm:text-xl">
          Get latest updates:
        </b>
      </p>
      <input
        type="email"
        id="email"
        placeholder="Enter email"
        disabled={isCreatingSubscriber}
        className="w-18 mx-2 rounded border-x-4 border-teal-600 bg-yellow-600 p-2 md:w-full"
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
        className="w-16 rounded border-x-4 border-yellow-600 bg-teal-600 p-2 text-white md:w-full"
      >
        <b className="max-w-full text-xs md:text-xl">
          {isCreatingSubscriber ? "Subscribing..." : "Subscribe"}
        </b>
      </button>
    </form>
  );
}
