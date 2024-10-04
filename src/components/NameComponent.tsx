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
        <div className="text-center lg:text-left">
            <div className="relative inline-block">
                <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                    alt="Profile"
                    className="rounded-full w-48 h-48 object-cover border-4 border-blue-500 transition-transform duration-300 transform hover:scale-105"
                />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-primary">
                {typedName}
                <span className="animate-pulse">|</span>
            </h2>
            <p className="mt-2 text-xl text-gray-600">I am a Developer</p>
        </div>
    )
}

export default NameComponent;