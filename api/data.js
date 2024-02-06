export default function handler(req, res) {
  let itemData = [
    {
      img: "https://i.pinimg.com/474x/d5/23/28/d5232868878e2c34cd3e577db23499e4.jpg",
      title: "바닷가 길",
      id: "0",
    },
    {
      img: "https://i.pinimg.com/474x/7f/42/63/7f4263469a22734e4730bc1ac684198c.jpg",
      title: "고양이",
      id: "1",
    },
    {
      img: "https://i.pinimg.com/474x/1e/6f/c9/1e6fc99a3850bf59d91dd695daafd0bd.jpg",
      title: "책장",
      id: "2",
    },
    {
      img: "https://i.pinimg.com/474x/38/20/56/382056b2c103113b1ebb1191a90d803a.jpg",
      title: "가구",
      id: "3",
    },
    {
      img: "https://i.pinimg.com/474x/af/8a/cf/af8acfd552d8fd95cd0e86dcbefc865a.jpg",
      title: "어린양",
      id: "4",
    },

    {
      img: "https://i.pinimg.com/474x/9e/99/4a/9e994ae81ba983ac9069667d6d965ab7.jpg",
      title: "트리",
      id: "5",
    },
  ];

  if (req.method === "GET") {
    // GET 로직
    // res.status(200).json(itemData);
    const page = parseInt(req.query.page) || 1; // 페이지 번호, 기본값은 1
    const limit = parseInt(req.query.limit) || 10; // 한 페이지당 항목 수, 기본값은 10
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let paginatedItems = itemData.slice(startIndex, endIndex);

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
