const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
    });
});

const newTabButton = document.querySelector(".new-tab");

newTabButton.addEventListener("click", () => {
    const newTab = document.createElement("div");
    newTab.classList.add("tab");

    newTab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        newTab.classList.add("active");
    });

    newTab.textContent = "Nowa karta";

    document.querySelector(".tabs").insertBefore(newTab, newTabButton);
});
