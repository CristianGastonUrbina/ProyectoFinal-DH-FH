import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import TypeCounts from './TypeCounts';
import TotalProducts from "./TotalProducts"
import Footer from './Footer';
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column bg-info">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <TypeCounts />
                    <TotalProducts />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;