document.addEventListener("DOMContentLoaded", () => {
    
    // Feature 1: Alert Action on Explore Button Click
    const ctaButton = document.getElementById("cta-btn");
    if (ctaButton) {
        ctaButton.addEventListener("click", () => {
            alert("Welcome! Feel at Home. You can now explore all parts of this website...");
        });
    }

    // Feature 2: Interactive Notice Board Tab Switching logic
    const tabs = document.querySelectorAll(".tab-btn");
    const panes = document.querySelectorAll(".notice-pane");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove 'active' status class variants from all tab triggers
            tabs.forEach(t => t.classList.remove("active"));
            panes.forEach(p => p.classList.remove("active"));

            // Apply active class assignment to clicked target components
            tab.classList.add("active");
            const targetId = tab.getAttribute("data-target");
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add("active");
            }
        });
    });
});



