document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const tabContent = document.getElementById("tab-content");

const tabContentData = {
    tab1: '<h3>Content for Tab 1</h3>',
    tab2: '<h3>Content for Tab 2</h3>',
    tab3: '<h3>Content for Tab 3</h3>'
};

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => tab.classList.remove("active"));
        
        tab.classList.add("active");
        const tabName = tab.getAttribute("data-tab");
        tabContent.innerHTML = tabContentData[tabName];
       });
    });
});

  