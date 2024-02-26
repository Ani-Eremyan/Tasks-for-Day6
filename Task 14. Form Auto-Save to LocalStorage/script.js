document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");
    const formElements = form.elements;
    
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.type !== "submit") {
            const savedValue = localStorage.getItem(element.name);
            if (savedValue) {
                element.value = savedValue;
            }
        }
    }

    let timeout;
    form.addEventListener("input", function(event) {
        clearTimeout(timeout);
        const element = event.target;
        if (element.type !== "submit") {
            timeout = setTimeout(function() {
                localStorage.setItem(element.name, element.value);
            }, 500);
        }
    });
    form.addEventListener("submit", function() {
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            if (element.type !== "submit") {
                localStorage.setItem(element.name, element.value);
            }
        }
    });
});