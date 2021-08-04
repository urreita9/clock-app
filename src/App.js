import { Container } from "./components/Container";
import { ContextProvider } from "./components/context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Container />
    </ContextProvider>
  );
}

export default App;
