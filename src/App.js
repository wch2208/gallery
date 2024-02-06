import Grid from "@mui/material/Unstable_Grid2";
import ListSection from "./components/listsection/ListSection";
import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { db } from "./firebase-config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { addDataState } from "./features/itemData/itemDataSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getFirebaseDb = async () => {
      const dbCol = collection(db, "itemData");
      const q = query(dbCol, orderBy("time", "desc"));
      const snapShot = await getDocs(q);
      const dbList = snapShot.docs.map(doc => ({
        ...doc.data(),
        docId: doc.id,
      }));
      dispatch(addDataState(dbList));
      console.log(dbList);
    };

    getFirebaseDb();
  }, []);

  const StyledContainer = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "100vh",
    padding: "0px",
  }));

  return (
    <StyledContainer container>
      <Grid container sx={{ width: "100%", height: "100%", padding: "0px" }}>
        <ListSection />
      </Grid>
    </StyledContainer>
  );
}

export default App;
