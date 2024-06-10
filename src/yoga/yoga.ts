import { createYoga } from "graphql-yoga";
import schema from "./schema";

const yoga = createYoga({
	schema,
	plugins: [
		{
			onResponse: ({ response }) => {
				response.headers.append(
					"set-cookie",
					"name=value0; SameSite=None; Secure",
				);
				response.headers.append(
					"set-cookie",
					"name=value1; SameSite=Strict; Secure",
				);
			},
		},
	],
});
export default yoga;
