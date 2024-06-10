import { App } from "uWebSockets.js";
import yoga from "./yoga/yoga";

const port = 4000;
App()
	.post("/", (ctx) => {
		ctx.writeHeader("Content-Type", "application/json");
		ctx.writeHeader("Set-Cookie", "name=value0; SameSite=None; Secure");
		ctx.writeHeader("Set-Cookie", "name=value1; SameSite=Strict; Secure");
		ctx.end(JSON.stringify({ data: { hello: "world" } }));
	})
	.any("/*", yoga)
	.listen(port, (listenSocket) => {
		if (listenSocket) {
			console.info(`Server running on port ${port}`);
		}
	});
