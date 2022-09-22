import React from "react";
import AscentBackground from "../../media/AscentBackground";
import BlissBackground from "../../media/BlissBackground";
import { selectBackground, selectDraggingItems, selectOpenItems } from "../store/desktop.store";
import { useAppSelector } from "../store/hooks";
import Navbar from "../../layout/Navbar/Navbar";
import { Background, DesktopItem } from "./desktop.model";
import DesktopIcon, { desktopItemIcons } from "../../layout/DesktopIcon/DesktopIcon";
import WindowLayout from "../../layout/Window/WindowLayout";
import "./Desktop.scss";

const desktopBackgrounds: Record<Background, JSX.Element> = {
    "ascent": <AscentBackground />,
    "bliss": <BlissBackground />,
}

interface DesktopProps {
    desktopItems: DesktopItem[];
}

const Desktop: React.FC<DesktopProps> = ({ desktopItems }) => {
    const background: Background = useAppSelector(selectBackground);
    const openItems: string[] = useAppSelector(selectOpenItems);
    const draggingItems: string[] = useAppSelector(selectDraggingItems);

    return (
        <div className="windows-page-container">
            { desktopBackgrounds[background] || <BlissBackground /> }
            {
                desktopItems.map((item, idx) => (
                    <div key={idx} className={draggingItems.includes(item.id) ? "dragging" : ""}>
                        <DesktopIcon itemId={item.id} label={item.label} itemType={item.type} icon={item.icon} />
                        { 
                            openItems.includes(item.id) && 
                            <WindowLayout itemId={item.id} label={item.label} icon={item.icon || desktopItemIcons[item.type]}>
                                { <item.Window /> }
                            </WindowLayout>
                        }
                    </div>
                ))
            }
            <div className="navbar-container">
                <Navbar />
            </div>
        </div>
    );
};

export default Desktop;
