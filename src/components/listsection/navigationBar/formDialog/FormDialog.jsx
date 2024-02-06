import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { addOpen } from "../../../../features/addInputModal/addInputModalSlice";
import { addDataState } from "../../../../features/itemData/itemDataSlice";
import { useState } from "react";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ContentPasteOffIcon from "@mui/icons-material/ContentPasteOff";
import { db } from "../../../../firebase-config";
import { collection, addDoc } from "firebase/firestore";

export default function FormDialog() {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.addOpen.state);
  const [clipboard, setClipboard] = useState("");

  //클립보드의 text 가져오는 함수
  async function getClipboardURL() {
    try {
      const text = await navigator.clipboard.readText();
      console.log("클립보드 내용: ", text);
      return text;
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  }

  const handleClose = () => {
    dispatch(addOpen({ newState: false }));
  };

  async function addDocument(fbData) {
    try {
      const docRef = await addDoc(collection(db, "itemData"), fbData);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

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

  function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 1을 더합니다.
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
  }

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
            //firebase에 추가하기

            const fbData = {
              img: newImg,
              title: title,
              id: Math.random().toString(36).substr(2, 16),
              time: formatDate(new Date()),
            };

            addDocument(fbData);

            dispatch(
              addOpen({
                newState: false,
              })
            );
            addData(newImg, title);
            setClipboard("");
            //새로고침
            // window.location.reload();
          },
        }}
      >
        <DialogTitle>컨텐츠 추가하기</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Img Url</DialogContentText> */}
          <Box sx={{ display: "flex" }}>
            <TextField
              required
              margin="dense"
              id="img"
              name="imgUrl"
              type="url"
              variant="standard"
              sx={{ marginBottom: "40px", marginTop: 0 }}
              value={clipboard}
              onChange={e => setClipboard(e.target.value)}
              placeholder="Img Url 붙여넣기 하세요."
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

          {/* <DialogContentText>제목:</DialogContentText> */}
          <TextField
            margin="dense"
            id="name"
            name="text"
            type="text"
            variant="standard"
            placeholder="제목을 입력하세요."
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
