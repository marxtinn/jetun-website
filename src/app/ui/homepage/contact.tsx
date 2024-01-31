"use client";

import { UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="flex flex-col md:flex-row justify-between bg-gray-300 md:px-56">
      <div>
        <h1 className="text-center text-xl md:text-5xl my-10 pt-10 font-bold">
          Lokasi
        </h1>
        <h2 className="text-md md:text-lg ml-2 font-semibold mb-4">
          Kami berada disini!
        </h2>
        <div className="shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.7608503107795!2d98.99142447496787!3d2.2432098977370236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x302e10370f6bb3dd%3A0x1bd1d0d89aff2619!2sPerkampungan%20Pemuda%20HKBP%20Jetun%20Silangit!5e0!3m2!1sen!2sid!4v1704226161746!5m2!1sen!2sid"
            className="border-0 rounded-lg md:w-[600px] md:h-[560px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div>
        <h1 className="text-center text-xl md:text-5xl my-10 pt-10 font-bold">
          Kontak
        </h1>
        <h2 className="text-md md:text-lg ml-2 font-semibold mb-4">
          Anda memiliki pertanyaan?
        </h2>
        <div className="flex justify-center mb-10 shadow-2xl">
          <div className="max-w-xl bg-white border border-none rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg md:object-contain"
                src="/images/phone.jpg"
                alt="Phone Picture"
                width={600}
                height={500}
              />
            </a>
            <div className="p-5 md:w-4xl">
              <a href="#">
                <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                  <span className="text-2xl">
                    Pdt. Agus Manullang <br />
                  </span>
                  (Ka. Jetun)
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Anda dapat menghubungi kami dengan mengeklik tombol di bawah
                ini.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=62811625504&text=Halo%2C%20saya%20mau%20tanya%20tentang%20Perkampungan%20Pemuda%20HKBP%20Jetun-Silangit%20dong%20%3A)"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-whatsapp rounded-lg focus:ring-4 focus:outline-none focus:ring-hkbp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
