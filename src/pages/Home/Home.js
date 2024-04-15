import { useEffect, useState } from "react";
import api from '../../services/Api/Api'
import { Link } from "react-router-dom";
import './Home.css';
//https://api.themoviedb.org/3/movie/now_playing?api_key=f87f79a893719ec360668cb0c48cc462

function Home(){
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true)

// toda vez q nossa aplicação abrir vai aparecer
    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: 'f87f79a893719ec360668cb0c48cc462',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            setFilmes(response.data.results.slice(0, 10))
            setLoading(false)

        }

        loadFilmes();
    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }
    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;