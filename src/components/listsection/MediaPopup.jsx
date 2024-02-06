import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { useSelector, useDispatch } from "react-redux";
import { togglePopup } from "../../features/openPopup/openPopupSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { delDataState } from "../../features/itemData/itemDataSlice";
import { db } from "../../firebase-config";
import { doc, deleteDoc, query, where } from "firebase/firestore";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MediaPopup() {
  const dispatch = useDispatch();
  const togglePopupState = useSelector(state => state.openPopup);
  const id = togglePopupState.id;
  const token = process.env.REACT_APP_TOKEN;

  //파이어베이스 데이터 삭제
  async function deleteFirebaseData() {
    const docRef = doc(db, "itemData", togglePopupState.docId);
    await deleteDoc(docRef);
  }

  //
  const deleteData = async e => {
    try {
      const response = await fetch(`/api/data`, {
        method: "DELETE",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log("요청 중 에러가 발생했습니다.", error);
    }
    dispatch(delDataState(id));
    dispatch(togglePopup({ newState: false, newUrl: `/`, id: id }));
  };

  console.log("togglePopupState?", togglePopupState);
  return (
    <React.Fragment>
      <Dialog open={togglePopupState.state} TransitionComponent={Transition}>
        <AppBar
          sx={{
            height: "0px",
          }}
        >
          <Toolbar
            sx={{
              width: "90%",
              display: "inline-flex",
              justifyContent: "end",
              marginBottom: "-20px",
            }}
          >
            <IconButton
              edge="end"
              color="inherit"
              aria-label="close"
              id={togglePopupState.id}
              onClick={() => {
                deleteData();
                deleteFirebaseData(togglePopupState.id)
                  .then(() => {
                    console.log("삭제 완료");
                  })
                  .catch(error => {
                    console.error("error:", error);
                  });
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Toolbar>
          <img
            src={togglePopupState.url}
            alt="img"
            title={togglePopupState.title}
            style={{
              objectFit: "scale-down",
              height: "80vh",
              marginTop: "20px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
            onClick={() => {
              dispatch(togglePopup({ newState: false, newUrl: `/` }));
            }}
          />
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "black",
              textShadow: "2px 2.5px 3px white",
              marginTop: "10px",
            }}
          >
            {togglePopupState.title}
          </Box> */}
        </AppBar>
      </Dialog>
    </React.Fragment>
  );
}
