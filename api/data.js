export default function handler(req, res) {
  if (req.method === "GET") {
    // GET 로직
    res.status(200).json(itemData);
  } else if (req.method === "POST") {
    // POST 로직
    const newItem = req.body;
    itemData = [newItem, ...itemData];

    res.status(200).json(itemData);
  } else if (req.method === "DELETE") {
    //DELETE 로직
    const { id } = req.body;
    itemData = itemData.filter(item => item.id !== id);
    res.status(200).json({ message: "사용자를 삭제했습니다!" });
  }
}

let itemData = [
  {
    img: "https://picsum.photos/1080/1350?random=6543895614978",
    title: "",
    id: "2208",
  },
  {
    img: "https://picsum.photos/1080/1080?random=5743635412",
    title: "",
    id: "90acs39cp8b",
  },
  {
    img: "https://picsum.photos/1080/608?random=3451321643",
    title: "",
    id: "3arlylu5iye",
  },
  {
    img: "https://picsum.photos/1080/1350?random=236472455",
    title: "",
    id: "w3i850c2z6",
  },
  {
    img: "https://picsum.photos/1080/608?random=467345234145",
    title: "",
    id: "s3wse1h2j5",
  },
  {
    img: "https://picsum.photos/1080/1080?random=132512315",
    title: "",
    id: "mjgzmgxi42",
  },
  {
    img: "https://picsum.photos/1080/1350?random=321562625",
    title: "",
    id: "5cml841w4ue",
  },
  {
    img: "https://picsum.photos/1080/608?random=264231124",
    title: "",
    id: "ur84oz8a4ng",
  },
  {
    img: "https://picsum.photos/1080/1080?random=2643221463",
    title: "",
    id: "pessajj9lhn",
  },
  {
    img: "https://picsum.photos/1080/608?random=2645874343",
    title: "",
    id: "a8zea1b30zv",
  },
  {
    img: "https://picsum.photos/1080/1350?random=125325134",
    title: "",
    id: "h1gfjif83b",
  },
  {
    img: "https://picsum.photos/1080/608?random=246312413614",
    title: "",
    id: "kg5e7xibjbn",
  },
  {
    img: "https://picsum.photos/1080/1080?random=13958712837",
    title: "",
    id: "rrfvdn5mfa",
  },
  {
    img: "https://picsum.photos/1080/1350?random=298364729",
    title: "",
    id: "jrchjl1ew0s",
  },
  {
    img: "https://picsum.photos/1080/608?random=235243674323",
    title: "",
    id: "4e0bdn7mkjd",
  },
  {
    img: "https://picsum.photos/1080/1080?random=1351312",
    title: "",
    id: "6i1xh3tzxrk",
  },
  {
    img: "https://picsum.photos/1080/1080?random=4636453253",
    title: "",
    id: "4r1lb44samf",
  },
  {
    img: "https://picsum.photos/1080/608?random=437463532",
    title: "",
    id: "stnohwdf6s9",
  },
  {
    img: "https://picsum.photos/1080/1080?random=57543436243",
    title: "",
    id: "lzug7kvcp1",
  },
  {
    img: "https://picsum.photos/1080/1350?random=568452341",
    title: "",
    id: "9ebnyh2ez4t",
  },
  {
    img: "https://picsum.photos/1080/608?random=6845234",
    title: "",
    id: "ezha9fdqj7",
  },
  {
    img: "https://picsum.photos/1080/1080?random=13634125",
    title: "",
    id: "6wbsj23r3vq",
  },
  {
    img: "https://picsum.photos/1080/1350?random=34634123125",
    title: "",
    id: "601vw311b7s",
  },
  {
    img: "https://picsum.photos/1080/608?random=135234123",
    title: "",
    id: "oh6qhml0eo9",
  },
  {
    img: "https://picsum.photos/1080/1080?random=24624134",
    title: "",
    id: "xabg06l1s8t",
  },
  {
    img: "https://picsum.photos/1080/1350?random=263412312",
    title: "",
    id: "eoq58gtqb4e",
  },
  {
    img: "https://picsum.photos/1080/608?random=1241235123",
    title: "",
    id: "gm938wf5d1e",
  },
  {
    img: "https://picsum.photos/1080/1080?random=246245231",
    title: "",
    id: "z5ar6bt9al",
  },
  {
    img: "https://picsum.photos/1080/1350?random=742353124",
    title: "",
    id: "d4v1wq9tcag",
  },
  {
    img: "https://picsum.photos/1080/608?random=24632341",
    title: "",
    id: "wlypkqtn1g",
  },
  {
    img: "https://picsum.photos/1080/1080?random=24672345132",
    title: "",
    id: "7isb8e6rc3w",
  },
  {
    img: "https://picsum.photos/1080/1350?random=35734234",
    title: "",
    id: "4bivbqc73qg",
  },
  {
    img: "https://picsum.photos/1080/608?random=35463513",
    title: "",
    id: "246c2g5zti8",
  },
  {
    img: "https://picsum.photos/1080/1080?random=153231521",
    title: "",
    id: "d7gmwsnptlq",
  },
  {
    img: "https://picsum.photos/1080/1350?random=64234432",
    title: "",
    id: "ser6e4a9wqb",
  },
  {
    img: "https://picsum.photos/1080/608?random=3546342",
    title: "",
    id: "0rpk1b4lz3ce",
  },
  {
    img: "https://picsum.photos/1080/1080?random=4675234",
    title: "",
    id: "swth923nqmh",
  },
  {
    img: "https://picsum.photos/1080/1350?random=65653454",
    title: "",
    id: "pkl267pdh9m",
  },
  {
    img: "https://picsum.photos/1080/608?random=3642",
    title: "",
    id: "qa2oskctlf",
  },
  {
    img: "https://picsum.photos/1080/1080?random=72435324",
    title: "",
    id: "o801vq3haom",
  },
  {
    img: "https://picsum.photos/1080/1350?random=4662454132",
    title: "",
    id: "e6okk82p4nv",
  },
  {
    img: "https://picsum.photos/1080/608?random=6647653",
    title: "",
    id: "jggoh5s54oq",
  },
  {
    img: "https://picsum.photos/1080/1080?random=757543564",
    title: "",
    id: "j1yfafv2l07",
  },
  {
    img: "https://picsum.photos/1080/1350?random=7624335",
    title: "",
    id: "zypnqotmcwq",
  },
  {
    img: "https://picsum.photos/1080/608?random=77564325",
    title: "",
    id: "g2zfz6b044d",
  },
  {
    img: "https://picsum.photos/1080/1080?random=566454145",
    title: "",
    id: "kbnbpe8x9x",
  },
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
];
