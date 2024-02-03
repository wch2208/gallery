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
    img: "https://picsum.photos/1080/1350?random=1",
    title: "random",
    id: "m24k66nnt1",
  },
  {
    img: "https://picsum.photos/1080/608?random=2",
    title: "random",
    id: "m24k66nnt2",
  },
  {
    img: "https://picsum.photos/1080/1080?random=3",
    title: "random",
    id: "m24k66nnt3",
  },
  {
    img: "https://picsum.photos/1080/1350?random=4",
    title: "random",
    id: "m24k66nt1",
  },
  {
    img: "https://picsum.photos/1080/608?random=5",
    title: "random",
    id: "m24k6nnt2",
  },
  {
    img: "https://picsum.photos/1080/1080?random=6",
    title: "random",
    id: "m2466nnt3",
  },
  {
    img: "https://picsum.photos/1080/1350?random=7",
    title: "random",
    id: "7",
  },
  {
    img: "https://picsum.photos/1080/608?random=8",
    title: "random",
    id: "8",
  },
  {
    img: "https://picsum.photos/1080/1080?random=9",
    title: "random",
    id: "9",
  },
  {
    img: "https://picsum.photos/1080/1350?random=10",
    title: "random",
    id: "10",
  },
  {
    img: "https://picsum.photos/1080/608?random=11",
    title: "random",
    id: "11",
  },
  {
    img: "https://picsum.photos/1080/1080?random=12",
    title: "random",
    id: "12",
  },
  {
    img: "https://picsum.photos/1080/1350?random=13",
    title: "random",
    id: "13",
  },
  {
    img: "https://picsum.photos/1080/608?random=14",
    title: "random",
    id: "14",
  },
  {
    img: "https://picsum.photos/1080/1080?random=15",
    title: "random",
    id: "15",
  },
  {
    img: "https://picsum.photos/1080/1350?random=16",
    title: "random",
    id: "16",
  },
  {
    img: "https://picsum.photos/1080/608?random=17",
    title: "random",
    id: "17",
  },
  {
    img: "https://picsum.photos/1080/1080?random=18",
    title: "random",
    id: "18",
  },
  {
    img: "https://i.pinimg.com/474x/bf/9c/2d/bf9c2d8a696b239f9ba8b746d89a54f6.jpg",
    title: "고양이",
    id: "49f52sfmtyv",
  },
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
    id: "agrjiuo",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    video: "",
    title: "Honey",
    id: "w46j",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    video: "",
    title: "Basketball",
    id: "w5k",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    video: "",
    title: "Breakfast",
    id: "2t4ed",
  },
  {
    img: "https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",
    video: "",
    title: "Tree",
    id: "jw654",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    video: "",
    title: "Burger",
    id: "g32y8u7t",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    video: "",
    title: "Camera",
    id: "h2t7u839",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    video: "",
    title: "Coffee",
    id: "gh938u",
  },
  {
    img: "https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",
    video: "",
    title: "Camping Car",
    id: "hgq9834o",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    video: "",
    title: "Hats",
    id: "29g73b",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    video: "",
    title: "Tomato basil",
    id: "2hg934hg",
  },
  {
    img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
    video: "",
    title: "Mountain",
    id: "434ghq43g",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    video: "",
    title: "Bike",
    id: "hgftfgrhy",
  },
];
