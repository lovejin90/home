import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToggleButton } from "./ToggleButton";

const Data = () => {
  const [List, setList] = useState([]);

  const fetchList = (url) => {
    axios
      .get("/lh_api/lhLeaseNoticeInfo1" + url)
      .then((res) => {
        setList([...List, res[1]]);
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  };

  useEffect(() => {
    let LHData = [
      {
        serviceKey: process.env.REACT_APP_LH_API_KEY,
        PG_SZ: "100",
        PAGE: "1",
        //CNP_CD: "11",
        UPP_AIS_TP_CD: "06",
        PAN_SS: "공고중",
        PAN_NT_ST_DT: "2024.08.01",
        CLSG_DT: "2024.08.30",
      },
      {
        serviceKey: process.env.REACT_APP_LH_API_KEY,
        PG_SZ: "100",
        PAGE: "1",
        //CNP_CD: "11",
        UPP_AIS_TP_CD: "06",
        PAN_SS: "접수중",
        PAN_NT_ST_DT: "2024.08.01",
        CLSG_DT: "2024.08.30",
      },
    ];

    let url = "";
    LHData.map((list, idx) => {
      url = "";
      Object.entries(list).map((k, v) => {
        if (v === 0) {
          url += "?";
          url += encodeURIComponent(k[0]) + "=" + k[1];
        } else {
          url += "&";
          url += encodeURIComponent(k[0]) + "=" + encodeURIComponent(k[1]);
        }
      });
      fetchList(url);
    });
  }, []);
  List.map((list, key) => {
    return <h1>{list.name}</h1>;
  });

  const Colums = [
    {
      name: "No",
      cls: "col",
      dataSoft: "no",
    },
    {
      name: "공고유형",
      cls: "col",
      dataSoft: "name",
    },
    {
      name: "공고세부유형",
      cls: "col",
      dataSoft: "url",
    },
    {
      name: "공고명",
      cls: "sort",
      dataSoft: "show",
    },
    {
      name: "지역명",
      cls: "col",
      dataSoft: "active",
    },
    {
      name: "공고상태",
      cls: "col",
      dataSoft: "active",
    },
    {
      name: "전체조회건수",
      cls: "col",
      dataSoft: "active",
    },
    {
      name: "공고상세URL",
      cls: "col",
      dataSoft: "active",
    },
  ];

  return (
    <React.Fragment>
      <div className="table-responsive table-card mt-3 mb-1">
        <table className="table align-middle table-nowrap" id="customerTable">
          <thead className="table-light">
            <tr>
              {Colums.map((crow, key) => {
                return (
                  <th
                    key={key}
                    className="{crow.cls}"
                    data-sort="{crow.dataSoft}"
                  >
                    {crow.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="list form-check-all">
            {List.map((item, key) => {
              item.dsList.map((row, i) => {
                return (
                  <tr key={row.RNUM}>
                    <th scope="row">{row.RNUM}</th>
                    <td className="name">{row.name}</td>
                    <td className="name">{row.UPP_AIS_TP_NM}</td>
                    <td className="name">{row.PAN_NM}</td>
                    <td className="name">{row.CNP_CD_NM}</td>
                    <td className="name">{row.PAN_SS}</td>
                    <td className="name">{row.ALL_CNT}</td>
                    <td className="name">
                      <Link to={row.DTL_URL} target="_blank">
                        바로가기
                      </Link>
                    </td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export { Data };
