export default function handler(req, res) {
  if (req.method === "GET") {
    // GET 로직
    res.status(200).json(itemData);
  } else if (req.method === "POST") {
    // POST 로직
    const newItem = req.body;
    itemData = [newItem, ...itemData];

    res.status(200).json(itemData[0]);
  } else if (req.method === "DELETE") {
    //DELETE 로직
    const { id } = req.body;
    itemData = itemData.filter(item => item.id !== id);
    res.status(200).json({ message: "사용자를 삭제했습니다!" });
  }
}

let itemData = [
  {
    img: "https://i.pinimg.com/474x/20/d8/1f/20d81f46c8bb27b0c8c79c5c8d7d9f09.jpg",
    video: "",
    title: "강아지",
    id: "u1q6ikj68he",
  },
  {
    img: "https://snz04pap002files.storage.live.com/y4mOsfdsuYxtru3O6wwnUyX0sfE3NJNTWZoXPvrFRDFOLuz5UDx-mmo425yAjnjA2Zsv6DvvlDjDvx7qo9M9wobVztgO6fy-b_HXe8utj8SlBlvQ2zkP5t5CDF9-fuc6NwSKa-A6yPdjS4moXOHYQrgQsO8O5kWkvOwallmf9EQ-lLx4Yz9YP3ecKW6IVjKhlGl0fC7AKJPz5InjUAuiXppXl-LnM_4695i86Had1LUVa4?encodeFailures=1&width=1660&height=1124",
    video: "",
    title: "사무실",
    id: "clvw5bx2xk6",
  },
  {
    img: "https://snz04pap002files.storage.live.com/y4m-OlrWAJAwShJcoVgfHLIPtrCfFt_bWhEFWOuOBWZpSstCNHEWe3HY7DN2ES4LQ7CbHsKdl65C-ere_U1n7CLyw9SxEa8HMgKljAL5qAx5RF6FRTq1gkjzvMj_xnjREgSD66jtk5moBAP8BMLP35ZhLi-STG9ZbUgg0_wnTfJkPydJ0yI6IGCO8SfFlzoJx25a57l6unmUUGZyq690ef5vilbUq68EVp1Wo75RrjqOnw?encodeFailures=1&width=1024&height=1024",
    video: "",
    title: "도시",
    id: "yan6v3wci8",
  },
  {
    img: "https://snz04pap002files.storage.live.com/y4mm-ZGaVvje9tyDrCgxybkPoWQJn_csFggMPY3P8PIuAfdy78tW5-NP0MHS_qvEDQTn8z_urY4aiXa3A8xuW_Ro2D5FQYy_dPrfRx2fuQB_FcsXIVz9_1J_3_cYmgtG26F4Fyit489kxSExlotLxfv0QJLa9kl56q1CLqlgbbdsUc8KY1SOj3xfQ77FScwMs8R4UGHqNggosd5i_ADPVeGWP2_rV98tdQ6_Sd8GIt8qEc?encodeFailures=1&width=295&height=281",
    video: "",
    title: "양",
    id: "3q53w6mwtmo",
  },
  {
    img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
    video: "",
    title: "Tower",
    id: "2",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    video: "",
    title: "Honey",
    id: "3",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    video: "",
    title: "Basketball",
    id: "4",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    video: "",
    title: "Breakfast",
    id: "5",
  },
  {
    img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
    video: "",
    title: "Tree",
    id: "6",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    video: "",
    title: "Burger",
    id: "7",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    video: "",
    title: "Camera",
    id: "8",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    video: "",
    title: "Coffee",
    id: "9",
  },
  {
    img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",
    video: "",
    title: "Camping Car",
    id: "10",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    video: "",
    title: "Hats",
    id: "11",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    video: "",
    title: "Tomato basil",
    id: "12",
  },
  {
    img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
    video: "",
    title: "Mountain",
    id: "13",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    video: "",
    title: "Bike",
    id: "15",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    video: "",
    title: "Bike",
    id: "16",
  },
];
