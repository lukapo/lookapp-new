import { useState } from "react";
const Navigation = () => {
    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
    const [navigationClass, setNavigationClass] = useState("navigation-hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setNavigationClass("navigation-shown");
        } else {
            setBurgerClass("burger-bar unclicked");
            setNavigationClass("navigation-hidden");
        }

        setIsMenuClicked(!isMenuClicked);
    };

    return (
        <div className="navigation-and-burger">
           
            <div className={navigationClass}>
                <nav >
                    <ul>
                        <li>
                            <a href="#motivation">Početna</a>
                        </li>
                        <li>
                            <a href="#listing">Ponuda</a>
                        </li>
                        <li>
                            <a href="#about">O nama</a>
                        </li>
                        <li>
                            <a href="#contact">Kontakt</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="burger-menu" onClick={updateMenu}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
        </div>
    );
};

export default Navigation;
