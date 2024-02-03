import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useSelector, useDispatch } from "react-redux";
import { togglePopup } from "../../features/openPopup/openPopupSlice";
import DeleteIcon from "@mui/icons-material/Delete";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MediaPopup() {
  const dispatch = useDispatch();
  const togglePopupState = useSelector(state => state.openPopup);
  //vercel Environment Variables에 등록
  let token = process.env.REACT_APP_TOKEN;

  const deleteData = async e => {
    try {
      const response = await fetch(
        // "https://family-album-three.vercel.app/api/data",
        "/api/data",
        {
          method: "DELETE", // HTTP 메소드 지정
          headers: {
            // 헤더에 Authorization 추가
            Authorization: "fiKyi3A8FTuyq65cdObDsodi",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            img: "",
            video: "",
            title: "",
            id: togglePopupState.id,
          }),
        }
      );
      const data = await response.json();
    } catch (error) {
      console.log("요청 중 에러가 발생했습니다.", error);
    }
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={togglePopupState.state}
        TransitionComponent={Transition}
        sx={{ "& .MuiDialog-paper": { backgroundColor: "black" } }}
      >
        <AppBar sx={{ position: "fiexd", top: 0, height: "55px" }}>
          <Toolbar
            sx={{
              position: "fixed",
              top: 0,
              width: "90%",
              display: "inline-flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={() => {
                dispatch(togglePopup({ newState: false, newUrl: `/` }));
              }}
              // sx={{ backgroundColor: "#d4d1cc" }}
            >
              <CloseIcon />
            </IconButton>
            <p>{togglePopupState.title}</p>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="close"
              id={togglePopupState.id}
              onClick={deleteData}
              sx={
                {
                  // backgroundColor: "#d4d1cc",
                  // position: "fiexd",
                  // left: 100,
                }
              }
            >
              <DeleteIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* <video autoPlay muted Loop src={togglePopupState.url} alt="img" /> */}
        <img src={togglePopupState.url} alt="img" style={{ marginTop: 56 }} />
      </Dialog>
    </React.Fragment>
  );
}
