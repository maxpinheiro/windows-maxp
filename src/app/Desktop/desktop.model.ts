
export type ItemType = "folder" | "file" | "application" | "link";

export type Background = "bliss" | "ascent";

export interface ItemPosition {
    iconTop: number;
    iconLeft: number;
    windowTop: number;
    windowLeft: number;
    mouseOffset: {top: number, left: number} | null;
}

export interface WindowPos {
    top: number;
    left: number;
}

export interface DesktopItem {
    id: string;
    label: string;
    type: ItemType;
    Window: React.FC;
    icon?: JSX.Element;
}
