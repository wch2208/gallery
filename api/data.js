export default function handler(req, res) {
  let itemData = [
    {
      img: "https://i.pinimg.com/474x/d5/23/28/d5232868878e2c34cd3e577db23499e4.jpg",
      title: "바닷가 길",
      id: "0",
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
