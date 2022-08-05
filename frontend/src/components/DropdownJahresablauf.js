import React, { useState } from 'react';
import { jahresablaufDropdown } from './NavItems';
import { Link } from 'react-router-dom';
import "../styles/DropdownJahresablaufStyles.css";

const DropdownJahresablauf = () => {

    const [dropdown, setDropdown] = useState(false)

    return (<div>
        <ul className={dropdown ? "jahresablaufSubmenu clicked" : "jahresablaufSubmenu"} onClick={() => setDropdown(!dropdown)}>
            {jahresablaufDropdown.map(item => {
                return (
                    <li key={item.id} >
                        <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>

    </div>);
}

export default DropdownJahresablauf;