import React from "react";
import withRouter from "../components/Common/withRouter";

const Layout = (props) => {

    return (
        <React.Fragment>
            <div id="layout-wrapper">
                <div>{props.children}</div>
            </div>
        </React.Fragment>
    );
};
export default withRouter(Layout);