import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { addOpen } from "../../../features/addInputModal/addInputModalSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SimpleBottomNavigation({ scrollToTop }) {
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.addOpen);

  const fetchData = async () => {
    try {
      const response = await fetch(
        // "https://family-album-three.vercel.app/api/data",
        "/api/data",
        {
          method: "GET", // HTTP 메소드 지정
          headers: {
            // 헤더에 Authorization 추가
            Authorization: "fiKyi3A8FTuyq65cdObDsodi",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("요청 중 에러가 발생했습니다.", error);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation showLabels onClick={fetchData}>
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={scrollToTop}
        />
        <BottomNavigationAction
          label="Add"
          icon={<AddBoxIcon />}
          onClick={() => {
            dispatch(addOpen({ newState: true }));
            console.log("addOpen state: ", isOpen);
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
