import { useParams } from "react-router-dom"
import style from "../Details/index.module.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useEffect, useState } from "react";



export function Details() {

  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const img_path = 'https://image.tmdb.org/t/p/w500'



  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c29fdf597e7fc7148f8bae2536f1dc21&language=en-US`)
      .then(response => response.json())
      .then(data => {
        console.log(data)

        const { title, poster_path, overview, release_date } = data
        const movie = {
          id,
          title: title,
          sinopse: overview,
          image: `${img_path}${poster_path}`,
          releaseDate: release_date,
        }

        setMovie(movie)
      })

  }, [id])

  return (
    <>
      <Container className={style.grade}>
        <Row className={style.gradeDetails}>
          <Col className={style.leftDatail}>
            <img src={movie.image} alt="" />
            <button>Movie Trailer</button>
          </Col>
          <Col className={style.rightDetail}>
            <h1 className={style.title}>{movie.title}</h1>
            <p>{movie.sinopse}</p>
            <h4><span>Realease_Date: </span>{movie.releaseDate}</h4>
            <div className={style.btnBack}>
              <a href="http://localhost:3001/"><HiArrowLeftOnRectangle className={style.icon} /> Go Back</a>
              </div>

          </Col>
        </Row>
      </Container>
    </>
  )
}

