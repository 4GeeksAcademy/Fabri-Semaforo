import React, { useState } from "react";
import "../../styles/StyleTrafficLight.css";


const TrafficLight = () => {


    const [color, setColor] = useState("red");




    const isPurple = color === "purple";




    const handleCycle = () => {
        if (isPurple) {
            setColor("red");
            return;
        }


        if (color === "red") setColor("green");
        else if (color === "green") setColor("yellow");
        else if (color === "yellow") setColor("red");
    };




    const handlePurple = () => {
        setColor("purple");
    };


    return (
        <div className="page">
            <div className="traffic-wrapper">


                <div className="pole" />




                <div className={`traffic-container ${isPurple ? "traffic-purple" : ""}`}>


                    <div
                        className={`light ${isPurple ? "purple" : "red"} ${color === "red" || isPurple ? "glow" : ""
                            }`}
                        onClick={() => setColor("red")}
                    ></div>




                    <div
                        className={`light ${isPurple ? "purple" : "yellow"} ${color === "yellow" || isPurple ? "glow" : ""
                            }`}
                        onClick={() => setColor("yellow")}
                    ></div>




                    <div
                        className={`light ${isPurple ? "purple" : "green"} ${color === "green" || isPurple ? "glow" : ""
                            }`}
                        onClick={() => setColor("green")}
                    ></div>
                </div>




                <div className="buttons">
                    <button className="btn-control" onClick={handleCycle}>
                        Alternar
                    </button>


                    <button className="btn-control btn-purple" onClick={handlePurple}>
                        Púrpura
                    </button>


                </div>
            </div>
        </div>
    );
};


export default TrafficLight;


