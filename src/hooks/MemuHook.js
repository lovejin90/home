import React,{useState, useRef} from 'react';
import MenuComp from "../components/MenuComp";
import {Mobile, PC} from "../index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const MenuHook = () => {
    const [modalIsOpen, setModalState] = useState('off');
    const [icon, setIcon] = useState(faBars);

    function deleteHandler() {
        setModalState('off');
        setIcon(faBars);
    }

    function closeModalHandler() {
        setModalState('on');
        setIcon(faXmark);
    }

    return (
        <>
            <div className={"header-wrap"}>
                <span className={"header-logo"}/>
                <button onClick={(modalIsOpen == 'off')?closeModalHandler:deleteHandler}><FontAwesomeIcon id={"header-menu-btn"} icon={icon} size="2x"/></button>
            </div>
            <div className={"header-site-info-menu-wrap " + (modalIsOpen)}>
                <div className={"header-site-info-menu"}>
                    <MenuComp/>
                </div>
            </div>
        </>
)
    ;
};

export default MenuHook;
