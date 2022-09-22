import React, { useState } from "react";

export type ArtTool = "draw" | "paint" | "erase";

const Paint: React.FC = () => {
    const [ color, setColor ] = useState<string | null>(null);
    const [ tool, setTool ] = useState<ArtTool | null>(null);
    
    
    return (
        <div className="paint-container">

        </div>
    );
}

export default Paint;
