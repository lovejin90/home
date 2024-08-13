import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { ListTable } from "./Data";

const MenuSetting = () => {
  return (
    <React.Fragment>
      <div className="page-content"></div>

      <Card>
        <CardHeader>
          <h5 className="card-title mb-0">메뉴</h5>
        </CardHeader>
        <CardBody>
          <ListTable />
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default MenuSetting;
