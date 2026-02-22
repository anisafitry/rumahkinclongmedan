import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";


export default function ServiceImageCard({
    img,
    title,
    intro,
    services = [],
    igLink,
    fbLink,
    tiktokLink,
    youtubeLink,
}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* CARD */}
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

                <h4 className="text-xl font-semibold mb-4">{title}</h4>

                {/* BUTTON DESKRIPSI */}
                <button
                    onClick={() => setOpen(true)}
                    className="mb-4 px-4 py-2 text-sm rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                >
                    Deskripsi
                </button>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center gap-4 mt-5">

                    {igLink && (
                        <a href={igLink} target="_blank" rel="noopener noreferrer">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full 
                      bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600
                      shadow-md transition duration-300
                      hover:scale-110 hover:-translate-y-1 
                      hover:shadow-[0_0_20px_#E1306C] cursor-pointer">
                                <FaInstagram className="text-white text-lg" />
                            </div>
                        </a>
                    )}

                    {fbLink && (
                        <a href={fbLink} target="_blank" rel="noopener noreferrer">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full 
                      bg-[#1877F2]
                      shadow-md transition duration-300
                      hover:scale-110 hover:-translate-y-1 
                      hover:shadow-[0_0_20px_#1877F2] cursor-pointer">
                                <FaFacebook className="text-white text-lg" />
                            </div>
                        </a>
                    )}

                    {tiktokLink && (
                        <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full 
                      bg-black
                      shadow-md transition duration-300
                      hover:scale-110 hover:-translate-y-1 
                      hover:shadow-[0_0_20px_#000] cursor-pointer">
                                <FaTiktok className="text-white text-lg" />
                            </div>
                        </a>
                    )}

                    {youtubeLink && (
                        <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full 
                      bg-[#FF0000]
                      shadow-md transition duration-300
                      hover:scale-110 hover:-translate-y-1 
                      hover:shadow-[0_0_20px_#FF0000] cursor-pointer">
                                <FaYoutube className="text-white text-lg" />
                            </div>
                        </a>
                    )}

                </div>
            </motion.div>

            {/* MODAL */}
            {open && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center sm:p-6">

                    <div className="
      bg-white w-full h-full 
      sm:h-auto sm:max-h-[85vh] 
      sm:max-w-3xl 
      sm:rounded-3xl 
      flex flex-col 
      shadow-2xl 
      animate-modalEnter
    ">

                        {/* HEADER */}
                        <div className="px-6 sm:px-8 pt-6 pb-4 border-b relative">
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-5 right-6 text-xl text-gray-400 hover:text-black transition"
                            >
                                ✕
                            </button>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                                {title}
                            </h3>
                        </div>

                        {/* BODY */}
                        <div className="px-6 sm:px-8 py-6 overflow-y-auto flex-1">

                            {intro && (
                                <p className="text-gray-600 leading-relaxed tracking-wide mb-6 text-sm text-justify sm:text-base">
                                    {intro}
                                </p>
                            )}

                            <div className="space-y-8">
                                {services.map((service, index) => (
                                    <div key={index} className="border-b pb-6 last:border-none">

                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                            <h4 className="text-lg font-semibold text-green-700">
                                                {service.name}
                                            </h4>

                                            {service.price && (
                                                <span className="text-sm font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full self-start sm:self-auto">
                                                    {service.price}
                                                </span>
                                            )}
                                        </div>

                                        {service.duration && (
                                            <p className="text-xs text-gray-500 mb-3">
                                                ⏱ {service.duration}
                                            </p>
                                        )}

                                        <ul className="space-y-2 text-gray-600 text-sm sm:text-base text-justify">
                                            {service.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-green-600 mt-1">✔</span>
                                                    <p className="text-justify leading-relaxed">
                                                        {item}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FOOTER */}
                        <div className="px-6 sm:px-8 py-4 border-t bg-gray-50 sm:rounded-b-3xl">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="https://wa.me/6285372726263"
                                    target="_blank"
                                    className="flex-1 text-center bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
                                >
                                    Pesan Sekarang
                                </a>

                                <button
                                    onClick={() => setOpen(false)}
                                    className="flex-1 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition"
                                >
                                    Tutup
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
