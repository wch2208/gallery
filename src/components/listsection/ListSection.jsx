import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Masonry from "./Masonry";
import MediaPopup from "./MediaPopup";
import NavigationBar from "./navigationBar/NavigationBar";
import { useRef } from "react";
import FormDialog from "./navigationBar/formDialog/FormDialog";
import { fetchData } from "../../features/itemData/itemDataSlice";
import { useDispatch, useSelector } from "react-redux";

function ListSection() {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.itemData.page);
  const scrollRef = useRef(null);

  const StyledContainer = styled(Grid)(({ theme }) => ({
    width: "100%",
    height: "100vh",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    overflow: "scroll",
  }));

  const scrollToTop = () => {
    scrollRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fetchMore = () => {
    //
    dispatch(fetchData({ page: currentPage }));
    console.log("추가요청하는 함수에 전달되는 page:", currentPage);
  };

  return (
    <StyledContainer ref={scrollRef} container>
      <MediaPopup />
      <FormDialog />
      <Masonry />
      <button onClick={fetchMore} style={{ marginBottom: "40px" }}>
        more
      </button>
      <NavigationBar scrollToTop={scrollToTop} />
    </StyledContainer>
  );
}

export default ListSection;
