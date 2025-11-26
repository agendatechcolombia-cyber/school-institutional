import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, ChevronDown, X } from "lucide-react";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpenMenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const headerStyle = {
        background: "#0e1b2a",
        color: "#ffffff",
        transition: "background 0.4s ease, color 0.4s ease",
    };

    const linkColor = "text-white hover:text-accent";
    const activeColor = "text-accent";

    const menus = [
        { to: "/", label: "Inicio" },
        {
            label: "Nuestro Colegio",
            submenu: [
                { to: "/quienes-somos", label: "¿Quiénes Somos?" },
                { to: "/mision-vision-filosofia", label: "Misión - Visión - Filosofía" },
                { to: "/valores-principios", label: "Valores y Principios" },
                { to: "/resena-historica", label: "Reseña Histórica" },
                { to: "/identidad-institucional", label: "Identidad Institucional" },
            ],
        },
        {
            label: "Académica",
            submenu: [
                { to: "/manuales", label: "Manuales" },
                { to: "/proyectos", label: "Proyectos" },
                { to: "/academica", label: "Niveles Educativos" },
            ],
        },
        {
            label: "Admisiones",
            submenu: [
                { to: "/admisiones-pacho", label: "Sede Pacho" },
                { to: "/admisiones-zipa", label: "Sede Zipa" },
            ],
        },
        {
            label: "Bienestar Estudiantil",
            submenu: [
                { to: "/orientacion-escolar", label: "Orientación Escolar" },
                { to: "/pastoral", label: "Pastoral" },
            ],
        },
           { to: "/contactanos", label: "Contáctanos" },
    ];

    const isParentActive = (submenu) => {
        return submenu?.some((item) => location.pathname === item.to);
    };

    const handleSubmenuClick = (path) => {
        setMobileOpen(false);
        setOpenMenu(null);
        setTimeout(() => {
            navigate(path);
        }, 150);
    };

    return (
        <header
            className="fixed top-0 left-0 w-full z-50 shadow-md transition-colors duration-500"
            style={headerStyle}
        >
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
  
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-14 h-14 flex items-center justify-center overflow-hidden bg-accent rounded">
                        <img
                            src="./images/config/logo.jpg"
                            alt="CD"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-white">
                            Colegio Diocesano
                        </h1>
                        <p className="text-sm text-accent">Educación con valores</p>
                    </div>
                </Link>

        
                <nav ref={menuRef} className="hidden md:flex items-center gap-6 relative">
                    {menus.map(({ to, label, submenu }) =>
                        submenu ? (
                            <div key={label} className="relative">
                                <button
                                    onClick={() => setOpenMenu(openMenu === label ? null : label)}
                                    className={`flex items-center gap-1 font-medium transition ${isParentActive(submenu) ? activeColor : linkColor
                                        }`}
                                >
                                    {label}
                                    <ChevronDown size={16} />
                                </button>

                                {openMenu === label && (
                                    <div className="absolute left-0 mt-2 w-52 border border-accent/50 rounded-lg shadow-lg bg-[#0e1b2a]">
                                        {submenu.map((item) => (
                                            <NavLink
                                                key={item.to}
                                                to={item.to}
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 text-sm transition font-medium rounded-md ${isActive
                                                        ? "bg-accent/20 text-accent"
                                                        : "text-white hover:bg-accent/10 hover:text-accent"
                                                    }`
                                                }
                                                onClick={() => setOpenMenu(null)}
                                            >
                                                {item.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <NavLink
                                key={to}
                                to={to}
                                className={({ isActive }) =>
                                    `transition font-medium ${isActive ? activeColor : linkColor
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        )
                    )}
                </nav>

   
                <div className="md:hidden z-50">
                    <button
                        aria-label="menu"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="p-2 rounded transition hover:bg-accent/10"
                    >
                        {mobileOpen ? (
                            <X color="#C0A16E" size={28} />
                        ) : (
                            <Menu color="#C0A16E" size={28} />
                        )}
                    </button>
                </div>
            </div>

   
            {mobileOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-[#0e1b2a] border-t border-accent/40 shadow-lg z-40">
                    <ul className="flex flex-col gap-1 px-4 py-3">
                        {menus.map(({ to, label, submenu }) => {
                            const isSubmenuOpen = openMenu === label;

                            return (
                                <li key={label} className="flex flex-col">
                               
                                    {submenu ? (
                                        <button
                                            onClick={() => setOpenMenu(isSubmenuOpen ? null : label)}
                                            className={`flex justify-between items-center py-2 font-medium ${isParentActive(submenu) ? activeColor : linkColor}`}
                                        >
                                            {label}
                                            <ChevronDown size={16} className={`transition-transform ${isSubmenuOpen ? "rotate-180" : ""}`} />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                setMobileOpen(false);
                                                navigate(to);
                                            }}
                                            className={`block w-full text-left py-2 font-medium ${location.pathname === to ? activeColor : linkColor}`}
                                        >
                                            {label}
                                        </button>
                                    )}

                       
                                    {submenu && isSubmenuOpen && (
                                        <ul className="pl-4 border-l border-accent/30">
                                            {submenu.map((item) => (
                                                <li key={item.to}>
                                                    <NavLink
                                                        to={item.to}
                                                        className={`block w-full text-left py-2 text-sm ${location.pathname === item.to ? activeColor : "text-white hover:text-accent"}`}
                                                        onClick={() => setMobileOpen(false)} // solo cerrar menú hamburguesa
                                                    >
                                                        {item.label}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}


        </header>
    );
}
