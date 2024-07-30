"use client";
import SelectCategory from "@/components/Category/SelectCategory";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import useReceipt from "../hooks/useReceipt";
import toBase64 from "../function/getImageFile";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "@/components/Loading";
import { useAuth } from "@/context/authContext";

export default function Page() {
  const { user } = useAuth();
  const [category_selected, setCategory_selected] = useState(1);
  const [loadingPage, setloadingPage] = useState(true);
  const [page, setPage] = useState(0);

  const { receipts, counts, loading, error } = useReceipt({
    page,
    category: category_selected,
  });

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  useEffect(() => {
    if (!loading) {
      setloadingPage(false);
    }
  }, [loading]);

  return (
    <div className="mt-20">
      {loadingPage ? (
        <Loading />
      ) : error ? (
        <div>Error</div>
      ) : (
        <div className="mt-32">
          {" "}
          <h2 className="text-3xl font-bold text-center ">Recettes</h2>
          {user && user?.type === "admin" ? (
            <div className="flex justify-start mt-4 px-4">
              <a
                href="/recettes/add"
                className="px-4 py-2 text-white bg-blue-500 rounded-md"
              >
                Ajouter une recette
              </a>
            </div>
          ) : (
            <></>
          )}
          <SelectCategory
            setCategory_selected={setCategory_selected}
            category_selected={category_selected}
          />
          <div className="grid grid-cols-1 gap-4 p-4 mt-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {receipts.map((receipt) => (
              <a
                href={"/recettes/" + receipt.id}
                key={receipt.id}
                className="flex flex-col gap-5 md:flex-col lg:flex-col md:justify-center lg:justify-center md:gap-0 lg:gap-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg
              hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <Slider {...settings}>
                  {receipt.Image &&
                    receipt.Image.map((image, k) => (
                      <div key={k}>
                        <Image
                          src={
                            "data:image/png;base64," + toBase64(image.file.data)
                          }
                          alt="receipt"
                          width={400}
                          height={200}
                          className="object-cover w-full h-48 md:w-full lg:w-full rounded-t-lg"
                        />
                      </div>
                    ))}
                </Slider>

                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {receipt.title}
                  </h5>
                </div>
              </a>
            ))}
          </div>
          <Pagination
            page={page}
            setPage={setPage}
            totalPage={Math.ceil(counts / receipts.length)}
          />
        </div>
      )}
    </div>
  );
}
