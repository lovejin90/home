import React, { useState } from "react";
import axios from "axios";
const ToggleButton = (prop) => {
  const [cls, setCls] = useState((prop.active_yn === "Y") ? "btn btn-sm btn-success" : "btn btn-sm btn-danger");
  const [txt, setTxt] = useState((prop.active_yn === "Y") ? "노출" : "미노출");
  const [yn, setYn] = useState((prop.active_yn === "Y") ? "N" : "Y");
  function setStatus(idx, yn) {
    if (idx && yn) {
      axios
        .post("/api/menu/updateStatus", {
          id: idx,
          active_yn: yn,
        })
        .then((res) => {
          if (yn === "Y") {
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
