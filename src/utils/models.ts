import {IconType} from "react-icons";
import React from "react";

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