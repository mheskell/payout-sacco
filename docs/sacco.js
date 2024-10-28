 // Generate an array of 44 weeks dynamically
const weeks = Array.from({ length: 44 }, (_, i) => `Week ${i + 1}`);

function assignPayouts() {
    // Get the names from the textarea, split by new lines, and remove any empty entries
    const namesInput = document.getElementById("names-input").value.trim();
    const names = namesInput.split("\n").map(name => name.trim()).filter(name => name);

    // Clear previous output
    const outputList = document.getElementById("output-list");
    outputList.innerHTML = "";

    // Check if there are enough weeks for all names
    if (names.length > weeks.length) {
        alert("Not enough weeks available for all names.");
        return;
    }

    // Copy the weeks array to prevent duplicates and shuffle
    const availableWeeks = [...weeks];
    
    names.forEach(name => {
        // Randomly select a week and remove it from the available weeks
        const randomIndex = Math.floor(Math.random() * availableWeeks.length);
        const assignedWeek = availableWeeks.splice(randomIndex, 1)[0];
        
        // Display the result in the output list
        const listItem = document.createElement("li");
        listItem.textContent = `${name} - ${assignedWeek}`;
        outputList.appendChild(listItem);
    });
}
