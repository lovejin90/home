import React, { useState, useEffect } from "react";
import axios from "axios";
import {ToggleButton} from "./ToggleButton";

const Data = () => {
  const [List, setList] = useState([]);
  const fetchList = () => {
    axios
      .get("/server/menu/getList")
      .then((response) => {
        setList(response);
      })
      .catch((error) => {
        console.log("Error while fetching books:", error);
      });
  };

  useEffect(() => {
    fetchList();
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
      name: "타이틀",
      cls: "col",
      dataSoft: "name",
    },
    {
      name: "URL",
      cls: "col",
      dataSoft: "url",
    },
    {
      name: "노출여부",
      cls: "sort",
      dataSoft: "show",
    },
    {
      name: "편집",
      cls: "col",
      dataSoft: "active",
    },
  ];

  function setStatus() {
    console.log('test1111');
  }

  return (
    <React.Fragment>
      <div className="table-responsive table-card mt-3 mb-1">
        <table className="table align-middle table-nowrap" id="customerTable">
          <thead className="table-light">
            <tr>
              {Colums.map((crow, key) => {
                return (
                  <th key={key} className="{crow.cls}" data-sort="{crow.dataSoft}">
                    {crow.name}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="list form-check-all">
            {List.map((row, key) => {
              return (
                <tr key={row.idx}>
                  <th scope="row">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkAll"
                        value="option2"
                      />
                      {row.idx}
                    </div>
                  </th>
                  <td className="name">{row.name}</td>
                  <td className="url">{row.url}</td>
                  <td className="active-yn">

                    <div className="edit">
                        <ToggleButton id={row.idx} active_yn={row.active_yn}/>
                        </div>
                        </td>

                        <td>
                        <div className="d-flex gap-2">
                        <div className="edit">
                        <button
                        className="btn btn-sm btn-success edit-item-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#showModal"
                        >
                        Edit
                        </button>
                        </div>
                        <div className="remove">
                        <button
                        className="btn btn-sm btn-danger remove-item-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteRecordModal"
                        >
                        Remove
                        </button>
                        </div>
                        </div>
                        </td>
                        </tr>
                        );
                      })}
          </tbody>
        </table>
        <div className="noresult" style={{display: "none"}}>
          <div className="text-center">
            <lord-icon
                src="https://cdn.lordicon.com/msoeawqm.json"
                trigger="loop"
                colors="primary:#121331,secondary:#08a88a"
              style={{ width: "75px", height: "75px" }}
            ></lord-icon>
            <h5 className="mt-2">Sorry! No Result Found</h5>
            <p className="text-muted mb-0">
              We've searched more than 150+ Orders We did not find any orders
              for you search.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { Data };
