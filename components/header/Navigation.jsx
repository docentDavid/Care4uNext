"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">
          <Link href="/">
            <Image
              src="/Images/Logov4.png"
              alt="Logo"
              width={120}
              height={60}
              className="logocare4u"
              priority
            />
          </Link>
        </div>

        <div className="hamburgerMenu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {isMenuOpen && (
          <div className="curtainMenu">
            <div className="menuClose" onClick={closeMenu}>
              <Image
                src="/Images/close-svgrepo-com.svg"
                alt="Close Menu"
                width={24}
                height={24}
                priority
              />
            </div>
            <ul>
              <li>
                <Link href="/" onClick={closeMenu}>
                  <strong>Home</strong>
                </Link>
              </li>
              <li>
                <Link href="/behandelingen" onClick={closeMenu}>
                  <strong>Behandelingen</strong>
                </Link>
              </li>
              <li>
                <Link href="/producten" onClick={closeMenu}>
                  <strong>Producten</strong>
                </Link>
              </li>
              <li>
                <Link href="/contact/contact" onClick={closeMenu}>
                  <strong>Contact</strong>
                </Link>
              </li>
            </ul>
            <div className="contactRightside">
              <h2>
                <strong>Openingstijden:</strong>
              </h2>
              <table>
                <tbody>
                  <tr>
                    <td>Ma</td>
                    <td>09:00-16:00</td>
                    <td>18:00-21:00</td>
                  </tr>
                  <tr>
                    <td>Di</td>
                    <td colSpan="2">09:00-16:00</td>
                  </tr>
                  <tr>
                    <td>Do</td>
                    <td>09:00-16:00</td>
                    <td>18:00-21:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="navbarItems">
          <ul>
            <li>
              <Link href="/">
                <strong>Home</strong>
              </Link>
            </li>
            <li>
              <Link href="/behandelingen">
                <strong>Behandelingen</strong>
              </Link>
            </li>
            <li>
              <Link href="/producten">
                <strong>Producten</strong>
              </Link>
            </li>
            <li>
              <Link href="/contact/contact">
                <strong>Contact</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
