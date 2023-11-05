import { useState, useEffect } from "react"

const Formulario = () => {
    let [materia1, setMateria1] = useState(0);
    let [materia2, setMateria2] = useState(0);
    let [materia3, setMateria3] = useState(0);

    useEffect(() => {
        console.log('mudou')
    });
    const renderizaResultado = () => {
        const soma = materia1 + materia2 + materia3;
        const media = soma / 3;

        if (media >= 7)
        {
            return (
                <p>Aprovado</p>
            )
        }
        else {
            return (
                <p>Reprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => <li>{item}</li>)}
            </ul>
            <input type="number" placeholder="Nota 1" onChange={event => setMateria1(parseInt(event.target.value))}/>
            <input type="number" placeholder="Nota 2" onChange={event => setMateria2(parseInt(event.target.value))}/>
            <input type="number" placeholder="Nota 3" onChange={event => setMateria3(parseInt(event.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario