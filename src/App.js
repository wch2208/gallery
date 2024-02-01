import Grid from "@mui/material/Unstable_Grid2";
import ListSection from "./components/listsection/ListSection";
import NavigationBar from "./components/navigation/NavigationBar";
import { styled } from "@mui/material/styles";

function App() {
  const StyledContainer = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "100vh",

    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 80px)",
      backgroundColor: "gray",
    },

    padding: "0px",
  }));

  return (
    <StyledContainer container>
      <Grid item xs={12}>
        <Grid container sx={{ width: "100%", height: "100%", padding: "0px" }}>
          <ListSection />
          <NavigationBar />
        </Grid>
      </Grid>
    </StyledContainer>
  );
}

export default App;
