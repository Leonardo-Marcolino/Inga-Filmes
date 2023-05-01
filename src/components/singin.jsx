import React, { useState } from 'react';
import style from "../components/register.module.css"
import Modal from 'react-bootstrap/Modal';
import iconfacebook from "../assets/img/icones/iconFacebook.svg"
import iconinstagram from "../assets/img/icones/iconInstagram.svg"
import icontwitter from "../assets/img/icones/icontwitter.svg"
import icongithub from "../assets/img/icones/icongithub.svg"

import { GiAstronautHelmet } from "react-icons/gi";
import Patreon from '../assets/img/imgs/registeriImg.gif'


export function Singin() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var userName = document.getElementById("userName")
    console.log(userName)

    return (

        <>
            <button className={style.btnCadaster} variant="primary" onClick={handleShow}>
                Entrar
            </button>

            <Modal show={show} onHide={handleClose} className={style.modal}>
                <div className={style.fundo}>

                    <Modal.Body className={style.grade}>
                        <div className={style.leftGrade}>
                            <img src={Patreon} alt="" />
                        </div>
                        <div className={style.rightGrade}>
                        <h1 className={style.closeBtn} onClick={handleClose}>x</h1>
                            <div className={style.logo}><span><GiAstronautHelmet />IngáFilmes</span></div>


                            <div className={style.areaRegister}>
                                <p>E-mail</p>
                                <input type="email" placeholder='E-mail' />
                                <span className={style.alert}>senha invalida</span>
                            </div>

                            <div className={style.areaRegister}>
                                <p>Passoword</p>
                                <input type="password" placeholder='Senha' />
                                <span className={style.alert}>senha invalida</span>
                            </div>
                                <div className={style.line}>
                                    <div className={style.ln1}></div>
                                    <h5>or</h5>
                                </div>
                                <div className={style.appEnter}>
                                    <div className={style.iconEnter}><img className={style.iconfacebook} src={iconfacebook} alt="" /></div>
                                    <div className={style.iconEnter}><img className={style.iconinstagram} src={iconinstagram} alt="" /></div>
                                    <div className={style.iconEnter}><img className={style.icontwitter} src={icontwitter} alt="" /></div>
                                    <div className={style.iconEnter}><img className={style.icongithub} src={icongithub} alt="" /></div>
                                </div>



                            <div><button btn={style.btnsingUp}>Entrar</button></div>
                        </div>
                    </Modal.Body>
                      
                </div>
            </Modal>
        </>
    )
}