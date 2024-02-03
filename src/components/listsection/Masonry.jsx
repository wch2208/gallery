import Masonry from "@mui/lab/Masonry";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "../../features/openPopup/openPopupSlice";

export default function ImageMasonry() {
  const { itemData, status } = useSelector(state => state.itemData);
  const dispatch = useDispatch();
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

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
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" &&
        itemData.map(item => (
          <div key={item.id}>
            <img
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: 10,
                display: "block",
                width: "100%",
              }}
              onClick={() => {
                dispatch(
                  togglePopup({
                    newState: true,
                    newUrl: `${item.img}`,
                    id: `${item.id}`,
                    title: `${item.title}`,
                  })
                );
              }}
            />
          </div>
        ))}
      {status === "failed" && <p>Error fetching data.</p>}
    </Masonry>
  );
}
