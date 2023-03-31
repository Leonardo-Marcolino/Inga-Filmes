import { useParams } from "react-router-dom"
import style from "../Details/index.module.css"


export function Details(){

    const {id} = useParams()
    console.log(id)
    return(
        <>
        <h1 className={style.titulo}>ola mundoi</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, molestias veniam voluptate maiores nisi autem ad officia ipsum, a eos eius dolor, provident magnam laboriosam. Eos nemo aliquam velit? Veniam</p>
        </>
    )
}

