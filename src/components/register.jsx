import React, { useState } from 'react';
import style from "../components/register.module.css"
import Modal from 'react-bootstrap/Modal';

import { GiAstronautHelmet } from "react-icons/gi";
import Patreon from '../assets/img/imgs/Patreon.gif'


export function Register() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <button className={style.btnCadaster} variant="primary" onClick={handleShow}>
                Cadastrar
            </button>

            <Modal show={show} onHide={handleClose} className={style.modal}>
                <div className={style.fundo}>

                    <Modal.Body className={style.grade}>
                        <div className={style.leftGrade}>
                            <img src={Patreon} alt="" />
                        </div>
                        <div className={style.rightGrade}>
                            <div className={style.logo}><span><GiAstronautHelmet />IngáFilmes</span></div>

                            <div className={style.areaRegister}>
                                <input type="text" placeholder='Nome de Usuárioa' />
                                <span className={style.alert}>senha invalida</span>
                            </div>

                            <div className={style.areaRegister}>
                                <input type="email" placeholder='E-mail' />
                                <span className={style.alert}>senha invalida</span>
                            </div>

                            <div className={style.areaRegister}>
                                <input type="password" placeholder='Senha' />
                                <span className={style.alert}>senha invalida</span>
                            </div>

                            <div className={style.areaRegister}>
                                <input type="password" placeholder='Senha confirme' />
                                <span className={style.alert}>senha invalida</span>
                            </div>

                            <div><button btn={style.btnsingUp}>Cadastra-se</button></div>


                        </div>
                    </Modal.Body>

                </div>
            </Modal>
        </>
    )
}
