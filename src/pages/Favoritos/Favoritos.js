import { useEffect, useState } from 'react';
import './favoritos.css'
import { json } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Favoritos(){
    const [Filmes, setFilmes] = useState([])


    useEffect(() => {
        const minhaLista = localStorage.getItem("@flixfilme")
        setFilmes(JSON.parse(minhaLista) || [])

    },[])
    return(
        <div className="meus-filmes">
            <h1>MEUS FILMES</h1>

            <ul>
                {Filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <link to={`/filme/${item.id}`}>ver filmes</link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;