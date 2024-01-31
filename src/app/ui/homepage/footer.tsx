"use client";

import {
  FaFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <section>
      <footer className="bg-gray-300 dark:bg-gray-900">
        <div className="mx-auto w-full p-4 py-6 lg:py-8">
          <hr className="my-6 border-gray-400 w-full sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://hkbp.or.id/" className="hover:underline">
                Huria Kristen Batak Protestan (HKBP)
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="https://www.facebook.com/profile.php?id=100077194938540"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/kantorpusathkbp/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaSquareInstagram />
              </a>

              <a
                href="https://twitter.com/kantorpusathkbp"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaSquareXTwitter />
              </a>

              <a
                href="https://www.youtube.com/channel/UCFh11Eogyk5Z2a34antspdQ"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
