const http = require("http");
const port = 3006;

const users = [
    { "id": 1, "name": "Adarsh", "email": "ak@gmail.com" },
    { "id": 2, "name": "Akshat", "email": "ak@gmail.com" }
];

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    const url = req.url;

    // Handle GET request for "/users"
    if (url === "/users" && req.method === "GET") {
        res.write(JSON.stringify(users));
        res.end();
    }
    
    // Handle POST request for "/users"
    else if (url === "/users" && req.method === "POST") {
        let body = "";
        
        // Read incoming data
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            try {
                const { id, name, email } = JSON.parse(body);

                if (!id || !name || !email) {
                    res.statusCode = 400;
                    res.end(JSON.stringify({ error: "Missing required fields" }));
                    return;
                }

                const jsondata = { id, name, email };
                users.push(jsondata);

                res.statusCode = 201; // 201 Created
                res.end(JSON.stringify(jsondata));
            } catch (error) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: "Invalid JSON format" }));
            }
        });
    } 
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

server.listen(port, (err) => {
    if (err) {
        console.log("Server error:", err.message);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});
