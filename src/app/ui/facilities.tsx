"use client";

import Image from "next/image";

export default function Facilities() {
  return (
    <section className="pb-10">
      <h1 className="text-center text-xl font-bold my-10 md:text-5xl">
        Fasilitas
      </h1>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-evenly px-24 mb-10">
        <div className="md:w-1/4 md:align-middle">
          <ul className="w-full text-sm font-medium text-hkbp bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full p-4 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <span className="font-semibold text-xl">
                2 VIP Rooms <br />
              </span>
              <span className="font-semibold text-xl">
                11 Standard Rooms <br />
              </span>
              <span className="text-md">(up to 100 guests)</span>
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              <span className="font-semibold text-xl">
                Conference Hall w/ Videotron <br />
              </span>
              (up to 2000 guests)
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              <span className="font-semibold text-xl">
                Mini Aula <br />
              </span>
              (for 50-100 guests)
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              <span className="font-semibold text-xl">Job Training Hall</span>
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              <span className="font-semibold text-xl">Prayer Rooms</span>
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              <span className="font-semibold text-xl">2x Gazebos</span>
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              <span className="font-semibold text-xl">Dining Hall</span>
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              <span className="font-semibold text-xl">Camping Area</span>
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              <span className="font-semibold text-xl">Pine Forest</span>
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              <span className="font-semibold text-xl">Pond</span>
            </li>
            <li className="w-full px-4 py-2 md:py-3.5 rounded-b-lg">
              <span className="font-semibold text-xl">Sports Facilities</span>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex my-auto">
            <div className="align-middle grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/images/jetun.jpg"
                    alt=""
                    width={200}
                    height={100}
                  />{" "}
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/images/conference_hall_stage.jpg"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/images/conference_hall.jpg"
                    alt=""
                    width={200}
                    height={250}
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/images/conference_hall_stage.jpg"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/images/conference_hall.jpg"
                    alt=""
                    width={200}
                    height={250}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/images/jetun.jpg"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/images/conference_hall.jpg"
                    alt=""
                    width={200}
                    height={250}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/images/jetun.jpg"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/images/conference_hall_stage.jpg"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/images/jetun.jpg"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/images/conference_hall_stage.jpg"
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/images/conference_hall.jpg"
                    alt=""
                    width={200}
                    height={250}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
