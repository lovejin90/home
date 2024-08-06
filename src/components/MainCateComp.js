import React from 'react';

const MainCateComp = (props) => {
    return (
        <div key={props.list.id} className="cate-list" style={{backgroundImage : `url(${props.list.background})`}} >
            <div className="cate-list-txt">
                <p>{props.list.txt}</p>
            </div>
        </div>
    );
};

export default MainCateComp;
