export default function handler(req, res) {
  let itemData = [
    {
      img: "https://picsum.photos/1284/2778?random=6543895614978",
      title: "아이폰 배경",
      id: "2208",
    },
    {
      img: "https://picsum.photos/1080/1080?random=5743635412",
      title: "2",
      id: "90acs39cp8b",
    },
    {
      img: "https://picsum.photos/1080/608?random=3451321643",
      title: "3",
      id: "3arlylu5iye",
    },
    {
      img: "https://picsum.photos/1080/1350?random=236472455",
      title: "4",
      id: "w3i850c2z6",
    },
    {
      img: "https://picsum.photos/1080/608?random=467345234145",
      title: "5",
      id: "s3wse1h2j5",
    },
    {
      img: "https://picsum.photos/1284/2778?random=132512315",
      title: "아이폰 배경",
      id: "mjgzmgxi42",
    },
    {
      img: "https://picsum.photos/1284/2778?random=321562625",
      title: "아이폰 배경",
      id: "5cml841w4ue",
    },
    {
      img: "https://picsum.photos/1080/608?random=264231124",
      title: "8",
      id: "ur84oz8a4ng",
    },
    {
      img: "https://picsum.photos/1080/1080?random=2643221463",
      title: "9",
      id: "pessajj9lhn",
    },
    {
      img: "https://picsum.photos/1080/608?random=2645874343",
      title: "10",
      id: "a8zea1b30zv",
    },
    {
      img: "https://picsum.photos/1284/2778?random=125325134",
      title: "아이폰 배경",
      id: "h1gfjif83b",
    },
    {
      img: "https://picsum.photos/1080/608?random=246312413614",
      title: "12",
      id: "kg5e7xibjbn",
    },
    {
      img: "https://picsum.photos/1080/1080?random=13958712837",
      title: "13",
      id: "rrfvdn5mfa",
    },
    {
      img: "https://picsum.photos/1284/2778?random=298364729",
      title: "아이폰 배경",
      id: "jrchjl1ew0s",
    },
    {
      img: "https://picsum.photos/1080/608?random=235243674323",
      title: "15",
      id: "4e0bdn7mkjd",
    },
    {
      img: "https://picsum.photos/1080/1080?random=1351312",
      title: "16",
      id: "6i1xh3tzxrk",
    },
    {
      img: "https://picsum.photos/1080/1080?random=4636453253",
      title: "17",
      id: "4r1lb44samf",
    },
    {
      img: "https://picsum.photos/1080/608?random=437463532",
      title: "18",
      id: "stnohwdf6s9",
    },
    {
      img: "https://picsum.photos/1080/1080?random=57543436243",
      title: "19",
      id: "lzug7kvcp1",
    },
    {
      img: "https://picsum.photos/1284/2778?random=568452341",
      title: "아이폰 배경",
      id: "9ebnyh2ez4t",
    },
  ];

  if (req.method === "GET") {
    // GET 로직
    // res.status(200).json(itemData);
    const page = parseInt(req.query.page) || 1; // 페이지 번호, 기본값은 1
    const limit = parseInt(req.query.limit) || 10; // 한 페이지당 항목 수, 기본값은 10
    const startIndex = (page - 1) * limit; //page : 1, limit : 2, 1*2
    const endIndex = page * limit; //page : 1, limit : 2, 2*2

    let paginatedItems = itemData.slice(startIndex, endIndex); //slice(2,4),
    res.status(200).json(paginatedItems, page, limit);
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
