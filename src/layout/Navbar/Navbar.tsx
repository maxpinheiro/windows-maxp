import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import Logo from "../../media/Logo";
import StartMenu from "../../windows/StartMenu/StartMenu";
import "./Navbar.scss";

const Navbar: React.FC = () => {
    const [ time, setTime ] = useState<DateTime>(DateTime.local());
    const [ startMenuOpen, setStartMenuOpen ] = useState(false);

    useEffect(() => {
        const timerId = setInterval(() => setTime(DateTime.local()), 30000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="windows-navbar">
            <div className="row">
                <div className="start-button" onClick={() => setStartMenuOpen(b => !b)}>
                    <div className="logo">
                        <Logo />
                    </div>
                    <p>start</p>
                </div>
            </div>
            { startMenuOpen && <StartMenu /> }
            <div className="row time-panel">
                <p className="title">{time.toLocaleString(DateTime.TIME_SIMPLE)}</p>
            </div>
        </div>
    );
}

export default Navbar;
