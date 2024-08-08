import '../App.css';
import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import { deleteBook } from './api';  // delete 공통 함수 : api.js

export default function HotdealList() {
    const  [HotdealList, setHotdealList] = useState([]);

    const SiteInfo = [
        {
            id: 'quasarzone',
            site_name : '퀘이사존',
            board_name: 'qb_saleinfo',
            domain: '',
            url: ''
        },
        {
            id: 'ppomppu',
            site_name : '뽐뿌',
            board_name: 'zboard',
            domain: 'https://www.ppomppu.co.kr/zboard/',
            url: ''
        },
        {
            id: 'ruriweb',
            site_name : '루리웹',
            board_name: '1020',
            domain: '',
            url: ''
        },
        {
            id: 'clien',
            site_name : '클리앙',
            board_name: 'jirum',
            domain: 'https://www.clien.net',
            url: ''
        },
    ];

    useEffect(() => {
        fetchHotdealList()
    }, []);

    const fetchHotdealList = () => {
        axios.get('/api')
            .then((response) => {
                console.log(response)
                setHotdealList(response);
            })
            .catch((error) => {
                console.log("Error while fetching books:", error);
            });
    }

    const handleDeleteConfirm = (id) => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            deleteBook(id)            // delete 공통 함수 호출 : api.js
                .then(() => {
                    console.log("Book deleted successfully.");
                    fetchHotdealList();
                })
                .catch((error) => {
                    console.log("Error while deleting book:", error);
                });
        }
    }

    return (
        <div className="container hotdeal_wrap">
            <div className="card-deck">
                {HotdealList.map((list, key) => {
                    const returnIndex= SiteInfo.findIndex(function(item){ return item.id === list.site_name})
                    return (
                        <div className="card" key={key}>
                            <div className="card-body">
                                <h5 className="card-text text-break text-break-line-3">{list.title}</h5>
                                <p className="card-text">[{SiteInfo[returnIndex].site_name}]</p>
                                <a href={SiteInfo[returnIndex].domain + list.url} className="btn btn-primary" target="_blank">바로가기</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}