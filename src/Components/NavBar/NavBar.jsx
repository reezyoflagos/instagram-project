import React from 'react';
import "./NavBar.css";


const NavBar = () => {
    return (
        <div>
            <div className="navbar__barContent">
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <img src="./images/logoinsta.png" alt="Instagram" width="105px" />
                    </div>
                    <div className="navbar__search">
                        <input type="text" className="navbar__searchBar" placeholder="Search" />
                    </div>
                    <div className="navbar__icons">
                        <img src="./images/home.svg" alt="Home" width="25px" className="navbar__img" />
                        <img src="./images/message.svg" alt="Direct Messages" width="25px" className="navbar__img" />
                        <img src="./images/find.svg" alt="Explore" width="25px" className="navbar__img" />
                        <img src="./images/love.svg" alt="Activity" width="25px" className="navbar__img" />
                        <img src="./images/dp6.png" alt="Profile" className="navbar__img" style={{"maxWidth":"25px","maxHeight":"25px"}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;







