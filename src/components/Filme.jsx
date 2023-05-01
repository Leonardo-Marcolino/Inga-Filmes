import { useEffect, useState } from "react";
import style from '../components/filme.module.css';
import { Link } from "react-router-dom";


export function Filme() {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }

    const [movies, setMovies] = useState([])

    useEffect(() => {

        fetch('https://api.themoviedb.org/3/movie/popular?api_key=c29fdf597e7fc7148f8bae2536f1dc21&language=en-US&page=1')
            .then(response => response.json())
            .then(data => setMovies(data.results))

    })
    const img_path = 'https://image.tmdb.org/t/p/w500';
    

    return (

        <div className={style.center}>
            <div className={style.title}>
                <h3>Os Mais Populares</h3>
            </div>
            <div className={style.grade}>
                <ul>
                    {movies.map(movie => {
                        return (
                            <li key={movie.id}>
                                <div className={style.filme}>
                                    <Link to={`/details/${movie.id}`}><img src={`${img_path}${movie.poster_path}`} alt="" /></Link>
                                    <span>{movie.title}</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}
