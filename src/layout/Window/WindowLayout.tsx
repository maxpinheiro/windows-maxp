import React from "react";
import { WindowPos } from "../../app/Desktop/desktop.model";
import { closeItem, moveItem, selectPositionOfItem, startDraggingItem, stopDraggingItem } from "../../app/store/desktop.store";
import { useAppDispatch, useAppSelector } from "../../app/store/hooks";
import { wordsToTitleCase } from "../../utils/text.utils";
import "./WindowLayout.scss";

interface WindowLayoutProps {
    itemId: string;
    label: string;
    children: JSX.Element
    icon?: JSX.Element
}

const WindowLayout: React.FC<WindowLayoutProps> = ({ itemId, label, children, icon }) => {
    const itemPosition: WindowPos | null = useAppSelector(state => selectPositionOfItem(state, itemId, "window"));
    const dispatch = useAppDispatch();

    const close = () => {
        dispatch(closeItem(itemId));
    };

    const handleDragStart = (event: React.MouseEvent) => {
        const targetContainer = event.currentTarget.getBoundingClientRect();
        const top = event.clientY - targetContainer.top;
        const left = event.clientX - targetContainer.left;
        dispatch(startDraggingItem({ itemId, mousePosition: { top, left }}));
    };

    const handleDragging = (event: React.MouseEvent) => {
        dispatch(moveItem({ itemId, mousePosition: { top: event.clientY, left: event.clientX }, itemType: "window" }));
    };

    const handleDragEnd = (event: React.MouseEvent) => {
        dispatch(stopDraggingItem(itemId));
    }

    return (
        <div className="item-window" style={{position: "absolute", top: itemPosition?.top, left: itemPosition?.left }} >
            <div className="window-header" onMouseDown={handleDragStart} onMouseMove={handleDragging} onMouseUp={handleDragEnd}>
                <div className="title-icon">
                    { icon }
                    <p className="title">{wordsToTitleCase(label)}</p>
                </div>
                <div className="buttons">
                    <div className="close-button" onClick={close}>
                        X
                    </div>
                </div>
            </div>
            <div className="body">
                {children}
            </div>
        </div>
    );
}

export default WindowLayout;
