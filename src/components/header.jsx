
import style from "./header.module.css"
import { GiAstronautHelmet } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { HiOutlineBars3 } from "react-icons/hi2";


function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <div className={style.header}>
                <div className="center">
                    <button variant="primary" className={style.btnMobile} onClick={handleShow}> <HiOutlineBars3 className={style.iconMenu} /></button>
                    <Offcanvas className={style.navMobile} show={show} onHide={handleClose}>
                        <Offcanvas.Header className={style.ss} closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>

                    <div className={style.logo}><span><GiAstronautHelmet />IngáFilmes</span></div>
                    <div className={style.navBar}>
                        <       input type="text" placeholder="Buscar produtos " /> <span><BsSearch className={style.icoNav} /></span>
                    </div>
                    <div className={style.menu}>
                        <nav>

                        </nav>
                    </div>
                </div>

            </div>

        </>
    )
}


export default Header