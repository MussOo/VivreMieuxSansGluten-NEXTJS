"use client";
import Image from "next/image";
import background_ble from "../../../../public/img/ble.jpg";
export default function ShowEvenementPage() {
  return (
    <main className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-transform z-50">
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg  w-[80%]">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-bleu-main p-2">Titre</h2>
          <p className="text-gray-600 p-2">Description</p>
        </div>
        <div className="flex justify-between flex-row-reverse mt-4">
          <button className="btn btn-bleu-main text-red-500">Fermer</button>
        </div>
      </div>
    </main>
  );
}
