import React from "react";
import { ItemType, WindowPos } from "../../app/Desktop/desktop.model";
import { moveItem, openItem, selectPositionOfItem, startDraggingItem, stopDraggingItem } from "../../app/store/desktop.store";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import FolderIcon from "../../media/FolderIcon";
import TextFileIcon from "../../media/TextFileIcon";
import "./DesktopIcon.scss";

interface DesktopIconProps {
    itemId: string;
    label: string;
    itemType: ItemType;
    icon?: JSX.Element
}

export const desktopItemIcons: Record<ItemType, JSX.Element> = {
    "folder": <FolderIcon />,
    "file": <TextFileIcon />,
    "link": <div />,
    "application": <div />,
};

const DesktopIcon: React.FC<DesktopIconProps> = ({ itemId, label, itemType, icon }) => {
    const itemPosition: WindowPos | null = useAppSelector(state => selectPositionOfItem(state, itemId, "icon"));
    const dispatch = useAppDispatch();

    const handleItemClicked = (event: React.MouseEvent) => {
        if (event.detail === 2) {
            dispatch(openItem(itemId));
        }
    };

    const handleDragStart = (event: React.MouseEvent) => {
        const targetContainer = event.currentTarget.getBoundingClientRect();
        const top = event.clientY - targetContainer.top;
        const left = event.clientX - targetContainer.left;
        dispatch(startDraggingItem({ itemId, mousePosition: { top, left }}));
    };

    const handleDragging = (event: React.MouseEvent) => {
        dispatch(moveItem({ itemId, mousePosition: { top: event.clientY, left: event.clientX }, itemType: "icon" }));
    };

    const handleDragEnd = (event: React.MouseEvent) => {
        dispatch(stopDraggingItem(itemId));
    }

    return (
        <div className="desktop-item" style={{position: "absolute", top: itemPosition?.top, left: itemPosition?.left}}
            onClick={handleItemClicked} onMouseDown={handleDragStart} onMouseMove={handleDragging} onMouseUp={handleDragEnd}
        >
            { icon || desktopItemIcons[itemType] || <div /> }
            <p className="item-label">{label}</p>
        </div>
    );
}

export default DesktopIcon;
