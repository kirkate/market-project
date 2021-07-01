// eslint-disable-next-line import/no-extraneous-dependencies
import { config } from 'dotenv';
import { createServer } from 'http';
import { handler } from './lambda';

config();
const port = process.env.PORT;

const server = createServer(async (request: any, res) => {
  const response = await handler({
    path: request.url,
    body: JSON.stringify(request.body),
    headers: request.headers,
  });

  res.writeHead(response.statusCode, response.headers);

  // @ts-ignore
  res.end(JSON.stringify(response.body));
});

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Server was started on port ${port}.`));
