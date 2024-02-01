import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Masonry from "./Masonry";

function ListSection() {
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
    <StyledContainer
      container
      sx={{
        // height: "95%",
        // border: "1px solid blue",
        // display: "flex",
        // flexDirection: "row",
        // flexWrap: "wrap",
        // justifyContent: "center",
        paddingLeft: 2,
        paddingRight: 2,
        width: "100%",
        overflow: "scroll",
      }}
    >
      <Grid item sx={12} xs={{}}>
        {/* <img src="https://picsum.photos/844/390"></img> */}
        <Masonry />
      </Grid>
    </StyledContainer>
  );
}

export default ListSection;
