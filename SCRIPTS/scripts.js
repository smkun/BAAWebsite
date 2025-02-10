// Function to show selected section and hide others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll(".section-container");
    sections.forEach((section) => {
        section.classList.remove("section-active");
        section.style.display = "none";
    });

    // Show the requested section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add("section-active");
        targetSection.style.display = "block";
    } else {
        // Default to home if section not found
        const homeSection = document.getElementById("home");
        if (homeSection) {
            homeSection.classList.add("section-active");
            homeSection.style.display = "block";
        }
    }
}

// When the page loads, show the correct section
document.addEventListener("DOMContentLoaded", () => {
    // Hide all sections except home
    const sections = document.querySelectorAll(".section-container");
    sections.forEach((section) => {
        section.style.display = "none";
        section.classList.remove("section-active");
    });

    // Check for a hash in the URL
    const hash = window.location.hash.slice(1); // Remove the # symbol
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    } else {
        showSection("home");
    }

    // Set default team selection to Team Alpha
    switchTeam("alpha");
});

// Listen for hash changes and update the section
window.addEventListener("hashchange", () => {
    const hash = window.location.hash.slice(1);
    if (hash) {
        showSection(hash);
    }
});

// Function to switch between teams
function switchTeam(team) {
    // Hide all teams
    document.querySelectorAll(".team-content").forEach((content) => {
        content.classList.remove("active");
        content.style.display = "none";
    });

    // Show the selected team
    const selectedTeam = document.getElementById(`team-${team}`);
    if (selectedTeam) {
        selectedTeam.classList.add("active");
        selectedTeam.style.display = "block";
    }

    // Update active button style
    document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.classList.remove("active");
    });

    const activeButton = document.querySelector(
        `[onclick="switchTeam('${team}')"]`
    );
    if (activeButton) {
        activeButton.classList.add("active");
    }
}
