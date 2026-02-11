import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";


export default function ServiceImageCard({
    img,
    title,
    desc,
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
                <div className="flex justify-center gap-4 text-gray-600">
                    {igLink && (
                        <a href={igLink} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-xl hover:text-pink-500 transition" />
                        </a>
                    )}

                    {fbLink && (
                        <a href={fbLink} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-xl hover:text-blue-600 transition" />
                        </a>
                    )}

                    {tiktokLink && (
                        <a href={tiktokLink} target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="text-xl hover:text-black transition" />
                        </a>
                    )}

                    {youtubeLink && (
                        <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                            <FaYoutube className="text-xl hover:text-black transition" />
                        </a>
                    )}
                </div>
            </motion.div>

            {/* MODAL */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-4 text-xl text-gray-500 hover:text-black"
                        >
                            ✕
                        </button>

                        <h3 className="text-2xl font-bold mb-4">{title}</h3>

                        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                            {desc}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
