import React from "react";
import "../assets/scss/main.scss"
import MainCateComp from "../components/MainCateComp";
import images from '../assets/images/cate_list/index';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import arrayShuffle from "array-shuffle";

export default function CateList() {
    const CateList = [
        {
            img : "1LGGVOJ7_uN66mirhncaWl74Qpq0jTyDH",
            txt : 'Beauty & Fashion'
        },
        {
            img : '12knAm9pFeKnC7eVcD0fq253I9SJsMrx1',
            txt : 'test test test test'
        },
        {
            img : '1gU6TED0XQ1FPI8p-RAnMKjL42h8BsMp5',
            txt : 'test test test test'
        },
        {
            img : '1rOWSRsG5SYxWa2ebpeKaUYmLlLEU_a9A',
            txt : 'test test test test'
        },
        {
            img : '1VYVW6iF_QlLJNlvyg2aj85J29vHoqHV9',
            txt : 'test test test test'
        },
        {
            img : '1ePA6KWGFrXr7MXXfWwY-1mQjEcy79sQh',
            txt : 'test test test test'
        },
        {
            img : '1JuqxgzpLzN_LrE0axMJJAcblXUsgnne3',
            txt : 'test test test test'
        },
        {
            img : '1eYaf2RR2HlyW-QPScnZVeu_7ay1JmUMH',
            txt : 'test test test test'
        },
        {
            img : '1KzgTpCTSg62g64FLRDQFfGO-at1VpbUi',
            txt : 'test test test test'
        },
        {
            img : '1F0GV6k8cxsbjyHHa_O-NniYkFFE4X-nG',
            txt : 'test test test test'
        },
        {
            img : '1RT5LvaFEu7zvzEOvduX3hgCxl0XDYbG4',
            txt : 'test test test test'
        },
        {
            img : '1HEkh56JCxwtZ5j4xHDxOYu8plOcCul6_',
            txt : 'test test test test'
        },
        {
            img : '1PfKtNO7w0aF0o-AT2qsLYiR-XfZJc_vV',
            txt : 'test test test test'
        },
        {
            img : '1xbvJu4t5nTu9Iy4NA63N4COvLZpXZmNM',
            txt : 'test test test test'
        },
        {
            img : '1_pk-6da5qHPxAxWebw_p4mubQfm4f5dp',
            txt : 'test test test test'
        },
        {
            img : '1h418Hng0CRUqzPB1paQf2ImBHOZKIQO2',
            txt : 'test test test test'
        },
        {
            img : '1o56OC0GoOveb0B29bVRzKjF3npY8TcOC',
            txt : 'test test test test'
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
                            {CateList.map(item => (
                            <div className={"item-box"}>
                                <img src={"https://lh3.googleusercontent.com/d/"+item.img+"?authuser=0"}/>
                                <p className={"item-txt"}>{item.txt}</p>
                                <div className={"item-box-dim"}></div>
                            </div>
                            ))}
                            { //list.map(item => (
                              //  <div className={"item-box"}>
                              //      <img src={item}/>
                              //      <p className={"item-txt"}>내용~~~</p>
                              //      <div className={"item-box-dim"}></div>
                              //  </div>
                            //))
                            }
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </section>
        </>
    );
};
