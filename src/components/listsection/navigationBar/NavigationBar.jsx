import Grid from "@mui/material/Unstable_Grid2";
import BottomNavigation from "./BottomNavigation";
import { styled } from "@mui/material/styles";

function NavigationBar({ scrollToTop }) {
  const StyledContainer = styled(Grid)(({ theme }) => ({
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    padding: "0px",
  }));

  return (
    <StyledContainer item xs={12}>
      <BottomNavigation scrollToTop={scrollToTop} />
    </StyledContainer>
  );
}

export default NavigationBar;
