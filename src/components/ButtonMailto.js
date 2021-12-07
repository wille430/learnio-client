import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
            className="text-white text-xs m-1 display block"
        >

            {label}
        </Link>
    );
};

export default ButtonMailto;