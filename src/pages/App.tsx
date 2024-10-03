import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import NavBar from "../components/NavBar";
import {config} from "../utils/Config";

const App:React.FC = () => {

    return (
        <Router>
            <Routes>
                {
                    config.getAllPages().map((item, index) => {
                        const Component = item.component;
                        return (
                            <Route
                                key={index}
                                path={item.router}
                                element={Component ? <Component /> : <div>Component not found</div>}
                            />
                        );
                    })
                }
            </Routes>
        </Router>
    )
}

export default App;