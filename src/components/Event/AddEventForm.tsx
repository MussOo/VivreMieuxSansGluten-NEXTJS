"use client";
import UseCreateEvent from "@/app/hooks/useCreateEvent";
import { FormEvent, useState } from "react";
import swal from "sweetalert";
import { SelectPicture } from "../SelectPicture";
import { useAuth } from "@/context/authContext";

export default function AddEventForm() {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date_start, setDate_start] = useState("");
  const [date_end, setDate_end] = useState("");
  const [adress, setAdress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [image, setImage] = useState([]);

  // create event
  let { createUser, loading, error } = UseCreateEvent();

  let event = {};
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    event = {
      title,
      description,
      date_start,
      date_end,
      adress,
      zip,
      city,
      country,
      userId: user.id,
      image,
    };
    await createUser(
      title,
      description,
      date_start,
      date_end,
      adress,
      zip,
      city,
      country,
      user.id,
      image
    );

    if (error) {
      return swal({
        title: "Error",
        text: "An error occurred while creating the event",
        icon: "error",
      });
      window.location.reload();
    }

    swal({
      title: "Event Created",
      text: "Event has been created successfully",
      icon: "success",
      button: {
        text: "retour a la page des evenements",
        value: "retour",
      },
    }).then((value) => {
      if (value === "retour") {
        window.location.href = "/evenements";
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Event Name
        </label>
        <input
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Event Description
        </label>
        <textarea
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter event description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="date_start"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Event Start Date
        </label>
        <input
          type="datetime-local"
          id="date_start"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={date_start}
          onChange={(e) => setDate_start(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="date_end"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Event End Date
        </label>
        <input
          type="datetime-local"
          id="date_end"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={date_end}
          onChange={(e) => setDate_end(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="adress"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Event Address
        </label>
        <input
          type="text"
          id="adress"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter event address"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="zip"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Event Zip Code
        </label>
        <input
          type="text"
          id="zip"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter event zip code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="city"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Event City
        </label>
        <input
          type="text"
          id="city"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter event city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="city"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Event Country
        </label>
        <input
          type="text"
          id="country"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter event country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <SelectPicture
          setI={(c) => {
            setImage(c);
          }}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="error"
          className="block mb-2 text-sm font-medium text-red-500"
        >
          {error}
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}
