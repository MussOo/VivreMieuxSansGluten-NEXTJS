"use client";
import Image from "next/image";
import background_ble from "../../../../public/img/ble.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toBase64 from "@/app/function/getImageFile";
import { useEffect, useState } from "react";
import useEvent from "@/app/hooks/useEvent";

export default function ShowEvenementPage({ params }: { params: any }) {
  const [event, setEvent] = useState([]);
  let { eventId } = params;
  const [showdiv, setShowDiv] = useState([]);

  const { events } = useEvent(0, parseInt(eventId));

  useEffect(() => {
    if (events.length > 0) {
      setEvent(events[0]);
    }
    console.log(event);
  }, [events]);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
  };
  return (
    <main className="mt-20" key={event.id}>
      {event.Image ? (
        <Slider {...settings}>
          {event.Image &&
            event.Image.map((image, k) => (
              <div key={k}>
                <Image
                  src={"data:image/png;base64," + toBase64(image.file.data)}
                  alt="event"
                  width={400}
                  height={200}
                  className="object-cover w-full h-[600px] p-8 md:w-full lg:w-full rounded-t-lg"
                />
              </div>
            ))}
        </Slider>
      ) : (
        <Image
          src={background_ble}
          alt={event.title}
          width={600}
          height={400}
          className="w-full h-64 object-cover object-center rounded-t-lg"
        />
      )}
      <div className="p-5 flex flex-col gap-5 md:flex-col lg:flex-col md:justify-start lg:justify-start md:gap-0 lg:gap-0 ">
        <h2 className="text-3xl font-bold p-2 border-b-2 border-gray-200">
          {event.title}{" "}
          <p className="text-sm opacity-70 font-normal">
            <span>
              {new Date(event.date_start).toLocaleTimeString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="font-bold pr-2 pl-2"> au </span>
            <span>
              {new Date(event.date_end).toLocaleTimeString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
        </h2>

        <p className="text-xl pt-5 pb-5 font-light italic">
          {event.description}
        </p>
        <div name="location" className="flex flex-row gap-2 text-md">
          <span className="font-bold">Lieu : </span>
          <span>{event.adress}</span>
          <span>{event.zip}</span>
          <span>{event.city}</span>
        </div>
      </div>
    </main>
  );
}
