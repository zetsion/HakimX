import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditTestimonial as createEditTestimonialApi } from "../../apiServices/apitestimonials";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
// import SpinnerMini from "../../ui/SpinnerMini";

export default function CreateTestimonialForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const location = useLocation();
  const { testimonialPerson } = location.state || {}; // Get portfolio from state
  const isEditSession = Boolean(testimonialPerson?.id); // Safely check if id exists

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: testimonialPerson || {},
  });

  const [selectTitle, setSelectTitle] = useState("mr");

  // Mutation to create a new testimonial
  const { mutate: createTestimonial, isLoading: isCreatingTestimonial } =
    useMutation({
      mutationFn: createEditTestimonialApi,
      onSuccess: () => {
        toast.success("Testimonial created successfully");
        queryClient.invalidateQueries({
          queryKey: ["testimonials"],
        });
        navigate("/testimonials");
        reset();
      },
      onError: () => {
        toast.error("Testimonial failed to create on the page");
      },
    });

  // Mutation to edit an existing testimonial
  const { mutate: editTestimonial, isLoading: isEditingTestimonial } =
    useMutation({
      mutationFn: ({ newTestimonial, id }) =>
        createEditTestimonialApi(newTestimonial, id),
      onSuccess: () => {
        toast.success("Testimonial edited successfully");
        queryClient.invalidateQueries({
          queryKey: ["testimonials"],
        });
        navigate("/testimonials");
        reset();
      },
      onError: () => {
        toast.error("Testimonial failed to edit on the page");
        console.log(errors);
      },
    });

  const isWorking = isCreatingTestimonial || isEditingTestimonial;

  function onSubmit(data) {
    const photo = typeof data.photo === "string" ? data.photo : data.photo[0];

    if (isEditSession) {
      // Call the edit mutation with newTestimonial and id
      editTestimonial({
        newTestimonial: { ...data, photo },
        id: testimonialPerson.id,
      });
    } else {
      // Call the create mutation with data and photo
      createTestimonial({ ...data, photo });
    }
  }

  function onError(err) {
    toast.error(err.message);
  }

  return (
    <>
      <h1 className="mt-10 text-center text-xl font-bold text-teal-700 sm:mt-4 md:text-2xl">
        Add Testimonials
      </h1>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow label="Full name" error={errors?.name?.message}>
          <input
            className="w-full rounded-md border border-gray-300 p-2"
            type="text"
            id="name"
            {...register("name", { required: "This field is required" })}
            disabled={isWorking}
          />
        </FormRow>

        <FormRow label="Title">
          <select
            className="w-full rounded border border-gray-300 bg-gray-50 p-2 shadow-sm"
            id="title"
            defaultValue={selectTitle}
            {...register("title")}
            disabled={isWorking}
            onChange={(e) => setSelectTitle(e.target.value)}
          >
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
            <option value="Prof">Prof</option>
          </select>
        </FormRow>

        <FormRow label="Role">
          <input
            className="w-full rounded-md border border-gray-300 p-2"
            type="text"
            id="role"
            {...register("role")}
            disabled={isWorking}
          />
        </FormRow>

        <FormRow label="Company name">
          <input
            className="w-full rounded-md border border-gray-300 p-2"
            type="text"
            id="company"
            {...register("company")}
            disabled={isWorking}
          />
        </FormRow>

        <FormRow label="Testimonial" error={errors?.testimonial?.message}>
          <textarea
            className="mx-3 h-32 w-full rounded-md border border-gray-300 bg-gray-50 p-2 shadow-sm"
            id="testimonial"
            {...register("testimonial", { required: "This field is required" })}
            disabled={isWorking}
          />
        </FormRow>

        <FormRow label="Testimonial's Photo">
          <input
            type="file"
            className="file:font-inherit file:text-brand-50 file:bg-brand-600 hover:file:bg-brand-700 rounded-sm text-sm file:mr-3 file:cursor-pointer file:rounded-sm file:border-none file:px-3 file:py-2 file:font-medium file:transition-colors file:duration-200"
            id="photo"
            accept="image/*"
            {...register("photo")}
            disabled={isWorking}
          />
        </FormRow>

        <FormRow>
          <Button type="reset" variation="secondary" disabled={isWorking}>
            Cancel
          </Button>
          <Button variation="primary" disabled={isWorking}>
            {isEditSession ? "Edit" : "Add"}
          </Button>
        </FormRow>
      </Form>
    </>
  );
}
