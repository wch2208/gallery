import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import Slide from "@mui/material/Slide";
import { useSelector, useDispatch } from "react-redux";
import { togglePopup } from "../../features/openPopup/openPopupSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { delDataState } from "../../features/itemData/itemDataSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MediaPopup() {
  const dispatch = useDispatch();
  const togglePopupState = useSelector(state => state.openPopup);
  const id = togglePopupState.id;
  const token = process.env.REACT_APP_TOKEN;

  const deleteData = async e => {
    try {
      const response = await fetch("/api/data", {
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
      dispatch(delDataState(id));
      dispatch(togglePopup({ newState: false, newUrl: `/` }));
      console.log(data);
    } catch (error) {
      console.log("요청 중 에러가 발생했습니다.", error);
    }
  };

  return (
    <React.Fragment>
      <Dialog
        // fullScreen
        open={togglePopupState.state}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            height: "0px",
          }}
        >
          <Toolbar
            sx={{
              width: "90%",
              display: "inline-flex",
              justifyContent: "space-between",
              marginBottom: "-20px",
            }}
          >
            {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
              onClick={() => {
                dispatch(togglePopup({ newState: false, newUrl: `/` }));
              }}
            >
              <CloseIcon />
            </IconButton> */}
            <p>{togglePopupState.title}</p>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="close"
              id={togglePopupState.id}
              onClick={deleteData}
            >
              <DeleteIcon />
            </IconButton>
          </Toolbar>
          <img
            src={togglePopupState.url}
            alt="img"
            style={{
              objectFit: "scale-down",
              height: "90vh",
              marginTop: "20px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
            onClick={() => {
              dispatch(togglePopup({ newState: false, newUrl: `/` }));
            }}
          />
        </AppBar>
      </Dialog>
    </React.Fragment>
  );
}
