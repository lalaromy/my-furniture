import Builder from "./components/Builder";
import { Header, LogoImage, AppContainer } from "./styles/styles";

function App() {
  return (
    <AppContainer>
      <Header>
        <LogoImage src="./tape-measure.png" />
        <p>Design your table</p>
      </Header>
      <Builder />
    </AppContainer>
  );
}

export default App;
