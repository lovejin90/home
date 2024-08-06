import React from "react";
import "../assets/scss/main.scss"
import MainCateComp from "../components/MainCateComp";
import images from '../assets/images/cate_list/index';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import arrayShuffle from "array-shuffle";

export default function CateList() {
    const CateList = [
        {
            img : "",
            txt : 'Beauty & Fashion'
        },
    ];
    let list = arrayShuffle(images);

    return (
        <>
            <section className={"sec-cate-wrap"}>
                <div className={"cate-list"}>
                    <ResponsiveMasonry
                        className={"cate-list-items"}
                        columnsCountBreakPoints={{ 425: 1, 750: 2, 1200: 3 }}
                    >
                        <Masonry columnsCount={3} gutter={"1rem"}>
                            {list.map(item => (
                                <div className={"item-box"}>
                                    <img src={item}/>
                                    <p className={"item-txt"}>내용~~~</p>
                                    <div className={"item-box-dim"}></div>
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </section>
        </>
    );
};
