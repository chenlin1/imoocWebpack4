function Header() {
    const dom = document.getElementById("root");
    const header = document.createElement("div");
    header.innerHTML = "header";
    dom.append(header);
}
export default Header;

// CMD
// module.exports = Header;