// ES Moudule 模块引入方式
// CommonJs 模块引入规范
// CMD
// ADM

// webpack 模块打包工具
import Header from "./header.js";
import Sidebar from "./sidebar.js";
import Content from "./content.js";

//CMD
// const Header = require("./header.js");
// const Sidebar = require("./sidebar.js");
// const Content = require("./content.js");
// const dom = document.getElementById("root");

new Header();
new Sidebar();
new Content();