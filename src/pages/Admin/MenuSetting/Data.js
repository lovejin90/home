import React, { useState, useEffect} from 'react';
import axios from 'axios';

export default function Data() {
    const [List, setList] = useState([]);
    const fetchList = () => {
        axios.get('/server' )
            .then((response) => {
                console.log(response)
                setList(response);
            })
            .catch((error) => {
                console.log("Error while fetching books:", error);
            });
    }

    useEffect(() => {
        fetchList()
    }, []);

    return (
          List.map((list, key) => {
              return (
                 <h1>{list.name}</h1>
              );
          })
    );
}