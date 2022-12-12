import React from "react";
import logo from "@/assets/logo_transparent.png";

interface IApplicationLogo {
    className: string
}

export default function ApplicationLogo({className}: IApplicationLogo) {
    return (
        <img src={logo} alt="Logo"  className="w-48 h-48 mx-auto"/>
    );
}
