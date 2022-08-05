import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Button.css";

const Button = () => {
    return (

        <Link to="login">
            <button className="btn">Login</button>
        </Link>

    );
}

export default Button;