import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Background, ItemPosition, ItemType, WindowPos } from "../Desktop/desktop.model";

export interface DesktopState {
    background: Background;
    //desktopItems: DesktopItem[];
    itemPositions: Record<string, ItemPosition>;
    openItems: string[];
    draggingItems: string[];
}

const initialState: DesktopState = {
    background: "bliss",
    itemPositions: {},
    openItems: [],
    draggingItems: []
};

export const desktopSlice = createSlice({
    name: 'desktop',
    initialState,
    reducers: {
        setBackground: (state, action: PayloadAction<Background>) => {
            state.background = action.payload;
        },
        openItem: (state, action: PayloadAction<string>) => {
            state.openItems.push(action.payload);
        },
        closeItem: (state, action: PayloadAction<string>) => {
            state.openItems = state.openItems.filter(item => item !== action.payload);
        },
        setItemPositions: (state, action: PayloadAction<Record<string, ItemPosition>>) => {
            state.itemPositions = action.payload;
        },
        startDraggingItem: (state, action: PayloadAction<{itemId: string, mousePosition: WindowPos}>) => {
            state.draggingItems.push(action.payload.itemId);
            if (state.itemPositions[action.payload.itemId]) {
                state.itemPositions[action.payload.itemId].mouseOffset = { top: action.payload.mousePosition.top, left: action.payload.mousePosition.left };
            }
        },
        moveItem: (state, action: PayloadAction<{itemId: string, mousePosition: WindowPos, itemType: "icon" | "window"}>) => {
            if (state.draggingItems.includes(action.payload.itemId)) {
                const itemPosition = state.itemPositions[action.payload.itemId];
                if (itemPosition && itemPosition.mouseOffset) {
                    const newTop = action.payload.mousePosition.top - itemPosition.mouseOffset?.top;
                    const newLeft = action.payload.mousePosition.left- itemPosition.mouseOffset?.left;
                    if (action.payload.itemType === "icon") {
                        itemPosition.iconTop = newTop;
                        itemPosition.iconLeft = newLeft;
                    } else if (action.payload.itemType === "window") {
                        itemPosition.windowTop = newTop;
                        itemPosition.windowLeft = newLeft;
                    }
                }
            }
        },
        stopDraggingItem: (state, action: PayloadAction<string>) => {
            state.draggingItems = state.draggingItems.filter(item => item !== action.payload);
            if (state.itemPositions[action.payload]) {
                state.itemPositions[action.payload].mouseOffset = null;
            }
        }
    }
});

export const { setBackground, openItem, closeItem, setItemPositions, startDraggingItem, moveItem, stopDraggingItem } = desktopSlice.actions;

export const selectBackground = (state: RootState): Background => state.desktop.background;
export const selectItemPositions = (state: RootState): Record<string, ItemPosition> => state.desktop.itemPositions;
export const selectPositionOfItem = (state: RootState, itemId: string, itemType: "icon" | "window"): WindowPos | null => {
    const itemPos = state.desktop.itemPositions[itemId];
    if (itemPos) {
        return {
            top: itemType === "icon" ? itemPos.iconTop : itemPos.windowTop,
            left: itemType === "icon" ? itemPos.iconLeft : itemPos.windowLeft,
        }
    } else {
        return null;
    }
};
export const selectOpenItems = (state: RootState): string[] => state.desktop.openItems;
export const selectDraggingItems = (state: RootState): string[] => state.desktop.draggingItems;

export const desktopReducer = desktopSlice.reducer;
