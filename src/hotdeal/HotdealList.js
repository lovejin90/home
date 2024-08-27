import "../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HotdealList() {
  const [HotdealList, setHotdealList] = useState([]);

  const SiteInfo = [
    {
      id: "quasarzone",
      site_name: "퀘이사존",
      board_name: "qb_saleinfo",
      domain: "",
      url: "",
    },
    {
      id: "ppomppu",
      site_name: "뽐뿌",
      board_name: "zboard",
      domain: "https://www.ppomppu.co.kr/zboard/",
      url: "",
    },
    {
      id: "ruriweb",
      site_name: "루리웹",
      board_name: "1020",
      domain: "",
      url: "",
    },
    {
      id: "clien",
      site_name: "클리앙",
      board_name: "jirum",
      domain: "https://www.clien.net",
      url: "",
    },
  ];

  useEffect(() => {
    fetchHotdealList();
  }, []);

  const fetchHotdealList = () => {
    axios
      .get("/api/agents")
      .then((response) => {
        console.log(response);
        setHotdealList(response);
      })
      .catch((error) => {
        console.log("Error while fetching books:", error);
      });
  };

  return (
    <div className="container hotdeal_wrap">
      <div className="card-deck">
        {HotdealList.map((list, key) => {
          const returnIndex = SiteInfo.findIndex(function (item) {
            return item.id === list.site_name;
          });
          return (
            <div className="card" key={key}>
              <div className="card-body">
                <h5 className="card-text text-break text-break-line-3">
                  {list.title}
                </h5>
                <p className="card-text">[{SiteInfo[returnIndex].site_name}]</p>
                <a
                  href={SiteInfo[returnIndex].domain + list.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  바로가기
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
