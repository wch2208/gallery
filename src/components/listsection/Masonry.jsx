import Masonry from "@mui/lab/Masonry";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "../../features/openPopup/openPopupSlice";

export default function ImageMasonry() {
  const { itemData, status } = useSelector(state => state.itemData);
  console.log("itemData: ", itemData);
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
        itemData.map((item, index) => (
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
                console.log("이미지 클릭감지: ", item);
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
            {/* <video
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
              dispatch(togglePopup({ newState: true, newUrl: `${item.img}` }));
            }}
          /> */}
          </div>
        ))}
      {status === "failed" && <p>Error fetching data.</p>}
    </Masonry>
  );
}

// let itemData = [
//   {
//     img: "https://snz04pap002files.storage.live.com/y4m9M3oF8GW1VXUAn0LfwzJ_7Wq4nDxU1jdjjkgiEn4vKUV-G7vLszgs4uEZysEObJFzQe4xqcP2R8yK59sNpIgvdR2ytVvWq_pq4eJEj1odT3v_jp74vExusW0fykyurl-ASQZqPyXWvu_m50G59kLdaEvgxEULQPIgtXBd1t2u2p4G_JiDzq6sEgP-Gm0n-L-8SvxrFBgucOHqudl0EHzkTg9lK16F7uWmyEXlKANjXU?encodeFailures=1&width=843&height=1125",
//     video: "",
//     title: "하온",
//     id: "1",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
//     video: "",
//     title: "Tower",
//     id: "2",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     video: "",
//     title: "Honey",
//     id: "3",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     video: "",
//     title: "Basketball",
//     id: "4",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     video: "",
//     title: "Breakfast",
//     id: "5",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
//     video: "",
//     title: "Tree",
//     id: "6",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     video: "",
//     title: "Burger",
//     id: "7",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     video: "",
//     title: "Camera",
//     id: "8",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     video: "",
//     title: "Coffee",
//     id: "9",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",
//     video: "",
//     title: "Camping Car",
//     id: "10",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     video: "",
//     title: "Hats",
//     id: "11",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     video: "",
//     title: "Tomato basil",
//     id: "12",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
//     video: "",
//     title: "Mountain",
//     id: "13",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     video: "",
//     title: "Bike",
//     id: "14",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     video: "",
//     title: "Bike",
//     id: "15",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     video: "",
//     title: "Bike",
//     id: "16",
//   },
// ];
