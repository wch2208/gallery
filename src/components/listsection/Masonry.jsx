import Masonry from "@mui/lab/Masonry";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../features/itemData/itemDataSlice";
import Images from "./Images";

export default function ImageMasonry() {
  const currentPage = useSelector(state => state.itemData.page);
  const dispatch = useDispatch();
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const fetchMore = () => {
    //
    dispatch(fetchData({ page: currentPage }));
    // window.scrollTo(0, document.body.scrollHeight);
  };

  // let columns;
  // if (isXs) {
  //   columns = 2;
  // } else if (isSm) {
  //   columns = 3;
  // } else if (isMd) {
  //   columns = 4;
  // } else if (isLg) {
  //   columns = 5;
  // }

  return (
    <>
      <Masonry columns={2} sx={{ margin: 0 }}>
        <Images />
      </Masonry>
      <button onClick={fetchMore} style={{ marginBottom: "40px" }}>
        more
      </button>
    </>
  );
}
