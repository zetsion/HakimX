import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createEditPortfolio as createEditPortfolioApi } from "../../apiServices/apiPortfolios";

export default function CreatePortfolioForm() {
  const { id } = useParams();
  const location = useLocation();
  const portfolio = location.state?.portfolio; // Access portfolio data if available

  const isEditSession = Boolean(id || portfolio?.id);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: portfolio || {},
  });
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createPortfolio, isLoading: isCreatingPortfolio } =
    useMutation({
      mutationFn: createEditPortfolioApi,
      onSuccess: () => {
        toast.success("Portfolio created successfully");
        queryClient.invalidateQueries({
          queryKey: ["portfolios"],
        });
        navigate("/portfolio");
        reset();
      },
      onError: () => {
        toast.error("Portfolio failed to create on the page");
      },
    });

  const { mutate: editPortfolio, isLoading: isEditingPortfolio } = useMutation({
    mutationFn: ({ newPortfolio, id }) =>
      createEditPortfolioApi(newPortfolio, id),
    onSuccess: () => {
      toast.success("Portfolio Edited successfully");
      queryClient.invalidateQueries({
        queryKey: ["portfolios", "portfolio"],
      });
      navigate("/portfolio");
      reset();
    },
    onError: () => {
      toast.error("Portfolio failed to edit on the page");
    },
  });

  const [selectCategery, setSelectCategory] = useState("graphics");

  function onSubmit(data) {
    const photo = typeof data.photo === "string" ? data.photo : data.photo[0];

    if (isEditSession) {
      // Call the edit mutation with newTestimonial and id
      editPortfolio({
        newPortfolio: { ...data, photo },
        id: portfolio.id,
      });
    } else {
      // Call the create mutation with data and photo
      createPortfolio({ ...data, photo });
    }
  }
  function onError() {
    console.log("err from submit", errors);
  }
  const isWorking = isCreatingPortfolio || isEditingPortfolio;
  return (
    <>
      <h1 className="mt-10 text-center text-xl font-bold text-teal-700 sm:mt-4 md:text-2xl">
        Add Portfolio
      </h1>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow label="Full name" error={errors?.client?.message}>
          <input
            className="w-full rounded-md border border-gray-300 p-2"
            type="text"
            id="client"
            {...register("client", { required: "This field is requered" })}
          />
        </FormRow>
        <FormRow label="Project name" error={errors?.name?.message}>
          <input
            className="w-full rounded-md border border-gray-300 p-2"
            type="text"
            id="name"
            {...register("name", { required: "This field is requered" })}
          />
        </FormRow>

        <FormRow label="Category">
          <select
            className="w-full rounded border border-gray-300 bg-gray-50 p-2 shadow-sm"
            id="category"
            defaultValue={selectCategery}
            {...register("category", { required: "This field is requered" })}
            onChange={(e) => setSelectCategory(e.target.value)}
          >
            <option value="Contents">Contets</option>
            <option value="Graphics">Graphics</option>
            <option value="Web-design">Web-design</option>
            <option value="Web-dev">web-dev</option>
            <option value="SEO-M">SEO-M</option>
            <option value="SMM">SMM</option>
            <option value="DMP">DM-package</option>
            <option value="DHC">DH-Consult</option>
          </select>
        </FormRow>

        <FormRow label="Link">
          <input
            className="w-full rounded-md border border-gray-300 p-2"
            type="text"
            id="link"
            {...register("link")}
          />
        </FormRow>

        <FormRow label="Description" error={errors?.description?.message}>
          <textarea
            className="max- mx-3 h-32 w-full rounded-md border border-gray-300 bg-gray-50 p-2 shadow-sm"
            id="description"
            {...register("description", { required: "This field is requered" })}
          />
        </FormRow>

        <FormRow label="Project Photo">
          <input
            type="file"
            className="file:font-inherit file:text-brand-50 file:bg-brand-600 hover:file:bg-brand-700 rounded-sm text-sm file:mr-3 file:cursor-pointer file:rounded-sm file:border-none file:px-3 file:py-2 file:font-medium file:transition-colors file:duration-200"
            id="photo"
            accept="image/*"
            {...register("photo")}
          />
        </FormRow>

        <FormRow>
          <Button type="reset" variation="secondary">
            Cancel
          </Button>
          <Button variation="primary">
            {isWorking ? "Processing.." : isEditSession ? "Edit" : "Add"}
          </Button>
        </FormRow>
      </Form>
    </>
  );
}
