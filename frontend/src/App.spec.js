import { h, render } from 'preact';
import { App } from './App';
describe('<App />', () => {
    afterAll(() => {
        render(null, document.body);
    });
    it('should be rendered without errors', () => {
        const renderApp = jest.fn(() => render(h(App, null), document.body));
        expect(renderApp).not.toThrowError();
    });
});
