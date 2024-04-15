import { useEffect, useState } from 'react';
import './favoritos.css'
import { toast } from 'react-toastify';

import { json } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Favoritos(){
    const [Filmes, setFilmes] = useState([])


    useEffect(() => {
        const minhaLista = localStorage.getItem("@flixfilme")
        setFilmes(JSON.parse(minhaLista) || [])

    },[])

    function excluirFilme(id){
        let filtroFilmes = Filmes.filter((item) => {
            return(item.id !== id)
        })
        setFilmes(filtroFilmes)
        localStorage.setItem('@flixfilme', JSON.stringify(filtroFilmes))
        toast.success("FILME REMOVIDO")
    }
    return(
        <div className="meus-filmes">
            <h1>MEUS FILMES</h1>
            {Filmes.length === 0 && <span>VOCÊ AINDA NÃO TEM NENHUM FILME SALVO </span>}
            <ul>
                {Filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>ver filmes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;