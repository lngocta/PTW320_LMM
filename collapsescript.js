function toggleNav() {
    var nav = document.getElementById("navbar");
    var body = document.body;

    if (nav.style.width === "0px" || nav.style.width === "") {
        nav.style.width = "200px";
        body.classList.remove("collapsed");
    } else {
        nav.style.width = "0";
        body.classList.add("collapsed");
    }
}
