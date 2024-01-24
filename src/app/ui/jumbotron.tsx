"use client";

export default function Jumbotron() {
  return (
    <section
      className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply md:min-h-screen"
      style={{ backgroundImage: `url('/images/jetun.jpg')` }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 md:py-72">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Perkampungan Pemuda HKBP <br /> Jetun - Silangit
        </h1>
        <p className="mb-8 text-lg text-justify font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Perkampungan Pemuda HKBP Jetun Silangit berada di Desa Pohan Tonga,
          Kecamatan Siborongborong, Kabupaten Tapanuli Utara di Provinsi
          Sumatera Utara. Luas daripada lahan tersebut adalah 22.433 hektar.
          Pada tanggal 6 Februari 1966, lokasi ini diresmikan oleh HKBP sebagai
          Pusat Pemuda yang disebut, &quot;Youth Center Jetun Silangit&quot;.
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          
          <a
            href="#"
            className="inline-flex justify-center hover:text-hkbp items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Lihat Fasilitas
          </a>
        </div>
      </div>
    </section>
  );
}
