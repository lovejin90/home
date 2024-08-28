import React, {useEffect, useState} from "react";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import {
    Card,
    CardBody,
    Col,
    Row,
    Container,
} from "reactstrap";
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear'; // 윤년 판단 플러그인
import 'dayjs/locale/ko';
import {Link} from "react-router-dom";
import axios from "axios"; // 한국어 가져오기
dayjs.extend(isLeapYear); // 플러그인 등록
dayjs.locale('ko'); // 언어 등록

const Lh = () => {
    const [StartDate, setStartDate] = useState('')
    const [EndDate, setEndDate] = useState('')
    const [List, setList] = useState([]);
    const [LHData, setLHData] = useState([
        {
            serviceKey: process.env.REACT_APP_LH_API_KEY,
            PG_SZ: "50", //개수
            PAGE: "1", //페이지
            CNP_CD: "",
            UPP_AIS_TP_CD: "06", //공고번호?
            PAN_SS: "", //상태
            PAN_NT_ST_DT: "2024.08.01", //시작일
            CLSG_DT: "2024.08.30",  //종료일
            PAN_NM : "",
        }]
    )

    const Code = {
        'LocationCode' : {
          '11': '서울특별시',
          '26': '부산광역시',
          '27': '대구광역시',
          '28': '인천광역시',
          '29': '광주광역시',
          '30': '대전광역시',
          '31': '울산광역시',
          '36110': '세종특별자치시',
          '41': '경기도',
          '42': '강원도',
          '43': '충청북도',
          '44': '충청남도',
          '52': '전북특별자치도',
          '46': '전라남도',
          '47': '경상북도',
          '48': '경상남도',
          '50': '제주특별자치도',
        }
        ,StatusCode : {
          '공고중':'공고중',
          '접수중':'접수중',
          '접수마감':'접수마감',
          '상담요청':'상담요청',
          '정정공고중':'정정공고중',
        }
        ,CategoryCode : {
          '01' : '토지',
          '05' : '분양주택',
          '06' : '임대주택',
          '13' : '주거복지',
          '22' : '상가',
          '39' : '신혼희망타운',
        }
    }

    useEffect(() => {
        setStartDate(dayjs(new Date()).format('YYYY-MM-DD'));
        setEndDate(dayjs(new Date()).add(1, 'month').format('YYYY-MM-DD'));
    }, []);


    const ChangeList = (e) => {
        let copiedItems = [...LHData];
        copiedItems[0][e.target.id] = e.target.value;
        setLHData(copiedItems);
    }
    const SearchList = () =>{
        let copiedItems = [...LHData];
        copiedItems[0].PAN_NM = document.getElementById('PAN_NM').value;
        setLHData(copiedItems);
        console.log(LHData);
    }

    const fetchList = (url,idx) => {
        axios
            .get("/lh_api/lhLeaseNoticeInfo1" + url)
            .then((res) => {
                setList([res[1]]);
            })
            .catch((error) => {
                console.log("Error :", error);
            });
    };

    const getLhUrl = (d) => {
        let url = "";
        Object.entries(d).map((k,v)=> {
            if (v === 0) {
                url += "?";
                url += encodeURIComponent(k[0]) + "=" + k[1];
            } else {
                url += "&";
                url += encodeURIComponent(k[0]) + "=" + encodeURIComponent(k[1]);
            }
        });
        return url;
    }
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
    useEffect(() => {
        LHData.map((list,idx) => {
            fetchList(getLhUrl(list),idx);
        });
    }, [LHData]);

    return (
    <React.Fragment>
      <div className="page-content"></div>
        <Container fluid={true}>
            <Breadcrumbs title="메인" breadcrumbItem="LH공고" />
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <Row className="mb-3">
                                <label
                                    htmlFor="example-week-input"
                                    className="col-md-1 col-form-label"
                                >
                                    기간
                                </label>
                                <div className="col-md-2">
                                    <input
                                        className="form-control"
                                        type="date"
                                        defaultValue={StartDate}
                                        id="PAN_NT_ST_DT"
                                        name="StartDate"
                                        onChange={ChangeList}
                                    />
                                </div>
                                ~
                                <div className="col-md-2">
                                    <input
                                        className="form-control"
                                        type="date"
                                        defaultValue={EndDate}
                                        id="CLSG_DT"
                                        name="EndDate"
                                        onChange={ChangeList}
                                    />
                                </div>
                            </Row>
                            <Row className="mb-3">
                                <label
                                    htmlFor="example-week-input"
                                    className="col-md-1 col-form-label"
                                >
                                    상태
                                </label>
                                <div className="col-md-2">
                                    <select
                                        className="form-select"
                                        id="PAN_SS"
                                        onChange={ChangeList}
                                    >
                                        <option value={""}>전체</option>
                                        {
                                            Object.entries(Code.StatusCode).map((v, k) => (
                                                <option key={k} value={v[0]}>{v[1]}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </Row>
                            <Row className="mb-3">
                                <label
                                    htmlFor="example-week-input"
                                    className="col-md-1 col-form-label"
                                >
                                    지역
                                </label>
                                <div className="col-md-2">
                                    <select
                                        className="form-select"
                                        id="CNP_CD"
                                        onChange={ChangeList}
                                    >
                                        <option value={""}>전체</option>
                                        {
                                            Object.entries(Code.LocationCode).map((v, k) => (
                                                <option key={k} value={v[0]}>{v[1]}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </Row>
                            <Row className="mb-3">
                                <label
                                    htmlFor="example-week-input"
                                    className="col-md-1 col-form-label"
                                >
                                    검색어
                                </label>
                                <div className="col-md-4">
                                    <input
                                        className="form-control"
                                        type="search"
                                        defaultValue=""
                                        placeholder={"검색어"}
                                        id={"PAN_NM"}
                                        //onChange={ChangeList}
                                    />
                                </div>
                            </Row>
                            <Row className="mb-3">
                                <div className="col-md-12">
                                    <button type="button" className="btn btn-secondary" onClick={SearchList}>조회</button>
                                </div>
                            </Row>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <CardBody>

                            <div className="table-responsive table-card mt-3 mb-1">
                                {List.map((item, k) => {
                                    const data = item.dsList;
                                    return (
                                        <table className="table align-middle table-nowrap" id="customerTable" key={k}>
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
                                            {
                                                data.map((row, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <th scope="row">{row.RNUM}</th>
                                                            <td className="name">{row.UPP_AIS_TP_NM}</td>
                                                            <td className="name">{row.AIS_TP_CD_NM}</td>
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
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    );
                                })}
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>

    </React.Fragment>
  );
};

export default Lh;
