import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { addOpen } from "../../../../features/addInputModal/addInputModalSlice";

export default function FormDialog() {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.addOpen.state);

  const handleClose = () => {
    dispatch(addOpen({ newState: false }));
  };

  const addData = async (newImg, newVideo, title) => {
    try {
      const response = await fetch(
        // "https://family-album-three.vercel.app/api/data",
        "/api/data",
        {
          method: "POST", // HTTP 메소드 지정
          headers: {
            // 헤더에 Authorization 추가
            Authorization: "fiKyi3A8FTuyq65cdObDsodi",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            img: newImg,
            video: newVideo,
            title: title,
            id: Math.random().toString(36).substr(2, 16),
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
        open={isOpen}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: event => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const newImg = formJson.imgUrl;
            const newVideo = formJson.videoUrl;
            const title = formJson.text;

            dispatch(
              addOpen({
                newState: false,
              })
            );
            addData(newImg, newVideo, title);
          },
        }}
      >
        <DialogTitle>컨텐츠 추가하기</DialogTitle>
        <DialogContent>
          <DialogContentText>이미지 주소:</DialogContentText>
          <TextField
            margin="dense"
            id="img"
            name="imgUrl"
            type="url"
            fullWidth
            variant="standard"
            sx={{ marginBottom: "40px", marginTop: 0 }}
          />
          <DialogContentText>영상 주소:</DialogContentText>
          <TextField
            margin="dense"
            id="video"
            name="videoUrl"
            type="url"
            fullWidth
            variant="standard"
            sx={{ marginBottom: "40px", marginTop: 0 }}
          />
          <DialogContentText>제목:</DialogContentText>
          <TextField
            margin="dense"
            id="name"
            name="text"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "gray" }}>
            Cancel
          </Button>
          <Button type="submit" variant="outlined">
            추가
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
