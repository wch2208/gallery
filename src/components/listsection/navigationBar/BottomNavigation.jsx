import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";

export default function SimpleBottomNavigation({ scrollToTop }) {
  const [value, setValue] = React.useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://family-album-three.vercel.app/api/mediaList",
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
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onClick={fetchData}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={scrollToTop}
        />
      </BottomNavigation>
    </Box>
  );
}
