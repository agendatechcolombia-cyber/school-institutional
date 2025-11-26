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

    const handleNavigate = (path) => {
        setMobileOpen(false);
        setOpenMenu(null);
        setTimeout(() => navigate(path), 100);
    };

    const isParentActive = (submenu) =>
        submenu?.some((item) => location.pathname === item.to);

    return (
        <header className="fixed top-0 left-0 w-full z-50 shadow-md bg-[#0e1b2a] text-white">
            <div className="container mx-auto flex items-center justify-between py-4 px-4">

                <Link to="/" className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-accent rounded overflow-hidden">
                        <img src="./images/config/logo.jpg" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Colegio Diocesano</h1>
                        <p className="text-sm text-accent">Educación con valores</p>
                    </div>
                </Link>

                <nav ref={menuRef} className="hidden md:flex items-center gap-6">
                    {menus.map(({ to, label, submenu }) =>
                        submenu ? (
                            <div key={label} className="relative">
                                <button
                                    onClick={() =>
                                        setOpenMenu(openMenu === label ? null : label)
                                    }
                                    className={`flex items-center gap-1 font-medium ${
                                        isParentActive(submenu) ? activeColor : linkColor
                                    }`}
                                >
                                    {label}
                                    <ChevronDown size={16} />
                                </button>

                                {openMenu === label && (
                                    <div className="absolute left-0 mt-2 w-52 bg-[#0e1b2a] border border-accent/40 rounded shadow-lg">
                                        {submenu.map((item) => (
                                            <NavLink
                                                key={item.to}
                                                to={item.to}
                                                onClick={() => setOpenMenu(null)}
                                                className={({ isActive }) =>
                                                    `block px-4 py-2 text-sm rounded-md ${
                                                        isActive
                                                            ? "bg-accent/20 text-accent"
                                                            : "text-white hover:bg-accent/10 hover:text-accent"
                                                    }`
                                                }
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
                                    `font-medium transition ${
                                        isActive ? activeColor : linkColor
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        )
                    )}
                </nav>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 rounded hover:bg-accent/10"
                >
                    {mobileOpen ? (
                        <X size={28} color="#C0A16E" />
                    ) : (
                        <Menu size={28} color="#C0A16E" />
                    )}
                </button>
            </div>

            {mobileOpen && (
                <div className="md:hidden bg-[#0e1b2a] border-t border-accent/40 shadow-lg relative z-[9999]">
                    <ul className="flex flex-col px-4 py-3">
                        {menus.map(({ to, label, submenu }) => {
                            const isOpen = openMenu === label;

                            return (
                                <li key={label} className="overflow-hidden">

                                    {/* ITEM PRINCIPAL */}
                                    {submenu ? (
                                        <button
                                            onClick={() =>
                                                setOpenMenu(isOpen ? null : label)
                                            }
                                            className={`flex justify-between w-full py-3 font-medium items-center ${
                                                isParentActive(submenu)
                                                    ? activeColor
                                                    : linkColor
                                            }`}
                                        >
                                            {label}

                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform duration-300 ${
                                                    isOpen ? "rotate-180 text-accent" : "rotate-0"
                                                }`}
                                            />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleNavigate(to)}
                                            className={`w-full text-left py-3 font-medium ${
                                                location.pathname === to
                                                    ? activeColor
                                                    : linkColor
                                            }`}
                                        >
                                            {label}
                                        </button>
                                    )}

                                    {submenu && (
                                        <ul
                                            className={`transition-all duration-300 ease-in-out overflow-hidden border-l border-accent/30 pl-4 ${
                                                isOpen
                                                    ? "max-h-96 opacity-100"
                                                    : "max-h-0 opacity-0"
                                            }`}
                                        >
                                            {submenu.map((item) => (
                                                <li key={item.to}>
                                                    <button
                                                        onClick={() =>
                                                            handleNavigate(item.to)
                                                        }
                                                        className={`w-full text-left py-2 text-sm ${
                                                            location.pathname === item.to
                                                                ? activeColor
                                                                : "text-white hover:text-accent"
                                                        }`}
                                                    >
                                                        {item.label}
                                                    </button>
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
