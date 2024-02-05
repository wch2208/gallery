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
  }));

  const scrollToTop = () => {
    scrollRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledContainer ref={scrollRef} container>
      <MediaPopup />
      <FormDialog />
      <Masonry />
      <NavigationBar scrollToTop={scrollToTop} />
    </StyledContainer>
  );
}

export default ListSection;
