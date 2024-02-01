import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import BottomNavigation from "./BottomNavigation";
import { styled } from "@mui/material/styles";

function NavigationBar() {
  const StyledContainer = styled(Grid)(({ theme }) => ({
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,

    [theme.breakpoints.down("sm")]: {
      // height: "calc(100vh - 80px)",
    },

    padding: "0px",
  }));

  return (
    <StyledContainer item xs={12}>
      <BottomNavigation />
    </StyledContainer>
  );
}

export default NavigationBar;
