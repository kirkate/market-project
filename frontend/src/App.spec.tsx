import { h, render } from 'preact';
import { App } from './Root';

describe('<App />', () => {
  afterAll(() => {
    render(null, document.body);
  });

  it('should be rendered without errors', () => {
    const renderApp = jest.fn(() => render(<App />, document.body));
    expect(renderApp).not.toThrowError();
  });
});
