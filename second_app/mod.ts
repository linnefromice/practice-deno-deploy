import { FC } from "https://dev.jspm.io/react";
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