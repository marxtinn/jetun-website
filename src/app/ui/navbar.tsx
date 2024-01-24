"use client";

import Image from "next/image";
import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function NavBar() {
  return (
    <Navbar fluid className="px-10 fixed w-full z-20 top-0 start-0 rounded-b-lg">
      <Navbar.Brand as={Link} href="#">
        <Image
          priority
          src="/images/Logo-HKBP.webp"
          width={50}
          height={50}
          alt="HKBP Logo"
        />
        <p className="self-center whitespace-nowrap text-xl md:text-3xl font-bold dark:text-white">
          PPJS
        </p>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="#" className="text-hkbp text-xl">
          Tentang
        </Navbar.Link>
        <Navbar.Link href="#" className="text-hkbp text-xl">
          Fasilitas{" "}
        </Navbar.Link>
        <Navbar.Link href="#" className="text-hkbp text-xl">
          Program
        </Navbar.Link>
        <Navbar.Link href="#" className="text-hkbp text-xl">
          Kontak
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
