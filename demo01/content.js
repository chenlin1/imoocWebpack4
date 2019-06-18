function Content() {
    const dom = document.getElementById("root");
    const content = document.createElement("div");
    content.innerHTML = "content";
    dom.append(content)
}
export default Content;


// CMD
// module.exports = Content;