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

  const deleteData = async e => {
    try {
      const response = await fetch(
        "https://family-album-three.vercel.app/api/data",
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
            id: e.target.id,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
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
        <AppBar sx={{ position: "relative", height: 0 }}>
          <Toolbar sx={{ position: "fixed", top: 0 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={() => {
                dispatch(togglePopup({ newState: false, newUrl: `/` }));
              }}
            >
              <CloseIcon />
            </IconButton>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="close"
              id={togglePopupState.id}
              onClick={e => {
                deleteData(e);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* <video autoPlay muted Loop src={togglePopupState.url} alt="img" /> */}
        <img src={togglePopupState.url} alt="img" />
      </Dialog>
    </React.Fragment>
  );
}
