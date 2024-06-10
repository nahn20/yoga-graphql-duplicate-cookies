const ping = async () => {
	const res = await fetch("http://localhost:4000/graphql", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: `
                query {
                    hello
                }
            `,
		}),
	});
	if (!res.ok) throw new Error("Failed to ping server");
	const { data } = await res.json();
	console.info(data);
	const setCookie = res.headers.get("set-cookie");
	console.info(setCookie);
};
ping();