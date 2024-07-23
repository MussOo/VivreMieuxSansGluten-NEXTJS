"use client";
import Image from "next/image";
import background_ble from "../../../../public/img/ble.jpg";
export default function ShowEvenementPage({
  event,
  setShowEvent,
}: {
  event: any;
  setShowEvent: any;
}) {
  return (
    <main className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 transition-transform z-50">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg  w-[80%] h-[80%]">
        <div className="carousel w-full">
          {/* {event.images.map((image: any) => (
            <div id="item1" className="carousel-item max-w-xs">
              <Image
                key={image.id}
                src={image.url}
                width={650}
                height={650}
                alt="Flowbite Logo"
                className="relative bg-cover content-center object-cover object-center"
              />
            </div>
          ))} */}
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-bleu-main p-2">
            {event.title}
          </h2>
          <p className="text-gray-600 p-2">{event.description}</p>
        </div>
        <div className="flex justify-between flex-row-reverse mt-4">
          <button
            className="btn btn-bleu-main text-red-500"
            onClick={() => {
              setShowEvent(false);
            }}
          >
            Fermer
          </button>
        </div>
      </div>
    </main>
  );
}
