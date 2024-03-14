import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav" bg="orange.300">
        <NavBar />
      </GridItem>
      <GridItem area="main" bg="green.300">
        Main
      </GridItem>
      <GridItem area="footer" bg="blue.300">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
