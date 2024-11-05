// import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createContacts as createContactsApi } from "../../apiServices/apiContacts";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function CreateContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { mutate: createContacts, isPending: isCreating } = useMutation({
    mutationFn: createContactsApi,
    onSuccess: () => {
      toast.success("Contact successully submitted");
      reset();
    },
    onError: () => {
      toast.error("failed to submit your contact");
    },
  });
  const isWorking = isCreating;
  function onSubmit(data) {
    console.log(data);
    console.log(isWorking);
    //     console.log(createContacts);
    createContacts(data);
  }
  function onError(errors) {
    console.log(errors);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          disabled={isWorking}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          {...register("name", { required: "Name is Required" })}
        />
        {errors.name && (
          <span className="text-sm text-red-700">{errors.name.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          disabled={isWorking}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <span className="text-sm text-red-700">{errors.email.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          disabled={isWorking}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          {...register("message")}
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isWorking}
        className="w-full rounded bg-yellow-500 py-2 font-bold text-white transition duration-200 hover:bg-yellow-600"
      >
        {isWorking ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
