import Masonry from "@mui/lab/Masonry";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/itemData/itemDataSlice";
import Images from "./Images";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ImageMasonry() {
  const { itemData } = useSelector(state => state.itemData);
  const dispatch = useDispatch();
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const fetchMore = () => {
    dispatch(fetchData());
  };

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

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
    <>
      <div
        style={{
          marginBottom: "-100px",
          color: "white",
        }}
      >
        loading..
      </div>
      <InfiniteScroll
        dataLength={itemData.length}
        next={fetchMore}
        hasMore={true}
        endMessage={<p>Nothing more to show</p>}
      >
        <Masonry columns={columns} sx={{ margin: 0 }}>
          <Images />
        </Masonry>
      </InfiniteScroll>
    </>
  );
}
