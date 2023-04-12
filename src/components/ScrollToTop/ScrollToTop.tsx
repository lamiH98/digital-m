import React, { useState, useEffect } from "react";
import { HiOutlineArrowCircleUp } from "react-icons/hi";

import "./style/ScrollToTop.css";

const ScrollToTop: React.FC = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (

        <div className="top-to-btm">
            {showTopBtn && (
                <HiOutlineArrowCircleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}
        </div>
    );
};
export default ScrollToTop;