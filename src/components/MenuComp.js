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
                        <a href="">
                            Home
                            <FontAwesomeIcon icon={faAngleDown} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            About
                            <FontAwesomeIcon icon={faAngleDown} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Portfolio
                            <FontAwesomeIcon icon={faAngleDown} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            blog
                            <FontAwesomeIcon icon={faAngleDown} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Contact
                            <FontAwesomeIcon icon={faAngleDown} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            More
                            <FontAwesomeIcon icon={faAngleDown} />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            검색
                        </a>
                    </li>
                </ul>
            </PC>
            <Mobile>
                <ul>
                    <li>
                        <a href="">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="">
                            blog
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="">
                            More
                        </a>
                    </li>
                    <li>
                        <a href="">
                            검색
                        </a>
                    </li>
                </ul>
            </Mobile>
        </>

    );
};

export default MenuComp;
