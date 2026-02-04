// Full React.js responsive website for RumahKinclongMedan
// Single-file React app (App.jsx) using TailwindCSS
// Services: Cleaning Service, Babat Rumput, Bersihkan Toren, Cuci AC

// import React from "react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceImageCard from "./components/ServiceImageCard";
import { Phone, Mail, MapPin } from "lucide-react";


export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="fixed w-full z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/logorkm.png"
              alt="Logo Rumah Kinclong Medan"
              className="h-10 w-auto"
            />
            <h1 className="text-xl font-bold">
              <span className="text-green-600">RumahKinclong</span>
              <span className="text-gray-800">Medan</span>
            </h1>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex space-x-6 font-medium">
            <a href="#home" className="hover:text-green-600">Home</a>
            <a href="#services" className="hover:text-green-600">Our Services</a>
            <a href="#about" className="hover:text-green-600">About Us</a>
            <a href="#mitra" className="hover:text-green-600">Daftar Mitra</a>
            <a href="#contact" className="hover:text-green-600">Contact</a>
          </nav>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* MENU MOBILE */}
        {open && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <nav className="flex flex-col px-6 py-4 space-y-4 font-medium">
              <a onClick={() => setOpen(false)} href="#home">Home</a>
              <a onClick={() => setOpen(false)} href="#services">Our Services</a>
              <a onClick={() => setOpen(false)} href="#about">About Us</a>
              <a onClick={() => setOpen(false)} href="#mitra">Daftar Mitra</a>
              <a onClick={() => setOpen(false)} href="#contact">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="pt-24 bg-gradient-to-br from-sky-100 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* HERO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl px-10 py-14 md:px-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* TEXT */}
              <div>
                {/* BADGE */}
                <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-2 py-1.5 rounded-full text-sm font-medium mb-5">
                  🏡 Jasa Kebersihan Profesional Medan
                </span>

                {/* TITLE */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-5">
                  Solusi Rumah <span className="text-green-600">Bersih & Nyaman</span>
                  <br />
                  di Kota Medan
                </h1>

                {/* DESC (di mockup ada teks kecil) */}
                <p className="text-gray-600 max-w-md mb-8">
                  Layanan kebersihan rumah, AC, toren, dan halaman
                  dengan tenaga profesional & alat modern.
                </p>

                {/* CTA */}
                <motion.a
                  href="https://wa.me/6285372726263"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-xl hover:bg-green-700"
                >
                  <img src="/whatsapp.png" className="w-5 h-5" />
                  Pesan Sekarang via WhatsApp
                </motion.a>

              </div>

              {/* IMAGE */}
              <div className="flex justify-center md:justify-end">
                <img
                  src="/hero-cleaner.png"
                  alt="Jasa Kebersihan Rumah Medan"
                  className="w-full max-w-lg drop-shadow-2xl"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-center mb-6">
              Our Services
            </h3>

            <p className="text-gray-600 mb-4">
              Kami membagi layanan kami menjadi 4 Divisi Utama untuk memenuhi segala kebutuhan rumah Anda:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceImageCard
              img="/services/cleaningservice.png"
              title="Cleaning Service (Kebersihan Interior)"
              desc={`Layanan inti kami untuk menciptakan interior yang berkilau.
                • General Cleaning: Sapu, pel, dusting, rapikan kamar, dan pembersihan kamar mandi harian.
                • Deep Cleaning: Pembersihan mendetail kerak kamar mandi, noda membandel di dapur, kaca jendela, dan sudut sulit.
                • Post-Renovation: Pembersihan total sisa cat, semen, dan debu tebal pasca renovasi.
                • Hydro Vacuum: Sedot tungau dan debu pada kasur, sofa, dan karpet.`}
              igLink="https://www.instagram.com/jasa_cleaningservicemedan?igsh=amFzczc4Y3BwemQ4"
              fbLink="https://www.facebook.com/share/16vU2Sw7zf/"
              tiktokLink="https://www.tiktok.com/@jasacleaningservicemedan?_r=1&_t=ZS-93If9rWKtuR"
            />

            <ServiceImageCard
              img="/services/babatrumput.png"
              title="Gardening (Perawatan Taman & Lahan)"
              desc={`Halaman yang tidak terawat adalah sarang nyamuk dan hama.
                • Babat Rumput: Pemotongan rumput liar di halaman rumah atau lahan kosong (kaplingan).
                • Merapikan Taman: Pemangkasan tanaman hias agar terlihat rapi dan estetik.
                • Pembersihan Gulma: Mencabut tanaman liar hingga ke akar.`}
              igLink="https://www.instagram.com/babatrumput_rumahkinclongmedan?igsh=MXF2ejRuZHNoZWxyNg=="
              fbLink="https://www.facebook.com/share/16vU2Sw7zf/"
              tiktokLink="https://www.tiktok.com/@jasacleaningservicemedan?_r=1&_t=ZS-93If9rWKtuR"
            />

            <ServiceImageCard
              img="/services/cucitoren.png"
              title="Toren Cleaning (Kuras Tangki Air)"
              desc={`Air bersih adalah kunci kesehatan kulit dan pencernaan keluarga.
                • Kuras Toren Atas/Bawah: Membersihkan endapan lumpur, lumut, dan pasir di dasar tangki.
                • Pembersihan Kran Mampet: Melancarkan aliran air yang tersumbat kotoran dari toren.
                • Direkomendasikan dilakukan rutin setiap 3-6 bulan sekali.`}
              igLink="https://www.instagram.com/cucitoren_rumahkinclongmedan?igsh=MWd2ejZhNmw4MmUxcQ=="
              fbLink="https://www.facebook.com/share/16vU2Sw7zf/"
              tiktokLink="https://www.tiktok.com/@jasacleaningservicemedan?_r=1&_t=ZS-93If9rWKtuR"
            />

            <ServiceImageCard
              img="/services/cuciac.png"
              title="AC Maintenance (Perawatan AC)"
              desc={`Pastikan udara di rumah sejuk dan sehat.
                • Cuci AC (Split/Cassette): Pembersihan filter dan evaporator agar AC kembali dingin dan hemat listrik.
                • Isi Freon (R22/R32/R410): Penambahan atau pengisian ulang gas pendingin.
                • Perbaikan Ringan: Mengatasi AC bocor air, berisik, atau tidak dingin.`}
              igLink="https://www.instagram.com/cuciac_rumahkinclongmedan?igsh=MWlkc3VpMDNpNG02dg=="
              fbLink="https://www.facebook.com/share/16vU2Sw7zf/"
              tiktokLink="https://www.tiktok.com/@jasacleaningservicemedan?_r=1&_t=ZS-93If9rWKtuR"
            />
          </div>
        </div>
      </section>

      {/* About - Full Width */}
      <section id="about" className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              Tentang <span className="text-green-600">Rumah Kinclong Medan</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Solusi One-Stop Home Maintenance untuk hunian bersih, sehat, dan nyaman di Kota Medan.
            </p>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-3xl p-10 md:p-14 shadow-xl"
          >
            {/* ABOUT */}
            <div className="mb-14">
              <h4 className="text-2xl font-bold mb-5 text-gray-800">
                1. About Us
              </h4>

              <p className="text-gray-700 leading-relaxed mb-4">
                Rumah Kinclong Medan adalah penyedia jasa perawatan dan kebersihan hunian
                yang berbasis di Kota Medan. Kami hadir sebagai jawaban atas kebutuhan
                masyarakat urban yang menginginkan kepraktisan dalam merawat rumah.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Awalnya berfokus pada <strong>General Cleaning</strong>, kini kami berkembang
                menjadi solusi <strong>One-Stop Home Maintenance</strong>. Kami memahami bahwa
                rumah yang nyaman bukan hanya soal lantai yang bersih, tetapi juga AC yang dingin,
                air toren yang higienis, dan halaman yang rapi.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Dengan satu kali panggilan ke <strong>Rumah Kinclong Medan</strong>, seluruh
                masalah kebersihan rumah Anda dapat teratasi secara profesional.
              </p>

              <p className="italic font-semibold text-green-700 mt-6">
                “Dari atap hingga halaman, kami pastikan rumah Anda Kinclong, Sehat, dan Nyaman.”
              </p>
            </div>

            {/* VISI & MISI */}
            <div>
              <h4 className="text-2xl font-bold mb-6 text-gray-800">
                2. Visi & Misi
              </h4>

              {/* VISI */}
              <div className="mb-6">
                <h5 className="font-semibold text-lg text-green-700 mb-2">
                  Visi
                </h5>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi mitra perawatan rumah tangga terpercaya nomor satu di Medan
                  yang menyediakan layanan terlengkap dengan standar profesional.
                </p>
              </div>

              {/* MISI */}
              <div>
                <h5 className="font-semibold text-lg text-green-700 mb-3">
                  Misi
                </h5>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Menyediakan layanan terintegrasi (Cleaning, AC, Toren, dan Taman)
                    untuk kemudahan pelanggan.
                  </li>
                  <li>
                    Menjamin kebersihan air dan udara di rumah pelanggan demi kesehatan keluarga.
                  </li>
                  <li>
                    Memberikan pelayanan yang cepat, jujur, dan transparan kepada warga Medan.
                  </li>
                  <li>
                    Menggunakan peralatan modern serta teknisi yang kompeten di bidangnya
                    masing-masing.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Daftar Mitra */}
      <section id="mitra" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          {/* JUDUL */}
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              Daftar Mitra <span className="text-green-600"> Rumah Kinclong Medan </span>
            </h3>
            <p className="text-gray-600 mx-auto ">
              Bergabunglah sebagai mitra dan dapatkan peluang penghasilan
              dengan sistem kerja profesional dan transparan.
            </p>
          </div>

          {/* SYARAT & KETENTUAN */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">
              Syarat dan Ketentuan Mitra Rumah Kinclong Medan
            </h4>

            <p className="text-gray-600 mb-4">
              Calon mitra wajib menyiapkan dan mengunggah dokumen berikut:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Scan KTP</li>
              <li>Scan KK</li>
              <li>Scan SIM</li>
              <li>Scan Ijazah</li>
              <li>Lamaran Kerja Mitra</li>
              <li>Surat Perjanjian Mitra</li>
            </ul> <br />

            {/* SURAT PERJANJIAN PDF VIEWER */}
            <h4 className="text-xl font-semibold text-center mb-4 text-gray-800">
              Surat Perjanjian & Komitmen Mitra
            </h4>

            <div className="w-full h-[600px] border rounded-xl overflow-hidden">
              <iframe
                src="/dokumen/Surat-Perjanjian-Mitra-Rumah-Kinclong-Medan.pdf"
                title="Surat Perjanjian Mitra"
                className="w-full h-full"
              />
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Silakan baca surat perjanjian dengan seksama sebelum mendaftar sebagai mitra.
            </p>

            {/* DOWNLOAD SURAT */}
            <div className="mt-6">
              <a
                href="/dokumen/Surat-Perjanjian-Mitra-Rumah-Kinclong-Medan.pdf"
                download
                className="inline-flex items-center gap-2 bg-gray-100 text-green-700 px-5 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
              >
                📄 Download Surat Perjanjian & Komitmen Mitra
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <motion.a
              href="https://docs.google.com/forms/d/1mp21d68a5j70WUnW02tBMz9lE2uR803jUipeXuCUMsM/edit"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-700 transition"
            >
              🤝 Daftar Mitra Sekarang
            </motion.a>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-gradient-to-br from-sky-100 to-emerald-50 py-24"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT - INFORMASI PERUSAHAAN */}
          <div>
            <h3 className="text-3xl font-extrabold mb-8">
              Informasi <span className="text-green-600">Perusahaan</span>
            </h3>

            <div className="space-y-4 text-gray-700 text-base">

              <div className="grid grid-cols-3 gap-4">
                <span className="font-semibold">Company Profile</span>
                <span className="col-span-2">: Rumah Kinclong Medan</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <span className="font-semibold">WhatsApp</span>
                <span className="col-span-2">: 085372726263</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <span className="font-semibold">Email</span>
                <span className="col-span-2">: rumahkinclongmedan@gmail.com</span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <span className="font-semibold">Website</span>
                <span className="col-span-2">
                  :{" "}
                  <a
                    href="https://rumahkinclongmedan.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium hover:underline"
                  >
                    rumahkinclongmedan.vercel.app
                  </a>
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <span className="font-semibold">Jam Operasional</span>
                <span className="col-span-2">
                  : Senin – Minggu (08.00 – 18.00 WIB)
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <span className="font-semibold">Wilayah Layanan</span>
                <span className="col-span-2">: Medan dan sekitarnya</span>
              </div>

            </div>
          </div>

          {/* RIGHT - MAPS CARD */}
          <div className="bg-white rounded-3xl shadow-lg border border-green-200 overflow-hidden hover:shadow-xl transition">

            {/* MAP */}
            <div className="w-full h-[320px]">
              <iframe
                title="Lokasi RumahKinclongMedan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.7936420879605!2d98.77229517349016!3d3.6345253499803483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031343c1d151b0f%3A0x754c4b6abea3403!2sJl.%20Komp.%20Rumah%20Pd.%206%20Blk.%20T%20No.3%2C%20Bandar%20Klippa%2C%20Kec.%20Percut%20Sei%20Tuan%2C%20Kabupaten%20Deli%20Serdang%2C%20Sumatera%20Utara%2020371!5e0!3m2!1sid!2sid!4v1769933255659!5m2!1sid!2sid"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* CTA MAP */}
            <div className="p-4 text-center bg-gray-50">
              <a
                href="https://maps.app.goo.gl/M3eujTBkZWvyHkDdA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-700 font-semibold hover:underline"
              >
                📍 Buka di Google Maps
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p>© {new Date().getFullYear()} RumahKinclongMedan. All rights reserved.</p>
      </footer>
    </div>
  );
}
