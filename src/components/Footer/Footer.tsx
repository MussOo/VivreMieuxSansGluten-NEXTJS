import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bleu-main text-white p-6 dark:bg-gray-900 ">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl font-bold">Flowbite</h2>
          <p className="text-lg">
            Flowbite is a creative design agency which offers digital solutions
            for businesses and startups.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="text-lg">
            123 Street Name, City Name, United States
            <br />
            0123 456 789
            <br />
            <a
              href="mailto:merde@gmail.com
"
            />
          </p>
        </div>
      </div>
    </footer>
  );
}
