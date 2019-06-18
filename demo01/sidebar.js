function Sidebar() {
    const dom = document.getElementById("root");
    const sidebar = document.createElement("div");
    sidebar.innerHTML = "sidebar";
    dom.append(sidebar);
}
export default Sidebar;


// CMD
// module.exports = Sidebar;