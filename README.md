# yoga-graphql-duplicate-cookies

To install dependencies, run `npm install`.

## Usage

Run one of the demo servers with `npm run node`, `npm run express`, or `npm run uWebSockets`.

Then, while the server is running, run either `npm run ping` or `npm run pingRoot` (uWebSockets only) to see the results. These scripts ping the server with a trivial request and log the response and cookies.

## Results

Both pings are expected to respond with the following cookie: `name=value0; SameSite=None; Secure, name=value1; SameSite=Strict; Secure`.

This works correctly on the Node.js and Express servers, but not on the uWebSockets server, in which case the cookies are duplicated. This does not seem to be a uWebSockets issue as seen by running `npm run pingRoot`, which bypasses GraphQL Yoga and responds with the correct cookies.

## Methods

Setting cookies is done in a barebones manner in `src/yoga/yoga.ts` using a custom plugin. This plugin responds with cookies in the same manner as the `whatwg-node` plugin.

## Additional Bug Notes

This issue appears to only affect Yoga-uWebSockets when setting multiple cookies with the same name. If you remove one of the set cookie values in `src/yoga/yoga.ts`, the singular cookie is set correctly.
