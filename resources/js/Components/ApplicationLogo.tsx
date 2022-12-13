import React from "react";
import logo from "@/assets/logo_transparent.png";

interface IApplicationLogo {
    classes: string
}

export default function ApplicationLogo({classes}: IApplicationLogo) {
    return (
        <img src={logo} alt="Logo"  className={"mx-auto " + classes}/>
    );
}
