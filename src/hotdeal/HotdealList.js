import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import { deleteBook } from './api';  // delete 공통 함수 : api.js

export default function HotdealList() {
    const  [HotdealList, setHotdealList] = useState([]);

    useEffect(() => {
        fetchHotdealList()
    }, []);

    const fetchHotdealList = () => {
        axios.get('/api')
            .then((response) => {
                setHotdealList(response.data);
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
        <div className="container">
            <h2 className="text-center mt-5 mb-3"> 목록</h2>
            <div className="card-deck">
                {HotdealList.map((list, key) => {
                    return (
                        <div className="card" style={{width: '18rem'}} key={key}>
                            <div className="card-body">
                                <h5 className="card-text">{list.title}</h5>
                                <p className="card-text">{list.site_name}</p>
                                <a href="{list.url}" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

    );
}