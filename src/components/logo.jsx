import React from "react";

function Logo() {
    return (
        <>
            <div
                className={`container-fluid`}
                id="logo"
            >
                <p className="logo-top">Johannys Unisex</p>
                <img
                    src="/dr-flag.png"
                    alt="Dominican Republic Flag"
                    id="dr-flag"
                />
                <p className="logo-bottom">est:1994</p>
            </div>
        </>
    );
}

export default Logo;
