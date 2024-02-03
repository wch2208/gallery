import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Masonry from "./Masonry";
import MediaPopup from "./MediaPopup";
import NavigationBar from "./navigationBar/NavigationBar";
import { useRef } from "react";
import FormDialog from "./navigationBar/formDialog/FormDialog";

function ListSection() {
  const scrollRef = useRef(null);

  const StyledContainer = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "100vh",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    overflow: "scroll",
  }));

  const scrollToTop = () => {
    scrollRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledContainer ref={scrollRef} container>
      {/* <Grid item xs={12}> */}
      <MediaPopup />
      <FormDialog />
      <Masonry />
      <NavigationBar scrollToTop={scrollToTop} />
      {/* </Grid> */}
    </StyledContainer>
  );
}

export default ListSection;
