import React from 'react';
import "./Suggestions.css"

const Suggestions = () => {
    return (
        <div>
            <div className="suggestions__container">
                <div className="suggestions__header">
                    <div>Suggestions For You</div>
                </div>
                <div className="suggestions__body">
                    <div className="suggestions__friends">
                        <img src='./images/pp1.png' alt='pic' className="suggestions__image"/>
                        <div className="suggestions__username">Ridwan</div>
                    </div>
                    <div className="suggestions__friends">
                        <img src='./images/pp2.png' alt='pic' className="suggestions__image"/>
                        <div className="suggestions__username">Babajide</div>
                    </div>
                    <div className="suggestions__friends">
                        <img src='./images/pp3.jpeg' alt='pic' className="suggestions__image"/>
                        <div className="suggestions__username">Amila</div>
                    </div>
                    <div className="suggestions__friends">
                        <img src='./images/pp4.jpeg' alt='pic' className="suggestions__image"/>
                        <div className="suggestions__username">Damilola</div>
                    </div>
                    <div className="suggestions__friends">
                        <img src='./images/pp3.jpeg' alt='pic' className="suggestions__image"/>
                        <div className="suggestions__username">Olofin</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Suggestions;






