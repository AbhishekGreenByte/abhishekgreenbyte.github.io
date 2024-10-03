import React from "react";
import NavBar from "../components/NavBar";

const Projects:React.FC = () => {
    return (
        <div>
            <NavBar active="projects"/>
            <div className="pt-20 bg-gray-50 w-full h-screen">
                <div className="w-full h-full">
                    Projects
                </div>
            </div>
        </div>
    )
}

export default Projects;