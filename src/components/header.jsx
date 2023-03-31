
import style from "./header.module.css"
import { GiAstronautHelmet} from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import * as React from 'react';
import Button from '@mui/material/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgRegister from '../assets/img/imgs/registeriImg.gif'


function Header(){


        function handleSubmit(e) {
          e.preventDefault();        
          var grade = document.querySelector('#gridRedister')

        grade.style.display ="block";

        }
   
    return(
        <>
        
 <div className={style.header}>
            <div className="center">
                <div className={style.logo}><span><GiAstronautHelmet/>IngáFilmes</span></div>
            <div className={style.navBar}>
        <       input type="text" placeholder="Buscar produtos "/> <span><BsSearch/></span>
            </div>
        <div className={style.menu}> 
            <nav>
                <Button onClick={handleSubmit} className={style.btn} variant="outlined" size="small">Entrar</Button>
                <span className={style.bar}>|</span>
                <Button className={style.btn} variant="outlined" size="small" >Cadastra</Button>
            </nav>
        </div>
    </div>

</div>
    <div className={style.line}>
        <div id="gridRedister" className={style.gridRedister}>
            <Container className={style.section}>
                <Row >
                    <Col><img src={imgRegister} className={style.imgRegister} alt="" /></Col>
                    <Col className={style.register}>
                        <div className={style.logoRegister}><span><GiAstronautHelmet/>IngáFilmes</span></div>
                        <div><input type="email" placeholder="E-mail" /></div>
                        <div><input type="text" placeholder="Senha" /></div>
                        <a href="#"><p>Esqueci minha senha</p></a>
                        <button className={style.btnEnter}>Entrar</button>
                        <p>Não tem uma conta? <a href="">Registre-se</a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
</>
    )
}


export default Header