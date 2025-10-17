import http from "http";

//declaring the port variable
const port = 3000;

//defining my user-profile
const myProfile = {
	email: "devyalchemist@gmail.com",
	name: "Gospel Ugwuja",
	stack: "Express, PostgreSQL, Nodejs",
};

//creating the server
const server = http.createServer(async (req, res) => {
	if (req.url !== "/me") {
		res.writeHead(302, { location: "/me" });
		res.end();
		return;
	}
	if (req.url === "/me" && req.method === "GET") {
		const controller = new AbortController();
		const requestTimeOutId = setTimeout(() => {
			controller.abort();
		}, 5000);
		try {
			const response = await fetch("https://catfact.ninja/fact", {
				signal: controller.signal,
			});
			clearTimeout(requestTimeOutId);
			if (!response.ok) {
				throw new Error(`API responded with status: ${response.status}`);
			}
			const factData = await response.json();
			const responseMessage = {
				status: "success",
				user: myProfile,
				timestamp: new Date().toISOString(),
				fact: factData.fact,
			};
			res.writeHead(200, {
				"content-type": "application/json",
				"access-control-allow-origin": "*",
				"access-control-allow-methods": "GET",
			});

			res.end(JSON.stringify(responseMessage));
		} catch (err) {
			console.log(err);
			res.writeHead(500, { "Content-Type": "application/json" });
			res.end(
				JSON.stringify({
					status: "error",
					message: "Could not retrieve cat fact from external API.",
				})
			);
		}
	} else {
		res.writeHead(404, { "Content-Type": "application/json" });
		res.end(JSON.stringify({ status: "error", message: "Endpoint not found" }));
	}
});

// server listening logic
server.listen(port, () => {
	console.log(`Listening for request on port ${port}`);
});
