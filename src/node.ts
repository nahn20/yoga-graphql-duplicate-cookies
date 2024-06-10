import { createServer } from "node:http";
import yoga from "./yoga/yoga";

const port = 4000;
const server = createServer(yoga);

server.listen(port, () => {
	console.info(`Server running on port ${port}`);
});
