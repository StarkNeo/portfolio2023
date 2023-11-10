import React from "react";
import './main.css';
import { Articles } from "../../components/Articles/Articles";
export const Main = () => {

    return (
        <main id="body-home">
            <Articles />
            <div id="div-values">
                <p className="quote">
                    Knowledge
                </p>
                <p className="quote">
                    Confidence
                </p>
                <p className="quote">
                    Enthusiasm
                </p>
                <p className="quote">
                    Maturity
                </p>
                <p className="quote">
                    Proud
                </p>
            </div>

        </main>

    )
}