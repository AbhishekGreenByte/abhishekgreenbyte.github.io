import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const MonacoCodeEditor: React.FC = () => {
    const [code, setCode] = useState(`function helloWorld() {\n  console.log('Hello, World!');\n}`);
    const [language] = useState('javascript');

    const handleEditorChange = (value: string | undefined) => {
        setCode(value || '');
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };

    return (
        <div style={{width: '100%', margin: '20px auto'}}>
            {/* Header with language label and copy button */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                padding: '10px 15px',
                border: '1px solid #ddd',
                borderBottom: 'none'
            }}>
        <span style={{fontWeight: 'bold', fontSize: '14px'}}>
          {language.toUpperCase()}
        </span>
                <button
                    onClick={handleCopyCode}
                    style={{
                        backgroundColor: '#e0e0e0',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '5px 10px',
                        cursor: 'pointer',
                        fontSize: '12px'
                    }}>
                    Copy Code
                </button>
            </div>

            {/* Monaco Editor */}
            <div style={{
                border: '1px solid #ddd',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                overflow: 'hidden',
            }}>
                <Editor
                    height="60px"
                    defaultLanguage={language}
                    value={code}
                    theme="light"
                    onChange={handleEditorChange}
                    options={{domReadOnly:true, scrollBeyondLastLine: false}}
                />
            </div>
        </div>
    );
};

export default MonacoCodeEditor;
