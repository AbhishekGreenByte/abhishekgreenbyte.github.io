import {FaUser} from "react-icons/fa";
import React, {useEffect, useState} from "react";

const NameComponent = () => {
    const [typedName, setTypedName] = useState("");
    const fullName = "Abhishek Sahu";
    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullName.length) {
                setTypedName(fullName.slice(0, currentIndex));
                currentIndex++;
            } else {
                currentIndex = 0;
            }
        }, 200);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="text-center ">
            <div className="relative inline-block">
                <img
                    src="https://images.unsplash.com/photo-1629747490241-624f07d70e1e?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Profile"
                    className="rounded-full w-48 h-48 lg:w-56 lg:h-56 object-cover border-4 border-primary transition-transform duration-300 transform hover:scale-105"
                />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-white">
                {typedName}
                <span className="animate-pulse">|</span>
            </h2>
            <p className="mt-2 text-xl font-bold text-yellow-200">I am a Developer</p>
        </div>
    )
}

export default NameComponent;