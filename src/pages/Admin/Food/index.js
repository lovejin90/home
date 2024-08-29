import React, {useEffect, useState} from "react";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import Pagination from "../../../components/Common/Pagination";
import {
    Card,
    CardBody,
    Col,
    Row,
    Container, Modal, CardHeader, CardText, CardImg, CardTitle,
} from "reactstrap";
import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear'; // 윤년 판단 플러그인
import 'dayjs/locale/ko';
import {Link} from "react-router-dom";
import axios from "axios";
import img2 from "../../../assets/images/small/img-2.jpg";
import img3 from "../../../assets/images/small/img-3.jpg";
import img5 from "../../../assets/images/small/img-5.jpg";
import {formatNumber} from "chart.js/helpers"; // 한국어 가져오기
dayjs.extend(isLeapYear); // 플러그인 등록
dayjs.locale('ko'); // 언어 등록

const Food = () => {

    const [List, setList] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [page, setPage] = useState(1);
    const [FoodData, setFoodData] = useState([
        {
            RCP_NM : '', //메뉴명
            RCP_PARTS_DTLS : '', //재료정보1
            CHNG_DT : '', //변경일자(YYYYMMDD)
            RCP_PAT2 : '', //요리종류(ex) 반찬, 국, 후식 등)
        }]
    )
    const [modal_fullscreen, setmodal_fullscreen] = useState(false);
    const [modal_scroll, setmodal_scroll] = useState(false);
    const [ModalTitle, setModalTitle] = useState('');
    const [ModalContent, setModalContent] = useState();
    const display_page = 10; //보여질 개수
    const m_img_arr = [
        'MANUAL_IMG01','MANUAL_IMG02','MANUAL_IMG03','MANUAL_IMG04','MANUAL_IMG05','MANUAL_IMG06','MANUAL_IMG07','MANUAL_IMG08','MANUAL_IMG09','MANUAL_IMG10',
        'MANUAL_IMG11','MANUAL_IMG12','MANUAL_IMG13','MANUAL_IMG14','MANUAL_IMG15','MANUAL_IMG16','MANUAL_IMG17','MANUAL_IMG18','MANUAL_IMG19','MANUAL_IMG20',
    ]
    const m_txt_arr = [
        'MANUAL01','MANUAL02','MANUAL03','MANUAL04','MANUAL05','MANUAL06','MANUAL07','MANUAL08','MANUAL09','MANUAL10',
        'MANUAL11','MANUAL12','MANUAL13','MANUAL14','MANUAL15','MANUAL16','MANUAL17','MANUAL18','MANUAL19','MANUAL20',
    ]

    const totalPage = Math.ceil(totalCount / display_page);
    const pageGroup = Math.ceil(page / display_page);
    const lastPage = pageGroup * display_page > totalPage ? totalPage : pageGroup * display_page;
    const firstPage = lastPage - (display_page - 1) <= 0 ? 1 : lastPage - (display_page - 1);

    const fetchList = (url,idx) => {
        axios
            .get("/food_api/" + url)
            .then((res) => {
                setTotalCount(res.COOKRCP01.total_count);
                setList(res.COOKRCP01.row);
            })
            .catch((error) => {
                console.log("Error :", error);
            });

    };

    const getFoodUrl = (d) => {
        let url = process.env.REACT_APP_FOOD_API_KEY+"/COOKRCP01/json/"+page+"/"+display_page+"/";
        Object.entries(d).map((k,v)=> {
            if(k[1]) {
                if (v > 0) {
                    url += "&";
                }
                url += encodeURIComponent(k[0]) + "=" + encodeURIComponent(k[1]);
            }
        });
        return url;
    }
    const Colums = [

        {
            name: "메뉴명",
            cls: "col",
            dataSoft: "url",
        },
        {
            name: "종류",
            cls: "col",
            dataSoft: "active",
        },
    ];

    const SearchList = () =>{
        let copiedItems = [...FoodData];
        copiedItems[0].RCP_NM = document.getElementById('RCP_NM').value;
        setFoodData(copiedItems);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            let copiedItems = [...FoodData];
            copiedItems[0].RCP_NM = document.getElementById('RCP_NM').value;
            setFoodData(copiedItems);
        }
    };
    
    useEffect(() => {
        let url = getFoodUrl(FoodData[0]);
        console.log(url);
        fetchList(url,0);
    }, [FoodData]);

    function tog_fullscreen(idx) {
        let title = document.getElementById("item-title-"+idx).value;
        let content = document.getElementById("model-data-"+idx).innerHTML;
        setModalTitle(title)
        setModalContent(content)
        setmodal_fullscreen(!modal_fullscreen);
    }
    function tog_scroll(idx) {
        if (idx) {
        let title = document.getElementById("item-title-"+idx).value;
        let content = document.getElementById("model-data-"+idx).innerHTML;
        setModalTitle(title);
        setModalContent(content);
        }        setmodal_scroll(!modal_scroll);
    }

    return (
        <React.Fragment>
            <div className="page-content"></div>
            <Container fluid={true}>
                <Row>
                    <Col className="col-md-6">
                        <Breadcrumbs title="메인" breadcrumbItem="레시피" />
                        <Card>
                            <CardBody>
                                <Row className="mb-3">
                                    <label
                                        htmlFor="example-week-input"
                                        className="col-md-2 col-form-label"
                                    >
                                        검색어
                                    </label>
                                    <div className="col-md-5">
                                        <input
                                            className="form-control"
                                            type="search"
                                            defaultValue=""
                                            placeholder={"ex) 김치찌개"}
                                            id={"RCP_NM"}
                                            onKeyDown={handleKeyDown}
                                            //onChange={ChangeList}
                                        />

                                    </div>
                                    <div className="col-md-5">
                                        <button type="button" className="btn btn-secondary" onClick={SearchList}>조회</button>

                                    </div>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-6">
                        <Card>
                            <CardBody>
                                <p>총 개수 : {formatNumber(totalCount)}</p>
                                <div className="table-responsive table-card mt-3 mb-1">
                                    <div className="col-md-12">
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
                                            {List.map((row) => {
                                                return (
                                                    <tr key={row.RCP_SEQ}>
                                                        <td className="name">
                                                            <input type={"hidden"} id={"item-title-"+row.RCP_SEQ} value={row.RCP_NM}/>
                                                            <Link
                                                                onClick={(e) => {
                                                                    //tog_fullscreen(row.RCP_SEQ);
                                                                    tog_scroll(row.RCP_SEQ);
                                                                }}
                                                            >
                                                                {row.RCP_NM}
                                                            </Link>
                                                           <div id={"model-data-"+row.RCP_SEQ} style={{display:"none"}}>
                                                                <Row>
                                                                    <Col lg={12}>
                                                                        <Card outline className="border">
                                                                            <CardHeader className="bg-transparent">
                                                                                <h5 className="my-0 ">
                                                                                    재료
                                                                                </h5>
                                                                            </CardHeader>
                                                                            <CardBody>
                                                                                <CardText>
                                                                                    {row.RCP_PARTS_DTLS}
                                                                                </CardText>
                                                                            </CardBody>
                                                                        </Card>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col lg={12}>
                                                                        <table
                                                                            className="table align-middle table-nowrap"
                                                                            id="customerTable">
                                                                            <thead className="table-light">
                                                                                <tr>
                                                                                    <th>이름</th>
                                                                                    <th>값</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {
                                                                                    (row.INFO_WGT) ?
                                                                                <tr>
                                                                                    <td>중량</td>
                                                                                    <td>{row.INFO_WGT}</td>
                                                                                </tr>
                                                                                : ""
                                                                                }
                                                                                {
                                                                                    (row.INFO_ENG) ?
                                                                                <tr>
                                                                                    <td>열량</td>
                                                                                    <td>{row.INFO_ENG}</td>
                                                                                </tr>
                                                                                    : ""
                                                                                }
                                                                                {
                                                                                (row.INFO_CAR) ?
                                                                                <tr>
                                                                                    <td>탄수화물</td>
                                                                                    <td>{row.INFO_CAR}</td>
                                                                                </tr>
                                                                                    : ""
                                                                                }
                                                                                {
                                                                                (row.INFO_PRO) ?
                                                                                <tr>
                                                                                    <td>단백질</td>
                                                                                    <td>{row.INFO_PRO}</td>
                                                                                </tr>
                                                                                    : ""
                                                                                }
                                                                                {
                                                                                (row.INFO_FAT) ?
                                                                                <tr>
                                                                                    <td>지방</td>
                                                                                    <td>{row.INFO_FAT}</td>
                                                                                </tr>
                                                                                    : ""
                                                                                }
                                                                                {
                                                                                (row.INFO_NA) ?
                                                                                <tr>
                                                                                    <td>나트륨</td>
                                                                                    <td>{row.INFO_NA}</td>
                                                                                </tr>
                                                                                    : ""
                                                                                }
                                                                            </tbody>
                                                                        </table>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col lg={12}>
                                                                        <Card outline className="border">
                                                                        <img src={row.ATT_FILE_NO_MK ? row.ATT_FILE_NO_MK : row.ATT_FILE_NO_MAIN} className="img-fluid" alt="Responsive"/>
                                                                        </Card>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col lg={12}>
                                                                        {
                                                                            m_txt_arr.map((v,k) => {
                                                                                return (
                                                                                    <div key={k}>
                                                                                    {
                                                                                            (row[v]) ?
                                                                                            <Card>
                                                                                                <Row className="no-gutters align-items-center">
                                                                                                    {
                                                                                                        row[m_img_arr[k]] ?
                                                                                                            <Col md={4}>
                                                                                                                <CardImg className="img-fluid" src={row[m_img_arr[k]]} alt="Upzet" />
                                                                                                            </Col>
                                                                                                            : <Col md={4}></Col>
                                                                                                    }

                                                                                                    <Col md={8}>
                                                                                                        <CardBody>
                                                                                                            <CardText>
                                                                                                                {row[v]}
                                                                                                            </CardText>
                                                                                                        </CardBody>
                                                                                                    </Col>
                                                                                                </Row>

                                                                                            </Card>
                                                                                        :''
                                                                                    }
                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                    </Col>
                                                                </Row>
                                                           </div>
                                                        </td>
                                                        <td className="name">{row.RCP_PAT2}</td>
                                                    </tr>
                                                )
                                            })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row style={{paddingBottom:'100px'}}>
                    <Col lg={6}>

                    </Col>
                </Row>
                <Modal
                    isOpen={modal_scroll}
                    toggle={() => {
                        tog_scroll();
                    }}
                    scrollable={true}
                >
                    <div className="modal-header">
                        <h5 className="modal-title mt-0">
                            {ModalTitle}
                        </h5>
                        <button
                            type="button"
                            onClick={() => {
                                setmodal_scroll(false);
                            }}
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div dangerouslySetInnerHTML={{__html: ModalContent}}></div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => {
                                    setmodal_scroll(false);
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </Modal>

            </Container>

        </React.Fragment>
    );
};

export default Food;
