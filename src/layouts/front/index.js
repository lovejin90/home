import React, { useCallback, useEffect } from 'react';
import PropTypes from "prop-types";
import withRouter from "../../components/Common/withRouter";

// import Components
import Header from './Header';
import Footer from './Footer';

const Layout = props => {

  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <Header/>
        <div className="main-content">{props.children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = {
};

export default  withRouter(Layout);
