// to add hover effect for menu items
document.querySelectorAll("#nav_content li a").forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.color = "#ffffff";
        
    });
    item.addEventListener("mouseout", () => {
        item.style.color = "black";
    });
});

