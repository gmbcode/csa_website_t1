import Image from 'next/image';
import porData from '../data/por.json';

interface POR {
  id: string;
  name: string;
  position: string;
  image: string;
}

const PORPage = () => {
  return (
    <div className="pt-24 p-5 mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 dark:text-white text-black">
        Positions of Responsibility
      </h1>
      <ul className="w-auto grid xs:grid-cols-2 xs:w-fit sm:grid-cols-2 lg:grid-cols-5 gap-7 sm:gap-10 mx-auto">
        {porData.map((por, i) => (
          <div key={i}>
            <div className="text-black dark:text-white flex justify-center items-center font-sans col-span-1">
              <div className="p-3 rounded-3xl bg-[#eeeeee] dark:bg-[#1f2937] transition-transform duration-100 ease-out hover:scale-[105%] backdrop-blur-xl opacity-85">
                <Image
                  src={por.image}
                  width={160}
                  height={160}
                  alt={por.name}
                  className="w-40 aspect-square rounded-xl object-cover"
                />

                <div className="flex flex-col justify-center items-center pt-4 pb-1">
                  <div className="md:text-lg text-md font-semibold text-center">
                    {por.name}
                  </div>
                  <div className="text-gray-800 dark:text-gray-400 text-center">
                    {por.position}
                  </div>
                </div>

                <a
                  className="rounded-xl px-3 py-2 justify-center items-center group inline-flex mx-auto relative left-1/2 -translate-x-1/2"
                  href={por.linkedin}
                >
                  <svg
                    height="16px"
                    width="16px"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 382 382"
                    className="group-hover:scale-110 transition-all"
                  >
                    <path
                      className="fill-black dark:fill-white group-hover:fill-[#0B67C2] transition-colors"
                      d="
                        M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
                        C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
                        H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
                        c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
                        s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
                        c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
                        c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
                        c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
                        L341.91,330.654L341.91,330.654z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PORPage;
