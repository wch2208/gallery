import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "../../features/openPopup/openPopupSlice";
import { useState } from "react";
import { Skeleton } from "@mui/material";

export default function Images() {
  const dispatch = useDispatch();
  const { itemData } = useSelector(state => state.itemData);

  return (
    <>
      {itemData.map(item => (
        <div key={item.id}>
          <img
            srcSet={`${item.img}`}
            src={`${item.img}`}
            alt={item.title}
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
    </>
  );
}
