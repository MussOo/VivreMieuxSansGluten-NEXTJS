"use client";

import Image from "next/image";
import background_ble from "../../public/img/ble.jpg";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [show_description_coaliaque, setShow_description_coaliaque] =
    useState(true);
  const [show_popup_coeliaque, setShow_popup_coeliaque] = useState(false);

  return (
    <main className="flex min-h-screen flex-col justify-between m-0">
      {/* Hero */}
      <div className="h-auto w-full flex items-center justify-center relative min-h-[60em]  flex-col lg:flex-row gap-5">
        <Image
          src={background_ble}
          width={650}
          height={650}
          alt="Flowbite Logo"
          className="lg:relative bg-cover content-center object-cover object-center"
        />
        <div className="flex flex-col items-start justify-between  gap-10 bg-bleu-main lg:relative lg:left-[-80px] lg:h-[500px] lg:w-[700px] rounded-sm p-6">
          <h2 className="text-4xl font-bold blur-none text-jaune-main">
            Qui nous sommes ?
          </h2>
          <span className="text-2xl font-medium text-white">
            La maladie cœliaque est une{" "}
            <span className="text-jaune-main font-bold">
              maladie auto-immune
            </span>{" "}
            où le système immunitaire réagit de manière anormale au gluten,
            provoquant des lésions dans l'intestin grêle. Les symptômes incluent{" "}
            <span className="text-jaune-main font-bold">
              des troubles digestifs et non digestifs
            </span>
            . Le traitement consiste en un régime sans gluten à vie pour éviter
            les complications et maintenir{" "}
            <span className="text-jaune-main font-bold">une bonne santé</span>.
          </span>
          <div>
            <a
              href=""
              className="text-jaune-main font-bold text-2xl hover:underline"
            >
              En Savoir +
            </a>
          </div>
        </div>
      </div>

      {/* define of celiac disease with background black with blur */}
      <div
        className={
          "w-full flex flex-col gap-[5em] items-center justify-center bg-jaune-main min-h-[50vh] " +
          (show_description_coaliaque ? "block" : "hidden")
        }
      >
        {/*titre qui pose la question si vous connaisez la maladie cœliaque */}
        <h2 className="text-4xl font-bold text-white">
          Connaissez-vous la maladie cœliaque ?
        </h2>
        {/*reponse a la questio sous forme de button oui ou non pour soit faire disparaitre la div ou afficher le texte */}
        <div className="flex flex-row gap-10">
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            type="button"
            onClick={() => {
              setShow_description_coaliaque(false);
            }}
          >
            Oui
          </button>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            type="button"
            onClick={() => {
              setShow_popup_coeliaque(true);
            }}
          >
            Non
          </button>
        </div>
      </div>
      {/* Cards */}
      <div className="mt-[5em] flex flex-col gap-10">
        <h3 className="text-4xl font-bold text-bleu-main text-center">
          Nos Evenements
        </h3>

        <div className="flex flex-col items-center gap-8 lg:flex-row flex-wrap lg:flex-nowrap lg:space-x-20 justify-center ">
          <div className="relative flex flex-col mt-6 justify-center  text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={background_ble}
                width={500}
                height={500}
                alt="Flowbite Logo"
                className="bg-cover w-full"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                UI/UX Review Check
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to "Naviglio" where you can enjoy the main
                night life in Barcelona.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:bg-jaune-main hover:text-bleu-main duration-500 hover:scale-110"
                type="button"
              >
                Voir +
              </button>
            </div>
          </div>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={background_ble}
                width={500}
                height={500}
                alt="Flowbite Logo"
                className="bg-cover w-full"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                UI/UX Review Check
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to "Naviglio" where you can enjoy the main
                night life in Barcelona.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:bg-jaune-main hover:text-bleu-main duration-500 hover:scale-110"
                type="button"
              >
                Voir +
              </button>
            </div>
          </div>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={background_ble}
                width={500}
                height={500}
                alt="Flowbite Logo"
                className="bg-cover w-full"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                UI/UX Review Check
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to "Naviglio" where you can enjoy the main
                night life in Barcelona.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none hover:bg-jaune-main hover:text-bleu-main duration-500 hover:scale-110"
                type="button"
              >
                Voir +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* popup coeliaque */}
      <div
        className={
          "fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-transform " +
          (show_popup_coeliaque ? "block" : "hidden")
        }
      >
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg">
          <h2 className="text-4xl font-bold text-bleu-main">
            La maladie cœliaque
          </h2>
          <p className="text-lg text-bleu-main">
            La maladie cœliaque est une maladie auto-immune où le système
            immunitaire réagit de manière anormale au gluten,
            <br />
            provoquant des lésions dans l'intestin grêle. Les symptômes incluent
            des troubles digestifs et non digestifs.
            <br />
            Le traitement consiste en un régime sans gluten à vie pour éviter
            les complications et maintenir une bonne santé.
          </p>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            onClick={() => {
              setShow_popup_coeliaque(false);
            }}
          >
            Fermer
          </button>
        </div>
      </div>

      {/* Offres abonnement */}
      <div className="flex flex-col justify-evenly items-center gap-10 mt-6 min-h-[800px]">
        <h2 className="text-4xl font-bold text-bleu-main text-center">
          Devener membres
        </h2>
        <div className="flex flex-col justify-center items-center lg:flex-row gap-10">
          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-jaune-main hover:-translate-y-8 duration-500 transition-all"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              DES ACTUALITES
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>

          <a
            href="#"
            className="block  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-jaune-main hover:-translate-y-8 duration-500  transition-all "
          >
            <h5 className="lg:mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              DES RECETTES
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              entrée, plat, dessert, boisson et bien d'autres recettes réalisées
              sans gluten. Vous trouverez forcément votre bonheur. Bonne
              dégustation !
            </p>
          </a>

          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-jaune-main hover:-translate-y-8 duration-500  transition-all "
          >
            <h5 className="lg:mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              DES EVENEMENTS
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 ">
              Des conferences, ateliers de cuisine ou meme des rencontres entre
              personnes atteintes de la maladie cœliaque.
            </p>
          </a>
        </div>
        <div className="mb-10">
          {/* bouton s'abonnez */}
          <button
            type="button"
            className="text-white font-bold bg-jaune-main hover:bg-[#FFE13D] transition-all hover:scale-110 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-xl px-4 py-2 text-center w-48 h-12"
          >
            S'ABONNER
          </button>
        </div>
      </div>
    </main>
  );
}
