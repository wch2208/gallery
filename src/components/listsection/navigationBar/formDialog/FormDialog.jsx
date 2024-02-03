import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { addOpen } from "../../../../features/addInputModal/addInputModalSlice";
import { addDataState } from "../../../../features/itemData/itemDataSlice";
import { useState } from "react";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ContentPasteOffIcon from "@mui/icons-material/ContentPasteOff";

export default function FormDialog() {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.addOpen.state);
  const [clipboard, setClipboard] = useState("");

  //클립보드의 text 가져오는 함수
  async function getClipboardURL() {
    try {
      const text = await navigator.clipboard.readText();
      console.log(text);
      return text;
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  }
  // 붙여넣기 버튼을 만든다.
  // 버튼을 누르면 함수가 작동하면서 state를 만들고
  // state를 input에 넣는다.

  const handleClose = () => {
    dispatch(addOpen({ newState: false }));
  };

  const token = process.env.REACT_APP_TOKEN;

  const addData = async (newImg, title) => {
    try {
      const response = await fetch("/api/data", {
        method: "POST", // HTTP 메소드 지정
        headers: {
          // 헤더에 Authorization 추가
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img: newImg,
          title: title,
          id: Math.random().toString(36).substr(2, 16),
        }),
      });
      const data = await response.json();
      dispatch(addDataState(data));
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
            const title = formJson.text;

            dispatch(
              addOpen({
                newState: false,
              })
            );
            addData(newImg, title);
          },
        }}
      >
        <DialogTitle>컨텐츠 추가하기</DialogTitle>
        <DialogContent>
          <DialogContentText>이미지 주소:</DialogContentText>
          <Box sx={{ display: "flex" }}>
            <TextField
              margin="dense"
              id="img"
              name="imgUrl"
              type="url"
              fullWidth
              variant="standard"
              sx={{ marginBottom: "40px", marginTop: 0 }}
              defaultValue={clipboard}
            />
            {clipboard == "" ? (
              <ContentPasteIcon
                onClick={() => {
                  getClipboardURL().then(setClipboard);
                }}
              />
            ) : (
              <ContentPasteOffIcon
                onClick={() => {
                  setClipboard("");
                }}
              />
            )}
          </Box>

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
