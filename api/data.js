export default function handler(req, res) {
  let itemData = [
    {
      img: "https://picsum.photos/1284/2778?random=6543895614978",
      title: "아이폰 배경",
      id: "2208",
    },
    {
      img: "https://i.pinimg.com/474x/55/33/65/55336531569bf9ec16b44bc771b3dd89.jpg",
      title: "2",
      id: "90acs39cp8b",
    },
    {
      img: "https://i.pinimg.com/474x/69/8f/0c/698f0c374be4c0a4f056ab25b6a8fe0a.jpg",
      title: "3",
      id: "3arlylu5iye",
    },
    {
      img: "https://i.pinimg.com/474x/f0/90/ed/f090ed4ce65f5e424508c9841cdb503a.jpg",
      title: "4",
      id: "w3i850c2z6",
    },
    {
      img: "https://i.pinimg.com/474x/c3/7a/cf/c37acfa1f79b4588394be2a1b02bc3aa.jpg",
      title: "5",
      id: "s3wse1h2j5",
    },
    {
      img: "https://picsum.photos/1080/1080?random=5743635412",
      title: "아이폰 배경",
      id: "mjgzmgxi42",
    },
    {
      img: "https://picsum.photos/1080/1080?random=57436123135412",
      title: "아이폰 배경",
      id: "5cml841w4ue",
    },
    {
      img: "https://i.pinimg.com/474x/da/9e/94/da9e9414ce3faea887e5575f92705efd.jpg",
      title: "8",
      id: "ur84oz8a4ng",
    },
    {
      img: "https://i.pinimg.com/474x/a3/45/13/a34513502b06f45bfbb2b106e0e883c4.jpg",
      title: "9",
      id: "pessajj9lhn",
    },
    {
      img: "https://i.pinimg.com/474x/63/f8/94/63f894ea8f027dff9941582ca19d43c8.jpg",
      title: "10",
      id: "a8zea1b30zv",
    },
    {
      img: "https://picsum.photos/1080/1080?random=5412",
      title: "아이폰 배경",
      id: "h1gfjif83b",
    },
    {
      img: "https://i.pinimg.com/474x/f4/8a/13/f48a13f945916e78b27b1563706a02df.jpg",
      title: "12",
      id: "kg5e7xibjbn",
    },
    {
      img: "https://i.pinimg.com/474x/55/f8/a6/55f8a615fd34356dccfd926e158f010d.jpg",
      title: "13",
      id: "rrfvdn5mfa",
    },
    {
      img: "https://picsum.photos/1080/1080?random=12",
      title: "아이폰 배경",
      id: "jrchjl1ew0s",
    },
    {
      img: "https://i.pinimg.com/474x/ed/bb/55/edbb55f3df12f1419865ac39dd2f38cd.jpg",
      title: "15",
      id: "4e0bdn7mkjd",
    },
    {
      img: "https://i.pinimg.com/474x/e9/b8/19/e9b8196ad2c7a53ed66eed0635047be6.jpg",
      title: "16",
      id: "6i1xh3tzxrk",
    },
    {
      img: "https://picsum.photos/1080/1080?random=4636453253",
      title: "17",
      id: "4r1lb44samf",
    },
    {
      img: "https://i.pinimg.com/474x/c1/c8/bd/c1c8bd4c27f00dd12c67971e81c7c32c.jpg",
      title: "18",
      id: "stnohwdf6s9",
    },
    {
      img: "https://i.pinimg.com/474x/22/8d/72/228d7275b43558c11042199d56e45718.jpg",
      title: "19",
      id: "lzug7kvcp1",
    },
    {
      img: "https://i.pinimg.com/474x/eb/72/63/eb72633411777235d4a12a766144050b.jpg",
      title: "20",
      id: "9ebnyh2ez4t",
    },
  ];
  // let itemData = [
  //   {
  //     img: "https://picsum.photos/1284/2778?random=6543895614978",
  //     title: "아이폰 배경",
  //     id: "2208",
  //   },
  //   {
  //     img: "https://picsum.photos/1080/1080?random=5743635412",
  //     title: "2",
  //     id: "90acs39cp8b",
  //   },
  //   {
  //     img: "https://picsum.photos/1080/608?random=3451321643",
  //     title: "3",
  //     id: "3arlylu5iye",
  //   },
  //   {
  //     img: "https://picsum.photos/1080/1350?random=236472455",
  //     title: "4",
  //     id: "w3i850c2z6",
  //   },
  //   {
  //     img: "https://picsum.photos/1080/608?random=467345234145",
  //     title: "5",
  //     id: "s3wse1h2j5",
  //   },
  //   {
  //     img: "https://picsum.photos/1284/2778?random=132512315",
  //     title: "아이폰 배경",
  //     id: "mjgzmgxi42",
  //   },
  //   {
  //     img: "https://picsum.photos/1284/2778?random=321562625",
  //     title: "아이폰 배경",
  //     id: "5cml841w4ue",
  //   },
  //   {
  //     img: "https://picsum.photos/1080/608?random=264231124",
  //     title: "8",
  //     id: "ur84oz8a4ng",
  //   },
  //   {
  //     img: "https://picsum.photos/1080/1080?random=2643221463",
  //     title: "9",
  //     id: "pessajj9lhn",
  //   },
  //   {
  //     img: "https://picsum.photos/1080/608?random=2645874343",
  //     title: "10",
  //     id: "a8zea1b30zv",
  //   },
  //   {
  //     img: "https://picsum.photos/1284/2778?random=125325134",
  //     title: "아이폰 배경",
  //     id: "h1gfjif83b",
  //   },
  //   {
  //     img: "https://picsum.photos/1080/608?random=246312413614",
  //     title: "12",
  //     id: "kg5e7xibjbn",
  //   },
  //   {
  //     img: "https://picsum.photos/1080/1080?random=13958712837",
  //     title: "13",
  //     id: "rrfvdn5mfa",
  //   },
  //   {
  //     img: "https://picsum.photos/1284/2778?random=298364729",
  //     title: "아이폰 배경",
  //     id: "jrchjl1ew0s",
  //   },
  //   {
  //     img: "https://picsum.photos/1080/608?random=235243674323",
  //     title: "15",
  //     id: "4e0bdn7mkjd",
  //   },
  //   {
  //     img: "https://picsum.photos/1080/1080?random=1351312",
  //     title: "16",
  //     id: "6i1xh3tzxrk",
  //   },
  //   {
  //     img: "https://picsum.photos/1080/1080?random=4636453253",
  //     title: "17",
  //     id: "4r1lb44samf",
  //   },
  //   {
  //     img: "https://picsum.photos/1080/608?random=437463532",
  //     title: "18",
  //     id: "stnohwdf6s9",
  //   },
  //   {
  //     img: "https://picsum.photos/1080/1080?random=57543436243",
  //     title: "19",
  //     id: "lzug7kvcp1",
  //   },
  //   {
  //     img: "https://picsum.photos/1284/2778?random=568452341",
  //     title: "아이폰 배경",
  //     id: "9ebnyh2ez4t",
  //   },
  // ];

  if (req.method === "GET") {
    // GET 로직
    // res.status(200).json(itemData);
    const page = parseInt(req.query.page) || 1; // 페이지 번호, 기본값은 1
    const limit = parseInt(req.query.limit) || 10; // 한 페이지당 항목 수, 기본값은 10
    const startIndex = (page - 1) * limit; //page : 1, limit : 2, 1*2
    const endIndex = page * limit; //page : 1, limit : 2, 2*2

    let paginatedItems = itemData.slice(startIndex, endIndex); //slice(2,4),

    res.status(200).json({ items: paginatedItems, page: page, limit: limit });
  } else if (req.method === "POST") {
    // POST 로직
    const newItem = req.body;
    itemData = [newItem, ...itemData];
    res.status(200).json(itemData);
  } else if (req.method === "DELETE") {
    //DELETE 로직
    const { id } = req.body;
    itemData = itemData.filter(item => item.id !== id);
    res.status(200).json(itemData);
  }
}
