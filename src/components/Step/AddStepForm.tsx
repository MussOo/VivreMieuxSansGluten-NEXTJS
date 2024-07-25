"use client";
import { useEffect, useState } from "react";
import { SelectPicture } from "../SelectPicture";

export default function AddStepForm({
  steps,
  setSteps,
}: {
  steps: any;
  setSteps: any;
}) {
  const [step_count, setStep_count] = useState(0);

  const step_div = (i) => {
    return (
      <div key={i}>
        <h1 className="w-full flex justify-center text-2xl font-bold">
          Step {i}
        </h1>
        <input
          type="text"
          placeholder="Title"
          className="p-2 rounded-md w-full"
          onChange={(e) => {
            let temp = steps;
            temp[i].title = e.target.value;
            setSteps(temp);
          }}
        />
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contenu
          </label>
          <textarea
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter content"
            onChange={(e) => {
              let temp = steps;
              temp[i].content = e.target.value;
              setSteps(temp);
            }}
            required
          />
        </div>

        <SelectPicture
          setI={(c) => {
            let temp = steps;
            temp[i].image = c;
            setSteps(temp);
          }}
        />
      </div>
    );
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={() => {
          setStep_count(step_count + 1);
          setSteps([...steps, { title: "", content: "", image: [""] }]);
        }}
      >
        Add Step
      </button>
      {steps.map((step, i) => {
        return step_div(i);
      })}
    </div>
  );
}
