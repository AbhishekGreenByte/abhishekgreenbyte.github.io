import {IconType} from "react-icons";
import React from "react";
import exp from "node:constants";

export interface IKVPair {
    key: string;
    value: string;
}

export interface IPage {
    label: string,
    router: string,
    showMenu: boolean,
    component: React.ComponentType
    icon?: IconType
}

export interface INavBarProps {
    active?: string
}

export interface IMonacoEditor{
    code: string,
    language: string
}

export interface ICodeBlock{
    name:string,
    language:string,
    code:string
}