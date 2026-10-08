import { useState } from "react";
import "./Emoji.css";
import Atributo from "./Atributo";

const EMOJIS = new Map<string, string>([
    ["happy", "🙂"],
    ["sick", "🤢"],
    ["dead", "💀"],
]);

export default function Emoji() {
    const [situacao, setSituacao] = useState("happy");

    function toHappy() {
        console.log("toHappy()!");
        setSituacao("happy");
    }

    function toSick() {
        console.log("toSick()!");
        setSituacao("sick");
    }

    function toDead() {
        console.log("toDead()!");
        setSituacao("dead");
    }

    function toNext() {
        switch (situacao) {
            case "happy":
                setSituacao("sick");
                break;
            case "sick":
                setSituacao("dead");
                break;
            case "dead":
                setSituacao("happy");
                break;
            default:
                setSituacao("happy");
                break;
        }
    }

    return (
        <div className="emoji">
            <div className="situacao">{EMOJIS.get(situacao) || "😐"}</div>
            <div className="lista">
            <div className="atributos">
                <Atributo icone ="❤" />
                <Atributo icone ="⚡" />
                <Atributo icone ="💧" />
                <Atributo icone ="🍗" />
                </div>
            <div className="acoes">
                <button onClick={toDead}>Morto</button>
                <button onClick={toSick}>Doente</button>
                <button onClick={toHappy}>Vivo</button>
                <button onClick={toNext}>Ciclo</button>
                </div>
            </div>
        </div>
    );
}