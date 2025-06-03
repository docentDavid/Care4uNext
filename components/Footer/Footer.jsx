'use client';

import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="mt-10 py-6 border-t border-gray-200">
            <div className="container">
                <div className="footer flex flex-col md:flex-row justify-between gap-10">
                    {/* Logo sectie */}
                    <div className="imgfooter">
                        <Image
                            src="/Images/Logov2.png"
                            alt="Care4U Logo"
                            width={150}
                            height={100}
                            className="logo1"
                        />
                    </div>

                    {/* Contactgegevens sectie */}
                    <div className="contact-left">
                        <h2 className="font-bold text-lg mb-2">Contact:</h2>
                        <table className="text-sm">
                            <tbody>
                                <tr>
                                    <td className="pr-2">
                                        <Image
                                            src="/Images/Phone.png"
                                            alt="Telefoon"
                                            width={20}
                                            height={20}
                                        />
                                    </td>
                                    <td>
                                        <a href="tel:0647390869">06 47 39 08 69</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pr-2">
                                        <Image
                                            src="/Images/email.png"
                                            alt="Email"
                                            width={20}
                                            height={20}
                                        />
                                    </td>
                                    <td>
                                        <a href="mailto:info@pedicuresaloncare4u.nl">
                                            info@pedicuresaloncare4u.nl
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pr-2">
                                        <Image
                                            src="/Images/Home Page.png"
                                            alt="Locatie"
                                            width={20}
                                            height={20}
                                        />
                                    </td>
                                    <td>
                                        <a
                                            href="https://www.google.com/maps/place/Van+Deelenstraat+13,+5256+JA+Heusden"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Van Deelenstraat 13, 5156 AL, Oudheusden
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Openingstijden sectie */}
                    <div className="contact-right">
                        <h2 className="font-bold text-lg mb-2">Openingstijden:</h2>
                        <table className="text-sm">
                            <tbody>
                                <tr>
                                    <td>Ma</td>
                                    <td className="px-2">09:00–16:00</td>
                                    <td>18:00–21:00</td>
                                </tr>
                                <tr>
                                    <td>Di</td>
                                    <td colSpan={2}>09:00–16:00</td>
                                </tr>
                                <tr>
                                    <td>Do</td>
                                    <td className="px-2">09:00–16:00</td>
                                    <td>18:00–21:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <p className="text-center text-gray-600 mt-6">
                    © 2024 Care4U. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

