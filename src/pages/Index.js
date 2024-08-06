import React from "react";
import "../assets/scss/main.scss"
import MainCateComp from "../components/MainCateComp";
import bg1 from '../assets/images/main/gallery-list-1.jpg';
import bg2 from '../assets/images/main/gallery-list-2.jpg';
import bg3 from '../assets/images/main/gallery-list-3.jpg';
import bg4 from '../assets/images/main/gallery-list-4.jpg';

export default function Main() {

    const CateList = [
        {
            id : 1,
            background : bg1,
            txt : 'Beauty & Fashion'
        },
        {
            username : 2,
            background : bg2,
            txt : 'Beauty & Fashion'
        },
        {
            username : 3,
            background : bg3,
            txt : 'Beauty & Fashion'
        },
        {
            username : 4,
            background : bg4,
            txt : 'Beauty & Fashion'
        },
    ];

    return (
      <>
          <section className="sec-intro">
            <div className="bg-trans-dark"></div>
            <div className="intro-text-area">
                <h1>TESTTEST</h1>
                <hr/>
                <p>Fusce imperdiet, arcu non tempor aliquam, justo tortor cursus est, sed facilisis eros purus et felis. Sed eros sapien, iaculis eget gravida euismod, dapibus vitae turpis. Pellentesque men egestas odio mi, vitae egestas massa elementum.</p>
            </div>
          </section>
          <section className="sec-cate-list">
              {CateList.map(e => (<MainCateComp key={e.id} list={e}/>))}
          </section>
      </>
    );
};
