import React from 'react';
import {Mobile, PC} from "../index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const MenuComp = (props) => {
    return (
        <>
            <PC>
                <ul>
                    <li>
                        <a href="{()=>false}">
                            Home
                            <FontAwesomeIcon icon={faAngleDown} />
                        </a>
                    </li>
                    <li>
                        <a href="{()=>false}">
                            About
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </a>
                    </li>
                    <li>
                        <a href="{()=>false}">
                            Portfolio
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </a>
                    </li>
                    <li>
                        <a href="{()=>false}">
                            blog
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </a>
                    </li>
                    <li>
                        <a href="{()=>false}">
                            Contact
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </a>
                    </li>
                    <li>
                        <a href="{()=>false}">
                            More
                            <FontAwesomeIcon icon={faAngleDown}/>
                        </a>
                    </li>
                    <li>
                        <a href="{()=>false}">
                            검색
                        </a>
                    </li>
                </ul>
            </PC>
            <Mobile>
                <ul>
                    <li>
                        <a href="{()=>false}">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="{()=>false}">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="{()=>false}">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="{()=>false}">
                            blog
                        </a>
                    </li>
                    <li>
                        <a href="{()=>false}">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="{()=>false}">
                            More
                        </a>
                    </li>
                    <li>
                        <a href="{()=>false}">
                            검색
                        </a>
                    </li>
                </ul>
            </Mobile>
        </>

    );
};

export default MenuComp;
