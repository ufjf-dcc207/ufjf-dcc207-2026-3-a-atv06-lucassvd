import "./Emoji.css";

const EMOJIS = new Map<string, string>([
    ["happy", "🙂"],
    ["sick", "🤢"],
    ["dead", "💀"],
]);

export default function Emoji() {
    let situacao = "happy";

    function toHappy() {
        console.log("toHappy()!");
    }

    function toDead() {
        console.log("toDead()!");
    }
    return (
        <div className="emoji">
            <div className="situacao">{EMOJIS.get(situacao) || "☠"}</div>
            <div className="acoes">
                <button onClick={toDead}>Morto</button>
                <button onClick={toHappy}>Vivo</button>
            </div>
        </div>
    );
}