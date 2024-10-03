import {IKVPair, IPage} from "./models";
import linksJson from '../resources/links.json';
import {BsBook, BsCodeSlash, BsPerson} from "react-icons/bs";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Projects from "../pages/Projects";
import Me from "../pages/Me";

class Config {

    private static _instance: Config;
    private links : Map<string,string>;
    private components: Map<string, IPage> = new Map([
        ['default', {label: 'Default', router: '/', showMenu: false, component: Home}],
        ['me', {label: 'me', router: '/me', showMenu: true, component: Me, icon: BsPerson}],
        ['blogs', {label: 'blogs', router: '/blogs', showMenu: true, component: Blogs, icon: BsBook}],
        ['projects', {label: 'projects', router: '/projects', showMenu: true, component: Projects, icon: BsCodeSlash}]
    ]);
    private defaultRoute = "/";

    static getInstance(): Config {
        if (!Config._instance) {
            Config._instance = new Config();
        }
        return Config._instance;
    }

    private constructor() {
        this.links = this.loadKVPair(linksJson);
    }

    private loadKVPair = (json: Array<IKVPair>) => {
        let kvPair = new Map<string, string>();
        json.forEach(item => {
            kvPair.set(item.key, item.value);
        });
        return kvPair;
    }

    public getLink = (name:string) => {
        return this.links.get(name) || "";
    };

    public getDefaultRoute = () => {
        return this.defaultRoute;
    }

    public getMenuItems() {
        //Return all value in IPage of map where showMenu is true
        return Array.from(this.components.values()).filter(item => item.showMenu);
    }

    public getAllPages() {
        return Array.from(this.components.values());
    }

}

export const config = Config.getInstance();