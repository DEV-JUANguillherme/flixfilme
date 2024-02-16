import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './filmes-info.css';

import api from '../../services/Api/Api'

function Filme(){
    const {id} = useParams();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadfilme(){

            await api.get(`/movie/${id}`, {
                params:{
                    api_key: 'f87f79a893719ec360668cb0c48cc462',
                    language: 'pt-BR',
                }
            })
            .then((response)=>{
                setFilme(response.data)
                setLoading(false)
            })
            .catch(()=>{

            })
        }
        loadfilme();

        return () => {

        }
    },[])

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando..</h1>
            </div>
        )
    }
    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} /10</strong>

            <div className="area-buttons">
                <button>Salvar</button>
                <button>
                    <a href="*">
                        trailer
                    </a>
                </button>
            </div>
        
        </div>
    )
}

export default Filme;