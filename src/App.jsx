// Full React.js responsive website for RumahKinclongMedan
// Single-file React app (App.jsx) using TailwindCSS
// Services: Cleaning Service, Babat Rumput, Bersihkan Toren, Cuci AC

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Sparkles, Wind, Droplets, Leaf } from "lucide-react";

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
          <h3 className="text-3xl font-bold text-center mb-12">Layanan Kami</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceImageCard
              img="/services/cleaningservice.png"
              title="Cleaning Service"
              desc="Pembersihan rumah, kantor, dan ruko secara menyeluruh & profesional."
            />
            <ServiceImageCard
              img="/services/babatrumput.png"
              title="Babat Rumput"
              desc="Pemotongan rumput halaman agar rapi, bersih, dan enak dipandang."
            />
            <ServiceImageCard
              img="/services/cucitoren.png"
              title="Bersihkan Toren"
              desc="Pembersihan toren air agar higienis dan aman untuk keluarga."
            />
            <ServiceImageCard
              img="/services/cuciac.png"
              title="Cuci AC"
              desc="Perawatan dan pencucian AC agar dingin maksimal & hemat listrik."
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Tentang RumahKinclongMedan</h3>
          <p className="text-gray-600 leading-relaxed">
            RumahKinclongMedan adalah layanan jasa kebersihan profesional di Kota Medan yang hadir sebagai solusi
            untuk menjaga rumah dan lingkungan tetap bersih, sehat, dan nyaman. Kami melayani kebersihan rumah, cuci AC,
            kuras toren, hingga perawatan halaman dengan tenaga kerja terlatih dan berpengalaman, didukung peralatan
            modern serta standar kerja yang rapi dan aman. Kami mengutamakan kualitas layanan, ketepatan waktu, dan kepuasan pelanggan,
            sehingga setiap pekerjaan dilakukan secara profesional dengan tetap menjaga kebersihan dan keamanan lingkungan demi memberikan
            hasil terbaik bagi setiap pelanggan.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gradient-to-br from-sky-100 to-emerald-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-4">Hubungi Kami</h3>
            <p className="mb-6">Siap melayani Anda setiap hari.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3"><Phone /> 085372726263</li>
              <li className="flex items-center gap-3"><Mail /> rumahkinclongmedan@gmail.com</li>
              <li className="flex items-center gap-3"><MapPin /> Medan, Sumatera Utara</li>
            </ul>
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

function ServiceImageCard({ img, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white p-6 rounded-2xl shadow text-center"
    >
      <div className="flex justify-center mb-4">
        <img
          src={img}
          alt={title}
          className="w-28 h-28 object-contain"
        />
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </motion.div>
  );
}

