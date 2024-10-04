import { IMonacoEditor } from "../utils/models";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const MonacoEditor: React.FC<IMonacoEditor> = (props) => {
    const [code, setCode] = useState(props.code);
    const [language] = useState(props.language);
    const [copyCode, setCopyCode] = useState("Copy code");
    const [fontSize, setFontSize] = useState(14); // Initial font size

    const handleCopyCode = () => {
        navigator.clipboard.writeText(code);
        if (copyCode === "Copy code") {
            setCopyCode("Copied!");
            setTimeout(() => { setCopyCode("Copy code") }, 2000);
        }
    };

    const increaseFontSize = () => setFontSize(fontSize + 1);
    const decreaseFontSize = () => setFontSize(fontSize > 1 ? fontSize - 1 : 1); // Prevent font size from going below 1

    return (
        <div className="w-full h-full">
            <div className="w-full h-full border rounded-md relative">
                <div className="flex items-center justify-between px-2 bg-gray-200 w-full h-10 shadow absolute top-0 z-10">
                    <div className="flex items-center space-x-2">
                        <div>{language}</div>
                        {/* Add "+" and "-" buttons to change font size */}
                        <button onClick={increaseFontSize}
                                className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-400 text-xl">+
                        </button>
                        <button onClick={decreaseFontSize}
                                className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-400 text-xl">-
                        </button>
                    </div>
                    <div>
                        <button
                            onClick={handleCopyCode}
                            className="cursor-pointer"
                        >
                            {copyCode}
                        </button>
                    </div>
                </div>
                <div className="w-full h-full pt-10 bg-primary">
                    <Editor
                        height="100%"
                        defaultLanguage={language}
                        value={code}
                        theme="light"
                        onChange={handleCopyCode}
                        options={{
                            domReadOnly: true,
                            readOnly: true,
                            scrollBeyondLastLine: false,
                            fontSize: fontSize,
                            minimap: { enabled: false },
                            tabSize: 2,
                            insertSpaces: true,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default MonacoEditor;
