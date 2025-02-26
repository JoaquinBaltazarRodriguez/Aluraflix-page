import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Header/Header.css';
import logoImage from '/Image/logo.png';
import banner from '/Image/banner2.jpg';
import { Link } from 'react-router-dom';
import { PiUploadSimpleBold } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RiMovie2Line } from "react-icons/ri";

export default function Header({ onSearch }) {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        onSearch(event.target.value);
    };

    const NoMostrarBuscador = location.pathname.startsWith('/mirarpeli/') || location.pathname === '/video' || location.pathname === '/genero' || location.pathname === '/404';
    const NoMostrarGenero = location.pathname.startsWith('/mirarpeli/') || location.pathname === '/' || location.pathname === '/404';

    return (
        <header className='header'>
            <nav className='nav'>
                <Link to="/">
                    <img className='logo' src={logoImage} alt="logo-AluraFlix" />
                </Link>

                <ul className='ul-links'>
                    {!NoMostrarBuscador && (
                        <li className='lupa'>
                            <div className='search-container'>
                                <input
                                    type='text'
                                    className='search-input'
                                    placeholder='Buscar...'
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </div>
                            <span className='icon-search'><IoSearch /></span>
                        </li>
                    )}
                    <li>
                        <Link to="/">
                            <span className="icon-home" aria-hidden="true"><FaHome /></span>
                            <span className="text-home">HOME</span>
                        </Link>
                    </li>
                    {location.pathname !== '/404' && (
                        <>
                            <li>
                                <Link to="/video">
                                    <span className="icon-home" aria-hidden="true"><PiUploadSimpleBold /></span>
                                    <span className="text-home">NUEVA PELICULA</span>
                                </Link>
                            </li>
                            {!NoMostrarGenero && (
                                <li>
                                    <Link to="/genero">
                                        <span className="icon-home" aria-hidden="true"><RiMovie2Line /></span>
                                        <span className="text-home">NUEVO GENERO</span>
                                    </Link>
                                </li>
                            )}
                        </>
                    )}
                </ul>
            </nav>
            {!NoMostrarBuscador && location.pathname !== '/404' && (
                <div className="baner-container">
                    <img className='baner' src={banner} alt="banner" />
                </div>
            )}
        </header>
    );
}

