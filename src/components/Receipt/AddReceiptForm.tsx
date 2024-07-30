import useCategory from "@/app/hooks/useCategory";
import useCreateReceipt from "@/app/hooks/useCreateReceipt";
import { FormEvent, useActionState, useState } from "react";
import AddStepForm from "../Step/AddStepForm";
import { SelectPicture } from "../SelectPicture";
import useCreateStep from "@/app/hooks/useCreateStep";
import swal from "sweetalert";
import ContactPage from "@/app/contact/page";
import { useAuth } from "@/context/authContext";

export default function AddReceiptForm() {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [IsFree, setIsFree] = useState(false);
  const [category, setCategory] = useState(1);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [steps, setSteps] = useState([]);

  let { createReceipt } = useCreateReceipt();
  let { createStep } = useCreateStep();

  const { categories } = useCategory();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let receipt = {
      title: title,
      description: description,
      date: new Date(),
      IsFree: IsFree,
      amount: Number(amount),
      category: category,
      image: image,
      userId: user.id,
    };
    setLoading(true);
    console.log(receipt);
    let { data, error } = await createReceipt(receipt);
    receipt = data.data;
    if (error) {
      setError(true);
      swal({
        title: "Error",
        text: "An error occurred while creating the receipt",
        icon: "error",
        value: "retour",
      }).then((value) => {
        if (value === "retour") {
          window.location.href = "/recettes";
        }
      });
    }

    if (receipt) {
      steps.map((step) => {
        step.receiptid = receipt.id;
      });
      let { data, error } = await createStep(steps);

      if (error) {
        setError(true);
        swal({
          title: "Error",
          text: "An error occurred while creating the receipt",
          icon: "error",
          value: "retour",
        }).then((value) => {
          if (value === "retour") {
            window.location.href = "/recettes";
          }
        });
      }
      swal({
        title: "Receipt Created",
        text: "Receipt has been created successfully",
        icon: "success",
        value: "retour",
        button: {
          text: "retour a la page des recettes",
          value: "retour",
        },
      }).then((value) => {
        if (value === "retour") {
          window.location.href = "/recettes";
        }
      });
    }
  };

  return (
    <div className="w-1/2 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        encType="multipart/form-data"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded-md"
        />
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <label
          htmlFor="IsFree"
          className="text-sm font-medium text-gray-900 dark:text-white"
        >
          Is Free
        </label>
        <input
          type="checkbox"
          id="IsFree"
          onChange={(e) => setIsFree(e.target.checked)}
          className="p-2 rounded-md"
        />
        <input
          type="date"
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
          className="p-2 rounded-md"
        />
        <select
          onChange={(e) => setCategory(Number(e.target.value))}
          className="p-2 rounded-md"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <div className="mb-5">
          <SelectPicture
            setI={(c) => {
              setImage(c);
            }}
          />
        </div>
        <AddStepForm steps={steps} setSteps={setSteps} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          {loading ? "Loading..." : "Create Receipt"}
        </button>
      </form>
    </div>
  );
}
