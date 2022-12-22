import { AppContainer, Fetch } from 'src/components';

const App = () => (
  <AppContainer testId="main-page">
    <h1>Hello World!</h1>
    <button type="button" data-testid="test-button">
      test
    </button>
    <div>
      <label htmlFor="test">test</label>
      <input type="text" name="test" id="test" placeholder="test value" />
    </div>
    <Fetch />
  </AppContainer>
);

export default App;
