
function loadSettings() {
    const language = localStorage.getItem("language") || "en";
    const version = localStorage.getItem("version") || "pc";

    // Set the dropdowns to reflect saved settings
    document.getElementById("languageSelect").value = language;
    document.getElementById("versionSelect").value = version;

    // Apply language and version immediately
    applySettings(language, version);
}

// Function to save settings to localStorage
function saveSettings() {
    const language = document.getElementById("languageSelect").value;
    const version = document.getElementById("versionSelect").value;

    // Save to localStorage
    localStorage.setItem("language", language);
    localStorage.setItem("version", version);

    // Apply settings and reload page if needed
    applySettings(language, version);
    alert("Settings saved successfully!");
}

// Function to apply language and version
function applySettings(language, version) {
    // Language application (simplified for this example)
    document.body.setAttribute("lang", language);
    if (language === "cz") {
        document.querySelector("h1").textContent = "Nastavení";
    } else {
        document.querySelector("h1").textContent = "Settings";
    }

    // Simulate version application
    if (version === "mobile") {
        document.body.style.fontSize = "18px"; // Example styling for mobile
    } else {
        document.body.style.fontSize = "16px"; // Example styling for PC
    }
}

// Event listener for Save button
document.getElementById("saveSettings").addEventListener("click", saveSettings);

// Load settings on page load
window.onload = loadSettings;
