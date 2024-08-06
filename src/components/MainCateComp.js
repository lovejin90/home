import React from 'react';
import {Link} from "react-router-dom";

const MainCateComp = (props) => {
    return (
        <div key={props.list.id} className="cate-list">
            <Link to={`/cate/${props.list.id}`}>
            <div className="cate-list-bg" style={{backgroundImage: `url(${props.list.background})`}}>
                <div className="cate-list-txt">
                    <p>{props.list.txt}</p>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default MainCateComp;
