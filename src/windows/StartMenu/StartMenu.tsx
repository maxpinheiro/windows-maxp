import React from "react";
import ControlPanelIcon from "../../media/ControlPanelIcon";
import "./StartMenu.scss";

const LeftPanel = () => (
    <div className="left-panel">
        <div className="item-row">
            <div className="paint-icon" />
            <p>Paint</p>
        </div>
        <div className="item-row">
            <div className="github-icon" />
            <p>My Github</p>
        </div>
        <div className="item-row">
            <div className="website-icon" />
            <p>My Website</p>
        </div>
        <div className="item-row">
            <div className="resume-icon" />
            <p>My Resume</p>
        </div>
    </div>
);

const RightPanel = () => (
    <div className="right-panel">
        <div className="item-row">
            <ControlPanelIcon width={10} height={10} />
            <p>Control Panel</p>
        </div>
    </div>
);

const StartMenu: React.FC = () => {
    return (
        <div className="start-menu">
            <div className="header">
                <div className="icon"></div>
                <p>Guest</p>
            </div>
            <div className="body">
                <LeftPanel />
                <RightPanel />
            </div>
            <div className="footer">
                <div className="logout-button">
                    Log Off
                </div>
                <div className="turn-off-button">
                    Turn Off Computer
                </div>
            </div>
        </div>
    );
}

export default StartMenu;
