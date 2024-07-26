"use client";
import Image from "next/image";
import background_ble from "../../../public/img/ble.jpg";
import ShowEvenementPage from "./[eventId]/page";
import useEvent from "../hooks/useEvent";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import toBase64 from "../function/getImageFile";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "@/components/Loading";

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};
export default function EvenementsPage() {
  const [LoadingPage, setLoadingPage] = useState(true);
  const [showevent, setShowEvent] = useState(false);
  const [page, setPage] = useState(0);
  const { events, counts } = useEvent(page);

  useEffect(() => {
    if (events) {
      setLoadingPage(false);
    }
  }, [events]);
  return LoadingPage ? (
    <Loading />
  ) : (
    <main className="mt-24">
      <div className="container px-6 py-12 mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            {event.Image ? (
              <Slider {...settings}>
                {event.Image &&
                  event.Image.map((image, k) => (
                    <div key={k}>
                      <Image
                        src={
                          "data:image/png;base64," + toBase64(image.file.data)
                        }
                        alt="event"
                        width={400}
                        height={200}
                        className="object-cover w-full h-48 md:w-full lg:w-full rounded-t-lg"
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
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {event.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {event.description}
              </p>
              <div className="flex justify-between items-center align-middle">
                <div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {event.city}
                  </span>
                </div>
                <a
                  href={"evenements/" + event.id}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        disabled={counts === events.length}
        page={page}
        setPage={setPage}
        totalPage={Math.ceil(counts / events.length) - 1}
      />
    </main>
  );
}
