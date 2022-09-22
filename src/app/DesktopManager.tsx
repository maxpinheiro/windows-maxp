import React, { useEffect } from "react";
import { randomInRange } from "../utils/math.utils";
import Portfolio from "../windows/Portfolio/Portfolio";
import Desktop from "./Desktop/Desktop";
import { Background, DesktopItem, ItemPosition } from "./Desktop/desktop.model";
import AboutMe from "../windows/AboutMe/AboutMe";
import ControlPanel from "../windows/ControlManager/ControlPanel";
import ControlPanelIcon from "../media/ControlPanelIcon";
import { useAppDispatch } from "./store/hooks";
import { setBackground, setItemPositions } from "./store/desktop.store";

const desktopItems: DesktopItem[] = [
    {
        id: "portfolio",
        label: "portfolio",
        type: "folder",
        Window: Portfolio
    },
    {
        id: "about me",
        label: "about_me.md",
        type: "file",
        Window: AboutMe
    },
    {
        id: "settings",
        label: "control panel",
        type: "application",
        icon: <ControlPanelIcon />,
        Window: ControlPanel
    }
];

const getInitialPositions = (items: DesktopItem[], window: Window): Record<string, ItemPosition> => {
    let positions: Record<string, ItemPosition> = {};
    items.forEach(item => {
        positions[item.id] = {
            iconTop: randomInRange(0, window.innerHeight - 80),
            //iconLeft: `${randomInRange(0, window.innerWidth * 0.1)}px`,
            iconLeft: 10,
            windowTop: window.innerHeight / 4,
            windowLeft: window.innerWidth / 3,
            mouseOffset: null,
        }
    });
    return positions;
}

const DesktopManager: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setItemPositions(getInitialPositions(desktopItems, window)));

        const storedBackground = JSON.parse(window.localStorage.getItem("background") || "null");
        if (storedBackground) {
            dispatch(setBackground(storedBackground as Background));
        }
    }, [ dispatch ]);

    return (
        <Desktop desktopItems={desktopItems} />
    );
}

export default DesktopManager;
