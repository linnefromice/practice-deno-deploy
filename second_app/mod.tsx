/* @jsx React.createElement */

// @deno-types="https://denopkg.com/soremwar/deno_types/react/v16.13.1/react.d.ts"
import React, { FC } from "https://dev.jspm.io/react";
// @deno-types="https://denopkg.com/soremwar/deno_types/react-dom/v16.13.1/server.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server";

const View: FC = () => (
  <html>
    <head>
      <title>Hello deno.dev</title>
    </head>
    <body>
      <p>Hello from Deno Deploy.</p>
      <p>@linnefromice</p>
    </body>
  </html>
);

interface Responder {
  respondWith(res: Response): void
}

addEventListener("fetch", (event) => {
  const e = (event as unknown) as Responder

  const response = new Response(ReactDOMServer.renderToString(<View />), {
    headers: { "content-type": "text/html" },
  });
  e.respondWith(response);
});
