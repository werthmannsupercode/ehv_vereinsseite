import React, { useState } from 'react';
import { ueberunsDropdown } from './NavItems';
import { Link } from 'react-router-dom';
import "../../styles/NavigationStyles/Dropdown.css";

const DropdownUeberUns = () => {

    const [dropdown, setDropdown] = useState(false)
    return (<div>
        <ul className={dropdown ? "ueberunsSubmenu clicked" : "ueberunsSubmenu"} onClick={() => setDropdown(!dropdown)}>
            {ueberunsDropdown.map(item => {
                return (
                    <li key={item.id} >
                        <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>

    </div>);
}

export default DropdownUeberUns;