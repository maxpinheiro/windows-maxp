import React from "react";

const TextFileIcon: React.FC<{width?: number; height?: number}> = ({ width=50, height=50 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 51" width={width} height={height}>
        <polygon fill="#fff" stroke="#000" strokeMiterlimit="10" points="0.5 0.5 0.5 50.5 36.5 50.5 36.5 11.5 25.5 0.5 0.5 0.5"/>
        <polyline fill="#fff" stroke="#000" strokeMiterlimit="10" points="24.5 0.5 24.5 12.5 36.5 12.5"/>
        <line fill="none" stroke="#333" strokeMiterlimit="10" x1="5.5" y1="19.5" x2="31.5" y2="19.5"/>
        <line fill="none" stroke="#333" strokeMiterlimit="10" x1="5.5" y1="27.5" x2="31.5" y2="27.5"/>
        <line fill="none" stroke="#333" strokeMiterlimit="10" x1="5.5" y1="34.5" x2="31.5" y2="34.5"/>
        <line fill="none" stroke="#333" strokeMiterlimit="10" x1="5.5" y1="41.5" x2="31.5" y2="41.5"/>
    </svg>
);

export default TextFileIcon;
