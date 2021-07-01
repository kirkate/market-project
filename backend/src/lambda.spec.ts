import { handler } from './lambda';

describe('lambda', () => {
  it('should return response', async () => {
    const response = await handler({
      path: '/test-request',
    });

    expect(response.body).toEqual('Response from /test-request handler');
  });
});
