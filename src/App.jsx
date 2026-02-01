// Full React.js responsive website for RumahKinclongMedan
// Single-file React app (App.jsx) using TailwindCSS
// Services: Cleaning Service, Babat Rumput, Bersihkan Toren, Cuci AC

import React from "react";
import { motion } from "framer-motion";
import ServiceImageCard from "./components/ServiceImageCard";
import { Phone, Mail, MapPin } from "lucide-react";


export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="fixed w-full z-50 bg-white shadow">
        <div className="max-w-7xl mx-8 flex justify-between items-center p-4">
          <div className="flex items-center gap-3">
            <img
              src="/logorkm.png"
              alt="Logo Rumah Kinclong Medan"
              className="h-11 w-auto"
            />
            <h1 className="text-2xl font-bold">
              <span className="text-green-600">RumahKinclong</span>
              <span className="text-gray-800">Medan</span>
            </h1>
          </div>
          <nav className="space-x-6 hidden md:block">
            <a href="#home" className="hover:text-green-600">Home</a>
            <a href="#services" className="hover:text-green-600">Layanan</a>
            <a href="#about" className="hover:text-green-600">Tentang Kami</a>
            <a href="#contact" className="hover:text-green-600">Kontak</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="bg-gradient-to-br from-sky-100 to-emerald-50 py-20">
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
                  di Kota Medan ✨
                </h1>

                {/* DESC (di mockup ada teks kecil) */}
                <p className="text-gray-600 max-w-md mb-8">
                  Layanan kebersihan rumah, AC, toren, dan halaman
                  dengan tenaga profesional & alat modern.
                </p>

                {/* CTA */}
                <a
                  href="https://wa.me/6285372726263"
                  className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-700 transition"
                >
                  <img src="/whatsapp.png" className="w-5 h-5" />
                  Pesan Sekarang via WhatsApp
                </a>

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
          <h3 className="text-3xl font-bold text-center mb-12">
            Layanan Kami
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceImageCard
              img="/services/cleaningservice.png"
              title="Cleaning Service"
              desc={`Layanan pembersihan menyeluruh untuk rumah baru, pasca-renovasi, atau rutin.
                • Pembersihan lantai (mopping & polishing)
                • Pembersihan kaca, jendela, dan kusen
                • Sanitasi kamar mandi (kerak membandel)`}
              igLink="https://www.instagram.com/jasa_cleaningservicemedan?igsh=amFzczc4Y3BwemQ4"
              fbLink="https://www.facebook.com/share/16vU2Sw7zf/"
              tiktokLink="https://www.tiktok.com/@jasacleaningservicemedan?_r=1&_t=ZS-93If9rWKtuR"
            />

            <ServiceImageCard
              img="/services/babatrumput.png"
              title="Babat Rumput"
              desc={`Transformasi halaman agar rapi dan indah.
                • Pemotongan rumput liar
                • Pembersihan sampah hijau
                • Perapian tanaman pagar`}
              igLink="https://www.instagram.com/babatrumput_rumahkinclongmedan?igsh=MXF2ejRuZHNoZWxyNg=="
              fbLink="https://www.facebook.com/share/16vU2Sw7zf/"
              tiktokLink="https://www.tiktok.com/@jasacleaningservicemedan?_r=1&_t=ZS-93If9rWKtuR"
            />

            <ServiceImageCard
              img="/services/cucitoren.png"
              title="Bersihkan Toren"
              desc={`Menjaga air tetap higienis dan aman.
                • Pembersihan lumut & bakteri
                • Pembersihan lumpur toren
                • Pengecekan jalur pipa`}
              igLink="https://www.instagram.com/cucitoren_rumahkinclongmedan?igsh=MWd2ejZhNmw4MmUxcQ=="
              fbLink="https://www.facebook.com/share/16vU2Sw7zf/"
              tiktokLink="https://www.tiktok.com/@jasacleaningservicemedan?_r=1&_t=ZS-93If9rWKtuR"
            />

            <ServiceImageCard
              img="/services/cuciac.png"
              title="Cuci AC"
              desc={`Optimalkan kesejukan & hemat listrik.
                • Cuci AC Indoor & Outdoor
                • Tambah freon
                • Perbaikan & bongkar pasang AC`}
              igLink="https://www.instagram.com/cuciac_rumahkinclongmedan?igsh=MWlkc3VpMDNpNG02dg=="
              fbLink="https://www.facebook.com/share/16vU2Sw7zf/"
              tiktokLink="https://www.tiktok.com/@jasacleaningservicemedan?_r=1&_t=ZS-93If9rWKtuR"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Tentang Rumah Kinclong Medan</h3>
          <p className="text-gray-600 leading-relaxed">
            Rumah Kinclong Medan adalah layanan jasa kebersihan profesional di Kota Medan yang hadir sebagai solusi
            untuk menjaga rumah dan lingkungan tetap bersih, sehat, dan nyaman. Kami melayani kebersihan rumah, cuci AC,
            kuras toren, hingga perawatan halaman dengan tenaga kerja terlatih dan berpengalaman, didukung peralatan
            modern serta standar kerja yang rapi dan aman. Kami mengutamakan kualitas layanan, ketepatan waktu, dan kepuasan pelanggan,
            sehingga setiap pekerjaan dilakukan secara profesional dengan tetap menjaga kebersihan dan keamanan lingkungan demi memberikan
            hasil terbaik bagi setiap pelanggan.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-gradient-to-br from-sky-100 to-emerald-50 py-20"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT - CONTACT INFO */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Hubungi Kami</h3>
            <p className="mb-8 text-gray-600">
              Siap melayani Anda setiap hari dengan respon cepat & ramah.
            </p>

            <ul className="space-y-5 text-gray-700">
              <li className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-green-100">
                  <Phone className="text-green-600" />
                </div>
                <span className="font-medium">085372726263</span>
              </li>

              <li className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-green-100">
                  <Mail className="text-green-600" />
                </div>
                <span className="font-medium">
                  rumahkinclongmedan@gmail.com
                </span>
              </li>

              <li className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-green-100">
                  <MapPin className="text-green-600" />
                </div>
                <span className="font-medium">
                  Medan, Sumatera Utara
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT - MAPS CARD */}
          <div className="bg-white rounded-3xl shadow-lg border border-green-200 overflow-hidden hover:shadow-xl transition">

            {/* MAP */}
            <div className="w-full h-[300px]">
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
