import "./Emoji.css";
import { useState } from "react";

const EMOJIS = new Map<string, string>([
    ["happy", "🙂"],
    ["sick", "🤢"],
    ["dead", "💀"],
]);

export default function Emoji() {
    const [situacao, setSituacao] = useState("happy");

    return (
        <div className="emoji">
            <div className="situacao">{EMOJIS.get(situacao) || "☠"}</div>
            <div className="acoes">
                <button onClick={() => setSituacao("dead")}>Morto</button>
                <button onClick={() => setSituacao("happy")}>Vivo</button>
            </div>
        </div>
    );
}