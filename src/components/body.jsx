import React from "react";
import Header from "./header";
import Scrolltext1 from "./scrolltext1";
const Offcanvas = React.lazy(() => import('./offcanvas'));

function Body() {
    return (
        <>
            <Scrolltext1 />

            <div className="hero"
            >
                <Header />
                <Offcanvas />
            </div>


        </>
    );
}

export default Body;
