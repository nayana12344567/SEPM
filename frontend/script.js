document.getElementById("searchBtn").onclick = async () => {
    const route = document.getElementById("route").value;
    
    if (!route) {
        alert("Please enter a route number");
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/timetable?route=${route}`);
        const data = await response.json();

        const results = document.getElementById("results");
        results.innerHTML = ""; // clear before adding new

        if (data.error) {
            results.innerHTML = `<li>${data.error}</li>`;
            return;
        }

        data.forEach(item => {
            results.innerHTML += `<li>${item.time} — ${item.stop}</li>`;
        });

    } catch (err) {
        document.getElementById("results").innerHTML = "<li>Error contacting API</li>";
    }
};
