import React, { useState, useEffect } from "react";
import axios from "axios";
const ToggleButton = (prop) => {
  const [cls, setCls] = useState("btn btn-sm btn-danger");
  const [txt, setTxt] = useState("미노출");
  const [yn, setYn] = useState("N");
  function setStatus(idx, yn) {
    if (idx && yn) {
      axios
        .post("/api/menu/updateStatus", {
          id: idx,
          active_yn: yn,
        })
        .then((res) => {
          if (yn == "Y") {
            setCls("btn btn-sm btn-success");
            setTxt("노출");
            setYn("N");
          } else {
            setCls("btn btn-sm btn-danger");
            setTxt("미노출");
            setYn("Y");
          }
        })
        .catch((error) => {
          console.log("Error while fetching books:", error);
        });
    }
  }
  useEffect(() => {
    if (prop.active_yn == "Y") {
      setCls("btn btn-sm btn-success");
      setTxt("노출");
      setYn("N");
    }
  }, []);

  return (
    <React.Fragment>
      {
        <button
          className={cls}
          data-bs-toggle="modal"
          data-bs-target="#showModal"
          onClick={() => setStatus(prop.id, yn)}
        >
          {txt}
        </button>
      }
    </React.Fragment>
  );
};

export { ToggleButton };
