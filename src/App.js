import Grid from "@mui/material/Unstable_Grid2";
import ListSection from "./components/listsection/ListSection";
import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./features/itemData/itemDataSlice";

function App() {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.itemData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const StyledContainer = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "100vh",
    padding: "0px",
  }));

  return (
    <StyledContainer container>
      {/* <Grid item xs={12}> */}

      <Grid container sx={{ width: "100%", height: "100%", padding: "0px" }}>
        <ListSection />
      </Grid>
      {/* </Grid> */}
    </StyledContainer>
  );
}

export default App;
