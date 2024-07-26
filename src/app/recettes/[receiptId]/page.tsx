"use client";

import useReceipt from "@/app/hooks/useReceipt";
import useStep from "@/app/hooks/useStep";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toBase64 from "@/app/function/getImageFile";
import Image from "next/image";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

export default function ShowReceipt({ params }) {
  const [receipt, setReceipt] = useState(null);
  let { receiptId } = params;

  const { receipts, counts, loading, error } = useReceipt({
    id: parseInt(receiptId),
  });
  const { steps } = useStep({
    receiptid: parseInt(receiptId),
  });
  useEffect(() => {
    if (receipts.length > 0) {
      setReceipt(receipts[0]);
    }
  }, [receipts]);

  return (
    <div className="mt-20 grid grid-cols-1 gap-4 p-4 md:grid-cols-1 lg:grid-cols-1 md:gap-8">
      <div className="flex flex-col gap-5 md:flex-col lg:flex-col md:justify-center lg:justify-center md:gap-0 lg:gap-0">
        {receipt && (
          <>
            <h2 className="text-3xl font-bold text-center mt-8 mb-4">
              {receipt.title}
            </h2>
            <Slider {...settings}>
              {receipt.Image &&
                receipt.Image.map((image, k) => (
                  <div key={k}>
                    <Image
                      src={"data:image/png;base64," + toBase64(image.file.data)}
                      alt="receipt"
                      width={300}
                      height={300}
                      className="object-cover w-full h-[400px] md:w-[100%] lg:w-[100%] rounded-t-lg"
                    />
                  </div>
                ))}
            </Slider>
          </>
        )}
        <div className="flex flex-col justify-between  leading-normal rounded-lg dark:bg-gray-800 p-4">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
            Description
          </h5>
          <p>{receipt && receipt.description}</p>
        </div>

        <div
          name="steps"
          className="flex flex-col justify-between p-4 leading-normal bg-bleu-main rounded-lg dark:bg-gray-800"
        >
          <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-1 lg:grid-cols-1 md:gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col gap-5 md:flex-col lg:flex-col md:justify-center lg:justify-center md:gap-0 lg:gap-0 rounded-lg bg-[#EEF4ED] dark:bg-gray-800 p-4"
              >
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {step.title}
                  </h5>
                  <Slider {...settings}>
                    {step.Image &&
                      step.Image.map((image, k) => (
                        <div key={k}>
                          <Image
                            src={
                              "data:image/png;base64," +
                              toBase64(image.file.data)
                            }
                            alt="step"
                            width={400}
                            height={200}
                            className="object-cover w-full h-96 md:w-full lg:w-full rounded-t-lg"
                          />
                        </div>
                      ))}
                  </Slider>
                  <p>{step.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
