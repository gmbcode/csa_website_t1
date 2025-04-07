import Image from "next/image";
import porData from "../data/por.json";

interface POR {
  id: string;
  name: string;
  about: string;
  image: string;
}

const PORPage = () => {
  return (
    <div className="pt-24 p-5 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-white ">Positions of Responsibility</h1>
      <ul className="space-y-16">
        {porData.map((por, i) => (
          <li
            key={por.id}
            className={`relative flex items-center ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="relative bg-gray-600 shadow-lg p-6 w-3/5 h-1/5 text-center">
              <div
                className={`absolute -bottom-0 ${
                  i % 2 === 0 ? "-left-12" : "-right-12"
                }`}
              >
                <Image
                  src={por.image}
                  alt={por.name}
                  width={200}
                  height={96}
                  className=""
                />
              </div>
              {/* Text content */}
              <h2 className="text-xl font-semibold mt-4">{por.name}</h2>
              <p className="text-white">{por.about}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PORPage;