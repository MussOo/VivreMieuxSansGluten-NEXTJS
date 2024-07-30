"use client";
import AddEventForm from "@/components/Event/AddEventForm";
import { useAuth } from "@/context/authContext";

export default function AddEvent() {
  const { user } = useAuth();

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold ">Add Event</h2>
      <AddEventForm />
    </div>
  );
}
