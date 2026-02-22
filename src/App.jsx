// Full React.js responsive website for RumahKinclongMedan
// Single-file React app (App.jsx) using TailwindCSS
// Services: Cleaning Service, Babat Rumput, Bersihkan Toren, Cuci AC

// import React from "react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ServiceImageCard from "./components/ServiceImageCard";
import { Phone, Mail, MapPin } from "lucide-react";


export default function App() {
  const [open, setOpen] = useState(false);

  const [testimonials, setTestimonials] = useState([]);
  const [testimonialForm, setTestimonialForm] = useState({
    name: "",
    service: "",
    message: "",
    rating: 0,
  });

  // Load dari localStorage saat web dibuka
  useEffect(() => {
    const saved = localStorage.getItem("rk_testimonials");
    if (saved) {
      setTestimonials(JSON.parse(saved));
    }
  }, []);

  const handleTestimonialChange = (e) => {
    setTestimonialForm({
      ...testimonialForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleTestimonialSubmit = (e) => {
    e.preventDefault();

    if (
      !testimonialForm.name ||
      !testimonialForm.message ||
      testimonialForm.rating === 0 ||
      !testimonialForm.service
    ) return;

    const newTestimonial = {
      id: Date.now(),
      name: testimonialForm.name,
      service: testimonialForm.service,
      message: testimonialForm.message,
      rating: testimonialForm.rating,
    };

    const updatedTestimonials = [newTestimonial, ...testimonials];

    setTestimonials(updatedTestimonials);
    localStorage.setItem(
      "rk_testimonials",
      JSON.stringify(updatedTestimonials)
    );

    setTestimonialForm({
      name: "",
      service: "",
      message: "",
      rating: 0,
    });
  };

  const StarRating = ({ rating, setRating }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className={`text-2xl transition ${star <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  const serviceOptions = [
    "Cleaning Service (Kebersihan Interior)",
    "Gardening (Perawatan Taman & Lahan)",
    "Toren Cleaning (Kuras Tangki Air)",
    "AC Maintenance (Perawatan AC)",
  ];


  const galleryData = [
    {
      title: "Cleaning Service",
      service: "Cleaning Service",
      images: [
        "/gallery/cleaning/cleaning1.jpg",
        "/gallery/cleaning/cleaning2.jpg",
      ],
    },
    {
      title: "Gardening",
      service: "Gardening",
      images: [
        "/gallery/gardening/garden1.jpg",
        "/gallery/gardening/garden2.jpg",
      ],
    },
    {
      title: "Toren Cleaning",
      service: "Toren Cleaning",
      images: [
        "/gallery/toren/toren1.jpg",
        "/gallery/toren/toren2.jpg",
      ],
    },
    {
      title: "AC Maintenance",
      service: "AC Maintenance",
      images: [
        "/gallery/ac/ac1.jpg",
        "/gallery/ac/ac2.jpg",
      ],
    },
  ];

  const faqData = [
    // CLEANING SERVICE
    {
      category: "Jasa Cleaning Service (General & Deep Cleaning)",
      question: "Apa bedanya General Cleaning dan Deep Cleaning?",
      answer: (
        <>
          <p className="mb-3">
            <span className="font-semibold text-gray-800">General Cleaning:</span>
            {" "}Pembersihan rutin harian seperti sapu, pel, lap kaca, cuci piring,
            dan pembersihan kamar mandi standar.
          </p>
          <p>
            <span className="font-semibold text-gray-800">Deep Cleaning:</span>
            {" "}Pembersihan menyeluruh untuk rumah lama kosong, pasca renovasi,
            atau pasca banjir. Termasuk pembersihan kerak kamar mandi membandel
            serta detail hingga ke sela-sela terkecil.
          </p>
        </>
      )
    },
    {
      category: "Jasa Cleaning Service (General & Deep Cleaning)",
      question: "Berapa lama waktu pengerjaannya?",
      answer:
        "Durasi pengerjaan tergantung luas bangunan dan kondisi rumah. Untuk rumah standar tipe 36/45, biasanya memakan waktu 3–5 jam dengan 2–3 personil profesional."
    },
    {
      category: "Jasa Cleaning Service (General & Deep Cleaning)",
      question: "Apakah furniture saya aman dari cairan kimia?",
      answer:
        "Ya. Kami menggunakan cairan pembersih khusus yang disesuaikan dengan material permukaan (kayu, keramik, maupun kulit) sehingga tidak merusak tekstur atau warna."
    },

    // CUCI AC
    {
      category: "Jasa Cuci AC (Air Conditioner)",
      question: "Kapan saya harus cuci AC?",
      answer:
        "Idealnya setiap 3–4 bulan sekali untuk menjaga kualitas udara tetap bersih serta mencegah AC menjadi boros listrik atau cepat rusak."
    },
    {
      category: "Jasa Cuci AC (Air Conditioner)",
      question: "Apakah pengerjaannya berantakan atau menciprat ke tembok?",
      answer:
        "Tidak. Tim kami menggunakan plastik pelindung (cover AC) khusus sehingga air sisa pencucian langsung mengalir ke wadah tanpa mengenai dinding atau lantai."
    },
    {
      category: "Jasa Cuci AC (Air Conditioner)",
      question: "Bagaimana jika AC tetap tidak dingin setelah dicuci?",
      answer:
        "Teknisi kami akan mengecek tekanan freon dan kondisi kompresor. Jika terdapat kerusakan komponen, kami akan menginformasikan terlebih dahulu sebelum melakukan perbaikan (biaya perbaikan terpisah dari layanan cuci)."
    },

    // KURAS TOREN
    {
      category: "Jasa Kuras Toren (Tangki Air)",
      question: "Mengapa toren harus dikuras rutin?",
      answer:
        "Toren air sering mengalami penumpukan lumut dan endapan lumpur yang dapat menyumbat pipa serta menjadi sarang bakteri. Pembersihan rutin membantu menjaga kualitas air tetap higienis."
    },
    {
      category: "Jasa Kuras Toren (Tangki Air)",
      question: "Apakah bagian dalam toren benar-benar disikat?",
      answer:
        "Ya. Kami menguras air hingga habis, menyikat dinding bagian dalam sampai bersih dari lumut, lalu melakukan pembilasan hingga air benar-benar jernih sebelum diisi kembali."
    },
    {
      category: "Jasa Kuras Toren (Tangki Air)",
      question: "Bisa sekalian pasang otomatis (radar) toren?",
      answer:
        "Bisa. Silakan informasikan kepada admin saat melakukan booking jika ingin penambahan pemasangan atau penggantian pelampung/radar air."
    },

    // BABAT RUMPUT
    {
      category: "Jasa Babat Rumput (Garden Maintenance)",
      question: "Pakai alat apa untuk babat rumput?",
      answer:
        "Kami menggunakan mesin babat rumput gendong (potong cepat & rapi) atau mesin dorong, tergantung luas dan kondisi lahan."
    },
    {
      category: "Jasa Babat Rumput (Garden Maintenance)",
      question: "Apakah sampah rumput langsung dibersihkan?",
      answer:
        "Ya. Layanan sudah termasuk pengumpulan rumput ke dalam karpet atau plastik sampah. Pembuangan ke luar area rumah bersifat opsional sesuai kesepakatan."
    },
    {
      category: "Jasa Babat Rumput (Garden Maintenance)",
      question: "Bisa sekaligus merapikan tanaman atau tebang pohon kecil?",
      answer:
        "Bisa. Kami melayani perapian tanaman hias serta penebangan pohon kecil hingga sedang dengan biaya tambahan sesuai tingkat kesulitan."
    }
  ];

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
              <span className="text-green-600">Rumah Kinclong</span>
              <span className="text-gray-800"> Medan</span>
            </h1>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex space-x-6 font-medium">
            <a href="#home" className="hover:text-green-600">Home</a>
            <a href="#services" className="hover:text-green-600">Our Services</a>
            <a href="#about" className="hover:text-green-600">About Us</a>
            <a href="#sop" className="hover:text-green-600">Standar Operasional</a>
            <a href="#gallery" className="hover:text-green-600">Gallery</a>
            <a href="#mitra" className="hover:text-green-600">Daftar Mitra</a>
            <a href="#testimoni" className="hover:text-green-600">Testimoni</a>
            <a href="#faq" className="hover:text-green-600">FAQ</a>
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
              <a onClick={() => setOpen(false)} href="#sop">Standar Operasional</a>
              <a onClick={() => setOpen(false)} href="#gallery">Gallery</a>
              <a onClick={() => setOpen(false)} href="#mitra">Daftar Mitra</a>
              <a onClick={() => setOpen(false)} href="#testimoni">Testimoni</a>
              <a onClick={() => setOpen(false)} href="#faq">FAQ</a>
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
                  src="/logo1.jpeg"
                  alt="Jasa Kebersihan Rumah Medan"
                  className="w-full max-w-lg drop-shadow-2xl rounded-2xl"
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
              intro="Daily Cleaning Layanan pembersih secara standar, Pembersihan ini menggunakan sistem durasi, layanan ini cocok digunakan bagi pekerjaan pembersihan yang dapat di ukur dengan waktu atau 
              bersipat harian, rutin perawatan. Meskipun layanan ini direkomendasikan untuk unit dan unian. namun lalayanan ini dapat juga di gunakan untuk unit yang sudah lama dan tidak perlu melakuan
              survei terlebih dahulu maka anda harus menentukan jumlah staff cleaner dan dan durasi kerja sesuai dengan kebutuhan rumah, kos, kantor, apartemen atau bangunan komersial dengan tim profesional 
              dan pengalaman bertahun - tahun, Rumah Kinclong Medan siap memberikan hasil pembersihan yang maksimal Area Layanan Meliputi. Medan Area, Medan Kota, Medan Barat, Medan Selatan, Medan Utara, Medan Timur 
              Deli Serdang dan sekitarnya"
              services={[
                {
                  name: "Daily Cleaning",
                  price: "Rp 250.000 – 400.000",
                  duration: "2 – 3 jam kerja",
                  team: "1 – 2 orang",
                  items: [
                    "Pembersihan Sawang",
                    "Pembersihan Furniture, Kabinet, Meja, Kursi, Pintu dll",
                    "Pembersihan Panel Dinding dan Hiasan Dinding Terjangkau",
                    "Pembersihan Railing dan Anak Tangga",
                    "Pembersihan Kitchen Set, Wastafel, Sink dan Kulkas",
                    "Pembersihan Kaca yang terjangkau",
                    "Pembersihan Toilet",
                    "Merapikan Tempat Tidur dan Mengganti Alas Tidur",
                    "Merapikan dan Menyusun Barang",
                    "Melipat Pakaian",
                    "Mencuci Piring",
                    "Sapu dan Pel Lantai",
                    "Mengumpulkan Sampah",
                    
                  ],
                  terms: [
                    "Tidak termasuk pembersihan kerak membandel",
                    "Tidak termasuk cuci sofa/kasur",
                    "Tidak termasuk bongkar pasang furniture",
                    "Area maksimal rumah tipe 36–70",
                    "Tambahan area dikenakan biaya tambahan"
                  ]
                },
                {
                  name: "General Cleaning",
                  price: "Rp 300.000 – 600.000",
                  duration: "3 – 4 jam kerja",
                  team: "2 orang",
                  items: [
                    "Pembersihan sawang",
                    "Pembersihan plafon (exhaust fan, kipas, lampu gantung)",
                    "Pembersihan dinding/panel dinding/aksesoris dinding",
                    "Pembersihan pintu/kusen/jendela",
                    "Pembersihan meja, kursi, dipan Kasur",
                    "Pembersihan cabinet, partisi, backdrop",
                    "Pembersihan toilet",
                    "BPembersihan kaca",
                  ],
                  terms: [
                    "Tidak termasuk pembersihan kerak berat",
                    "Tidak termasuk cuci sofa/kasur (Hydro Vacuum)",
                    "Tidak termasuk pembersihan pasca renovasi",
                    "Listrik & air disediakan oleh pelanggan",
                    "Area di luar standar dikenakan biaya tambahan"
                  ]
                },
                {
                  name: "Deep Cleaning",
                  price: "Rp 800.000 – 1.800.000",
                  duration: "5 – 8 jam kerja",
                  team: "3 – 4 orang",
                  items: [
                    "Pembersihan sawang area tinggi (di atas 3,5 M2)",
                    "Pembersihan kaca tinggi (di atas 2,5 M2)",
                    "Pembersihan khusus kaca",
                    "Pembersihan panel dinding tinggi (di atas 2,5 M2)",
                    "Bersihkan plafon & sudut langit-langit",
                    "Pembersihan area tidak terjangkau",
                    "Pembersihan kanopi",
                    "Pembersihan khusus pada material keramik, batu alam, stainless, hpl dll",
                  ],
                  terms: [
                    "Harga menyesuaikan luas & tingkat kekotoran",
                    "Akses listrik & air wajib tersedia",
                    "Tidak termasuk pekerjaan renovasi",
                    "Tidak termasuk pembersihan limbah berbahaya",
                    "Survey gratis untuk area besar"
                  ]
                },
                {
                  name: "Post Renovation",
                  items: [
                    "Sisa cat & semen",
                    "Debu tebal pasca renovasi"
                  ]
                },
                {
                  name: "Syarat & Ketentuan Umum",
                  items: [
                    "Harga menyesuaikan luas area dan tingkat kekotoran",
                    "Durasi pengerjaan dapat berubah sesuai kondisi lapangan",
                    "Pelanggan wajib menyediakan akses listrik dan air",
                    "Area kerja harus dalam kondisi aman dan bebas hewan berbahaya",
                    "Barang berharga disarankan diamankan sebelum pengerjaan",
                    "Pembatalan mendadak (hari-H) dikenakan biaya transport",
                    "Penambahan layanan di lokasi akan dikenakan biaya tambahan",
                    "Pemesanan resmi hanya melalui admin Rumah Kinclong Medan"
                  ]
                }
              ]}
              igLink="https://www.instagram.com/jasa_cleaningservicemedan?igsh=amFzczc4Y3BwemQ4"
              fbLink="https://www.facebook.com/share/16vU2Sw7zf/"
              tiktokLink="https://www.tiktok.com/@jasacleaningservicemedan?_r=1&_t=ZS-93If9rWKtuR"
              youtubeLink="https://www.youtube.com/@rumahkinclongmedan"
            />

            <ServiceImageCard
              img="/services/babatrumput.png"
              title="Gardening (Perawatan Taman & Lahan)"
              intro="Gardening Layanan Perawatan taman  dan Lahan untuk pembersihan lahan secara detail dan 
                meyeluruh yang terbaik di kota Medan. Kami memahami bahwa taman yang asri adalah cerminan rumah yang sehat.
                Tim kami profesional dan siap menagani berbagai kondisi lahan, mulai dari halaman rumah, area perkantoran, 
                hingga lahan kosong yang tidak terawat Area Layanan Meliputi. Medan Area, Medan Kota, Medan Barat, 
                Medan Selatan, Medan Utara, Medan Timur, Deli Serdang dan sekitranya "
              services={[
                {
                  name: "Routine Garden Maintenance",
                  price: "Mulai Rp 250.000 / kunjungan",
                  duration: "2–3 jam",
                  team: "1–2 orang",
                  items: [
                    "Pemangkasan rumput & tanaman hias",
                    "Penyapuan dan pembersihan daun kering",
                    "Penyiraman tanaman",
                    "Perapihan pot & area taman",
                    "Pembersihan sampah ringan"
                  ]
                },
                {
                  name: "General Garden Cleaning",
                  price: "Mulai Rp 450.000",
                  duration: "3–5 jam",
                  team: "2–3 orang",
                  items: [
                    "Pemotongan rumput dengan mesin",
                    "Perapihan & pembentukan tanaman",
                    "Pembersihan gulma ringan",
                    "Penggemburan tanah ringan",
                    "Pengangkutan sampah taman (maks. 2 karung)"
                  ]
                },
                {
                  name: "Deep Garden Treatment",
                  price: "Mulai Rp 850.000",
                  duration: "6–8 jam",
                  team: "3–4 orang",
                  items: [
                    "Pembersihan total lahan/taman lama tidak terawat",
                    "Pembersihan gulma & semak liar",
                    "Pemangkasan pohon kecil–menengah",
                    "Perataan & penggemburan tanah",
                    "Pengangkutan sampah taman (maks. 5 karung)",
                    "Konsultasi penataan taman sederhana"
                  ]
                },
                {
                  name: "Syarat & Ketentuan",
                  items: [
                    "Harga dapat menyesuaikan luas lahan dan tingkat kerimbunan",
                    "Area kerja harus dalam kondisi aman dan bebas hewan berbahaya",
                    "Air dan listrik disediakan oleh pelanggan",
                    "Sampah taman melebihi ketentuan karung dikenakan biaya tambahan",
                    "Pemangkasan pohon tinggi (>3 meter) dikenakan biaya tambahan",
                    "Pembelian pupuk, tanaman baru, atau material tambahan tidak termasuk dalam paket",
                    "Booking minimal H-1 sebelum jadwal pengerjaan",
                    "Pembatalan mendadak (hari-H) dikenakan biaya transport"
                  ]
                }
              ]}
              igLink="https://www.instagram.com/babatrumput_rumahkinclongmedan?igsh=MXF2ejRuZHNoZWxyNg=="
              fbLink="https://www.facebook.com/share/16vU2Sw7zf/"
              tiktokLink="https://www.tiktok.com/@jasacleaningservicemedan?_r=1&_t=ZS-93If9rWKtuR"
              youtubeLink="https://www.youtube.com/@rumahkinclongmedan"
            />

            <ServiceImageCard
              img="/services/cucitoren.png"
              title="Toren Cleaning (Kuras Tangki Air)"
              intro="Toren Cleaning Layanan yang memberikan solusi air bersih untuk kesehatan keluarga Anda.
              Toren yang jarang di kuras dapat menjadi sarang lumut, endapan lumpur hingga bakteri yang membahayakan kulit dan kesehatan. 
              Kami melayani pembersihan Area Layanan Meliputi. Medan Area, Medan Kota, Medan Barat, Medan Selatan, Medan Utara,
              Medan Timur, Deli Serdang dan sekitarnya "
              services={[
                {
                  name: "Daftar Harga Cuci Toren",
                  items: [
                    "500 Liter — Rp 175.000",
                    "750 Liter — Rp 200.000",
                    "1000 Liter — Rp 225.000",
                    "1500 Liter — Rp 300.000",
                    "2000 Liter — Rp 350.000",
                    "3000 Liter — Rp 450.000",
                    "4000 Liter — Rp 550.000",
                    "5000 Liter — Rp 650.000"
                  ]
                },
                {
                  name: "Termasuk Dalam Layanan",
                  duration: "Estimasi 1 hari kerja • Tim profesional",
                  items: [
                    "Pembersihan bagian dalam toren",
                    "Pembersihan bagian luar toren",
                    "Penyikatan dinding & dasar tangki",
                    "Pengangkatan lumpur & endapan",
                    "Biaya sudah termasuk peralatan kerja"
                  ]
                },
                {
                  name: "Syarat & Ketentuan",
                  items: [
                    "Berlaku untuk toren atas dan ground tank",
                    "Ground tank tanpa pipa pembuangan dikenakan biaya tambahan (pengurasan manual)",
                    "Akses ke lokasi toren harus aman dan memungkinkan untuk pengerjaan",
                    "Layanan yang tidak melalui pemesanan resmi admin Rumah Kinclong Medan bukan menjadi tanggung jawab kami"
                  ]
                }
              ]}
              igLink="https://www.instagram.com/cucitoren_rumahkinclongmedan?igsh=MWd2ejZhNmw4MmUxcQ=="
              fbLink="https://www.facebook.com/share/16vU2Sw7zf/"
              tiktokLink="https://www.tiktok.com/@jasacleaningservicemedan?_r=1&_t=ZS-93If9rWKtuR"
              youtubeLink="https://www.youtube.com/@rumahkinclongmedan"
            />

            <ServiceImageCard
              img="/services/cuciac.png"
              title="AC Maintenance (Perawatan AC)"
              intro="AC Maintanance Layanan perawatan kebersihan udara di dalam hunia Anda tetap sejuk, bersih dan 
                    sehat. AC yang tidak dirawat secara rutin dapat mengakibatkan debu, jamur, dan bakteri 
                    serta membuat tagihan listrik membengkak. Kami meyediakan layanaan perawatan AC secara detail dan 
                    meyeluruh di kota Medan Area Layananan. Medan Area, Medan Kota. Medan Barat, Medan Selatan,
                    Medan utara, Deli serdang dan sekiranya."
              services={[
                {
                  name: "Cuci AC Standard (Wall Mounted)",
                  price: "Mulai Rp 90.000 / unit",
                  duration: "45–60 menit • 1 teknisi",
                  items: [
                    "Pembersihan filter dan evaporator",
                    "Pembersihan casing indoor",
                    "Pengecekan aliran air & saluran pembuangan",
                    "Pengecekan tekanan freon",
                    "Testing fungsi setelah selesai"
                  ]
                },
                {
                  name: "Cuci AC + Bongkar Total",
                  price: "Mulai Rp 150.000 / unit",
                  duration: "1–2 jam • 1–2 teknisi",
                  items: [
                    "Pembongkaran unit indoor",
                    "Pencucian evaporator menyeluruh",
                    "Pembersihan kipas blower",
                    "Pembersihan casing indoor & outdoor ringan",
                    "Pengecekan freon & kelistrikan dasar"
                  ]
                },
                {
                  name: "Service AC (Perbaikan Ringan)",
                  price: "Mulai Rp 200.000",
                  duration: "Sesuai kerusakan • 1 teknisi",
                  items: [
                    "Pengecekan unit tidak dingin",
                    "Perbaikan kebocoran air",
                    "Pengecekan kapasitor & komponen dasar",
                    "Pembersihan ringan jika diperlukan",
                    "Estimasi biaya sebelum perbaikan lanjutan"
                  ]
                },
                {
                  name: "Syarat & Ketentuan",
                  items: [
                    "Harga berlaku untuk AC tipe wall mounted (rumah tangga)",
                    "AC cassette, standing, atau kapasitas besar dikenakan biaya berbeda",
                    "Pengisian freon tidak termasuk dalam paket cuci (biaya tambahan)",
                    "Unit harus dalam kondisi dapat diakses dengan aman",
                    "Booking minimal H-1 sebelum pengerjaan",
                    "Pembatalan mendadak (hari-H) dikenakan biaya transport"
                  ]
                }
              ]}
              igLink="https://www.instagram.com/cuciac_rumahkinclongmedan?igsh=MWlkc3VpMDNpNG02dg=="
              fbLink="https://www.facebook.com/share/16vU2Sw7zf/"
              tiktokLink="https://www.tiktok.com/@jasacleaningservicemedan?_r=1&_t=ZS-93If9rWKtuR"
              youtubeLink="https://www.youtube.com/@rumahkinclongmedan"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Mengapa Memilih Kami?
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center">

            <WhyCard
              icon="👔"
              title="Profesional"
              desc="Tim terlatih dan berpengalaman yang bekerja sesuai standar kebersihan terbaik."
            />

            <WhyCard
              icon="🌿"
              title="Ramah Lingkungan"
              desc="Menggunakan peralatan dan cairan pembersih yang aman serta tidak merusak lingkungan."
            />

            <WhyCard
              icon="⏰"
              title="Fleksibel"
              desc="Jadwal bisa disesuaikan dengan kebutuhan pelanggan, termasuk area bisnis."
            />

            <WhyCard
              icon="✔️"
              title="Terpercaya & Lengkap"
              desc="Menyediakan berbagai layanan kebersihan dari rumah hingga kantor."
            />

            <WhyCard
              icon="💰"
              title="Harga Terjangkau"
              desc="Solusi kebersihan berkualitas dengan harga kompetitif dan transparan."
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
                About Us
              </h4>

              <p className="text-gray-700 leading-relaxed mb-4">
                Rumah Kinclong Medan, Layanan pembersih secara detail dan menyeluruh.
                Efektif untuk pembersihan rumah dan kantor. Cleaning Service, Gardening, Toren Cleaning,
                And AC Maintenance yang berada dikota Medan dan sekitarnya.
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
                “Dari atap hingga halaman, kami pastikan rumah Anda Kinclong, Sehat, dan Nyaman. Layanan dari Hati [Service With Heart].”
              </p>
            </div>

            {/* VISI & MISI */}
            <div>
              <h4 className="text-2xl font-bold mb-6 text-gray-800">
                Visi & Misi
              </h4>

              {/* VISI */}
              <div className="mb-6">
                <h5 className="font-semibold text-lg text-green-700 mb-2">
                  Visi
                </h5>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi standar emas (<em>gold standard</em>) jasa kebersihan profesional di Medan
                  yang mengedepankan kualitas premium, kejujuran, dan kepuasan pelanggan
                  yang berkelanjutan.
                </p>
              </div>

              {/* MISI */}
              <div>
                <h5 className="font-semibold text-lg text-green-700 mb-4">
                  Misi
                </h5>

                <ul className="space-y-4 text-gray-700 leading-relaxed list-disc list-inside">

                  <li>
                    <span className="font-semibold text-gray-800">
                      Profesionalisme Teruji
                    </span>
                    <p className="mt-1 ml-5">
                      Menghadirkan tenaga terlatih yang bekerja berdasarkan
                      SOP (Standard Operating Procedure) yang ketat.
                    </p>
                  </li>

                  <li>
                    <span className="font-semibold text-gray-800">
                      Kualitas Tanpa Kompromi
                    </span>
                    <p className="mt-1 ml-5">
                      Menggunakan peralatan modern serta bahan pembersih
                      yang aman bagi keluarga dan lingkungan.
                    </p>
                  </li>

                  <li>
                    <span className="font-semibold text-gray-800">
                      Kepercayaan Pelanggan
                    </span>
                    <p className="mt-1 ml-5">
                      Membangun hubungan jangka panjang melalui transparansi
                      hasil kerja dan komunikasi yang santun.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOP */}
      <section id="sop" className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-20">

          {/* HEADER */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              Standar Operasional <span className="text-green-600">Prosedur (SOP)</span>
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Kami bekerja berdasarkan SOP yang jelas untuk menjamin kualitas,
              keamanan, dan kepuasan pelanggan.
            </p>
          </div>

          <div className="space-y-6">

            {/* SOP UMUM */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-xl font-bold text-green-700 mb-4">
                🔰 SOP Umum Sebelum Bekerja
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Ketuk pintu, beri salam, dan perkenalkan diri sebagai tim Rumah Kinclong Medan.</li>
                <li>Foto kondisi awal area kerja sebagai dokumentasi.</li>
                <li>Konfirmasi keluhan pelanggan sebelum pengerjaan.</li>
                <li>Pasang alas atau pelindung agar rumah tetap bersih.</li>
              </ul>
            </div>

            {/* SOP CLEANING */}
            <details className="bg-white rounded-2xl shadow-lg p-6">
              <summary className="cursor-pointer text-xl font-semibold text-gray-800">
                SOP Cleaning Service – “Kinclong Maksimal”
              </summary>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li>Bersihkan dari atas ke bawah.</li>
                <li>Detail sela keramik dan kerak air.</li>
                <li>Pastikan kaca bebas bercak.</li>
                <li>Tambahkan pengharum ruangan.</li>
              </ul>
            </details>

            {/* SOP GARDENING */}
            <details className="bg-white rounded-2xl shadow-lg p-6">
              <summary className="cursor-pointer text-xl font-semibold text-gray-800">
                SOP Gardening – “Halaman Paten”
              </summary>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li>Cek dan bersihkan area dari benda keras.</li>
                <li>Potong rumput dengan tinggi rata.</li>
                <li>Rapikan tepi taman dan pot.</li>
                <li>Kumpulkan dan ikat sisa rumput.</li>
              </ul>
            </details>

            {/* SOP TOREN */}
            <details className="bg-white rounded-2xl shadow-lg p-6">
              <summary className="cursor-pointer text-xl font-semibold text-gray-800">
                SOP Toren Cleaning – “Air Jernih & Sehat”
              </summary>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li>Matikan pompa dan kuras toren.</li>
                <li>Sikat dinding dan dasar toren.</li>
                <li>Bersihkan sudut dan tutup toren.</li>
                <li>Bilas hingga bersih tanpa sisa sabun.</li>
                <li>Pastikan pelampung berfungsi normal.</li>
                <li>Foto kondisi toren setelah bersih.</li>
              </ul>
            </details>

            {/* SOP AC */}
            <details className="bg-white rounded-2xl shadow-lg p-6">
              <summary className="cursor-pointer text-xl font-semibold text-gray-800">
                SOP AC Maintenance – “Dingin Menggigil”
              </summary>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                <li>Cek fungsi AC sebelum dibersihkan.</li>
                <li>Matikan listrik (cabut steker / MCB).</li>
                <li>Pasang plastik pelindung indoor.</li>
                <li>Cuci filter, evaporator, dan outdoor.</li>
                <li>Cek selang pembuangan.</li>
                <li>Rakit kembali, tes AC, dan foto hasil akhir.</li>
              </ul>
            </details>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-28">

          {/* HEADER */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              Gallery <span className="text-green-600">Pekerjaan Kami</span>
            </h3>
            <p className="text-gray-600">
              Dokumentasi hasil kerja dari berbagai layanan Rumah Kinclong Medan
            </p>
          </div>

          {/* GALLERY PER SERVICE */}
          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-3xl p-10 md:p-14 shadow-xl"
          >
            <div className="space-y-16">
              {galleryData.map((section, index) => (
                <div key={index}>
                  {/* TITLE */}
                  <div className="flex items-center gap-3 mb-6">
                    <h4 className="text-2xl font-bold text-gray-800">
                      {section.title}
                    </h4>
                    <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                      {section.service}
                    </span>
                  </div>

                  {/* GRID IMAGE */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {section.images.map((img, i) => (
                      <div
                        key={i}
                        className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
                      >
                        <img
                          src={img}
                          alt={section.title}
                          className="w-full h-40 object-cover hover:scale-110 transition duration-500 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
                src="/dokumen/SURAT PERJANJIAN KERJA SAMA MITRA RUMAH_KINCLONG_MEDAN.pdf"
                title="Surat Perjanjian Mitra"
                className="w-full h-full"
              />
            </div>

            <p className="text-sm text-gray-500 mt-4 text-center">
              Silakan baca surat perjanjian dengan seksama sebelum mendaftar sebagai mitra.
            </p>

            {/* DOWNLOAD SURAT */}
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-between gap-4">
              <a
                href="/dokumen/SURAT PERJANJIAN KERJA SAMA MITRA RUMAH_KINCLONG_MEDAN.pdf"
                download
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                bg-gradient-to-r from-green-600 to-emerald-600
                text-white
                px-6 py-3 rounded-2xl
                font-semibold text-sm
                shadow-lg
                hover:scale-[1.02]
                hover:shadow-xl
                transition-all duration-200"
              >
                📝 Surat Perjanjian & Komitmen Mitra
              </a>

              {/* SERVICE REPORT MITRA */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfk0BOXm2Phs5cJ76ecsbFPqAC8hqV87J0cVK6NJj7q-T3Q_w/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                bg-gradient-to-r from-green-600 to-emerald-600
                text-white
                px-6 py-3 rounded-2xl
                font-semibold text-sm
                shadow-lg
                hover:scale-[1.02]
                hover:shadow-xl
                transition-all duration-200"
              >
                📝 Professional Service Report Mitra
              </a>

              {/* SERVICE REPORT MITRA */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScnWleuMgItHPo_UdLhPAu7_XIr54EhshjLYx9DGsPxEjqXjQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                bg-gradient-to-r from-green-600 to-emerald-600
                text-white
                px-6 py-3 rounded-2xl
                font-semibold text-sm
                shadow-lg
                hover:scale-[1.02]
                hover:shadow-xl
                transition-all duration-200"
              >
                📝 Ceklist Peminjaman Alat Mitra
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

      {/* TESTIMONI */}
      <section id="testimoni" className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              Testimoni <span className="text-green-600">Pelanggan</span>
            </h3>
            <p className="text-gray-600">
              Apa kata pelanggan tentang layanan Rumah Kinclong Medan
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleTestimonialSubmit}
            className="bg-white rounded-3xl shadow-lg p-8 mb-12 space-y-4"
          >
            <input
              type="text"
              name="name"
              value={testimonialForm.name}
              onChange={handleTestimonialChange}
              placeholder="Nama Anda"
              required
              className="w-full p-3 border rounded-lg 
             text-gray-700 placeholder:text-black
             focus:ring-2 focus:ring-green-500"
            />

            <select
              name="service"
              value={testimonialForm.service}
              onChange={handleTestimonialChange}
              required
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500
                ${testimonialForm.service === ""
                  ? "text-black"
                  : "text-black"}
                `}
            >
              <option value="" disabled>
                Pilih layanan yang digunakan
              </option>

              {serviceOptions.map((service, index) => (
                <option key={index} value={service} className="text-gray-700">
                  {service}
                </option>
              ))}
            </select>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Rating Layanan
              </label>

              <StarRating
                rating={testimonialForm.rating}
                setRating={(value) =>
                  setTestimonialForm({
                    ...testimonialForm,
                    rating: value,
                  })
                }
              />
            </div>

            <textarea
              name="message"
              value={testimonialForm.message}
              onChange={handleTestimonialChange}
              rows="4"
              placeholder="Tulis pengalaman Anda..."
              required
              className="w-full p-3 border rounded-lg 
             text-gray-700 placeholder:text-black
             focus:ring-2 focus:ring-green-500"
            />

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Kirim Testimoni
            </button>
          </form>

          {/* LIST */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.length === 0 && (
              <p className="text-center text-gray-500 col-span-full">
                Belum ada testimoni.
              </p>
            )}

            {testimonials.map((item) => (
              <div key={item.id} className="relative bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-600">

                <div className="font-semibold text-lg text-gray-800">
                  {item.name}
                </div>

                {/* ROLE / LAYANAN */}
                {item.service && (
                  <span className="text-sm text-green-600 font-medium">
                    {item.service}
                  </span>
                )}

                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${i < item.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* PESAN */}
                <p className="italic text-gray-600 leading-relaxed">
                  “{item.message}”
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
              Frequently Asked <span className="text-green-600">Questions</span>
            </h3>
            <p className="text-gray-600">
              Pertanyaan yang sering diajukan mengenai layanan Rumah Kinclong Medan
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <FAQItem key={index} item={item} />
            ))}
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

  function FAQItem({ item }) {
    const [open, setOpen] = useState(false);

    return (
      <motion.div
        layout
        className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-50 transition"
        >
          {item.question}
          <span className="text-green-600 text-xl">
            {open ? "×" : "+"}
          </span>
        </button>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-5 text-gray-600 leading-relaxed"
          >
            {item.answer}
          </motion.div>
        )}
      </motion.div>
    );
  }
}

function WhyCard({ icon, title, desc }) {
  return (
    <div className="group transition duration-300 hover:-translate-y-2">

      <div className="text-5xl mb-6">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {desc}
      </p>

    </div>
  );
}


