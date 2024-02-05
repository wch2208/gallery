import Masonry from "@mui/lab/Masonry";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, addDataState } from "../../features/itemData/itemDataSlice";
import Images from "./Images";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from "react";

export default function ImageMasonry() {
  const { currentPage } = useSelector(state => state.itemData.page);
  const { itemData } = useSelector(state => state.itemData);
  const dispatch = useDispatch();
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  useEffect(() => {
    console.log("useEffct run");
    dispatch(fetchData({ page: 1 }));
    let local = JSON.parse(localStorage.getItem("itemData"));
    local && dispatch(addDataState(local));
  }, []);
  // const fetchMore = () => {
  //   //
  //   dispatch(fetchData({ page: currentPage }));
  //   // window.scrollTo(0, document.body.scrollHeight);
  // };

  let columns;
  if (isXs) {
    columns = 2;
  } else if (isSm) {
    columns = 3;
  } else if (isMd) {
    columns = 4;
  } else if (isLg) {
    columns = 5;
  }

  return (
    <Masonry columns={columns} sx={{ margin: 0 }}>
      <Images />
    </Masonry>
  );
}
