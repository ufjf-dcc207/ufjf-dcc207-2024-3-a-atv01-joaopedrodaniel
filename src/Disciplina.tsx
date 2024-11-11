import "./Disciplina.css";

function Disciplina() {

    const codigo = "DCC2017";
    const nome = "Desenvolvimento WebFront-End";

    return  (
    <div className="disciplina">
        <div>{codigo}</div>
        <div>{nome}</div>
    </div>
)
}

export default Disciplina;