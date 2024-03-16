import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Body } from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid templateAreas={`"nav" "main" "footer"`}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <Body />
      </GridItem>
      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
