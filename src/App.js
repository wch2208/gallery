import Grid from "@mui/material/Unstable_Grid2";
import ListSection from "./components/listsection/ListSection";
import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./features/itemData/itemDataSlice";

function App() {
  const dispatch = useDispatch();
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    dispatch(fetchData());
    const timer = setTimeout(() => {
      setCount(5);
    }, 5000);
  }, [dispatch]);

  const StyledContainer = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "100vh",
    padding: "0px",
  }));

  return (
    <StyledContainer container>
      <Grid container sx={{ width: "100%", height: "100%", padding: "0px" }}>
        {/* {count === 5 ? <ListSection /> : <p>로딩중..</p>} */}
        <ListSection />
      </Grid>
    </StyledContainer>
  );
}

export default App;
