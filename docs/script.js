
// Highlight active nav link dynamically
document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// Search button functionality
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        alert("You searched for: " + query);
    } else {
        alert("Please enter a search term!");
    }
});

// Clear button functionality
document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
});
