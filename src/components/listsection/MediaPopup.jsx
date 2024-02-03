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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MediaPopup() {
  const dispatch = useDispatch();
  const togglePopupState = useSelector(state => state.openPopup);

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
          </Toolbar>
        </AppBar>
        {/* <video autoPlay muted Loop src={togglePopupState.url} alt="img" /> */}
        <img src={togglePopupState.url} alt="img" />
      </Dialog>
    </React.Fragment>
  );
}
