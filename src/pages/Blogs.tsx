import React from "react";
import NavBar from "../components/NavBar";

const Blogs:React.FC = () => {
    return (
        <div>
            <NavBar active="blogs"/>
            <div className="pt-20 bg-gray-50 w-full h-screen">
                <div className="w-full h-full">
                    Blogs
                </div>
            </div>
        </div>
    )
}

export default Blogs;