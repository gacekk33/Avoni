const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
    });
});

const newTabButton = document.querySelector(".new-tab");

newTabButton.addEventListener("click", () => {
    const newTab = document.createElement("div");
    newTab.classList.add("tab");
    newTab.textContent = "Nowa karta";

    newTab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        newTab.classList.add("active");
    });

    document.querySelector(".tabs").insertBefore(newTab, newTabButton);
});
