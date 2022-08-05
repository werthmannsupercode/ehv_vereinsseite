import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import DropdownUeberUns from "./DropdownUeberUns";
import DropdownJahresablauf from "./DropdownJahresablauf";
import logoehv from "../images/logoehv.png";

const Navbar = () => {

    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);

    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navbarLogo">
                    <img src={logoehv} alt="Logo ehv" className="logoimg" />
                    <div>
                        <h1>Eigenheimer-Vereinigung Waigolshausen-Theilheim e.V.</h1>
                    </div>
                </Link>

                <ul className="nav-items">
                    {navItems.map(item => {
                        if (item.title === "Über uns") {
                            return (
                                <li key={item.id} className={item.cName} onMouseEnter={() => setDropdown1(true)} onMouseLeave={() => setDropdown1(false)}>
                                    <Link to={item.path}>{item.title}</Link>
                                    {dropdown1 && <DropdownUeberUns />}
                                </li>
                            )
                        }
                        else if (item.title === "Jahresablauf") {
                            return (
                                <li key={item.id} className={item.cName} onMouseEnter={() => setDropdown2(true)} onMouseLeave={() => setDropdown2(false)}>
                                    <Link to={item.path}>{item.title}</Link>
                                    {dropdown2 && <DropdownJahresablauf />}
                                </li>
                            )
                        }
                        return (
                            <li key={item.id} className={item.cName}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <Button />
            </nav>
        </div>
    );
}

export default Navbar;