export default function handler(req, res) {
  let itemData = [
    {
      img: "https://i.pinimg.com/474x/d5/23/28/d5232868878e2c34cd3e577db23499e4.jpg",
      title: "바닷가 길",
      id: "0",
    },
    {
      img: "https://i.pinimg.com/474x/65/d5/d0/65d5d0547d4d0ba6abfd0cd6fd7d55ca.jpg",
      title: "고양이들",
      id: "1",
    },
    {
      img: "https://i.pinimg.com/474x/70/03/c4/7003c402f5ac8e35829d877e7ae6c937.jpg",
      title: "곰들",
      id: "2",
    },
    {
      img: "https://i.pinimg.com/474x/24/5d/7a/245d7a1e978337925ffbc11917ca20f6.jpg",
      title: "복층",
      id: "3",
    },
    {
      img: "https://i.pinimg.com/564x/f3/b6/f7/f3b6f76cf1066fc9eba5d881d870f2c6.jpg",
      title: "여성 패션",
      id: "4",
    },
    {
      img: "https://i.pinimg.com/474x/b5/e4/c3/b5e4c36ea06a8bb1d8965deab9431c08.jpg",
      title: "여성 카툰",
      id: "5",
    },
    {
      img: "https://i.pinimg.com/474x/7a/20/5d/7a205d932f8e09040616a911708808fe.jpg",
      title: "검은 고양이",
      id: "6",
    },
    {
      img: "https://i.pinimg.com/564x/a8/95/c9/a895c9ac5580e19212df20b41b7f9c38.jpg",
      title: "인스타 랜덤",
      id: "7",
    },
    {
      img: "https://i.pinimg.com/474x/a0/15/5c/a0155c5f676fc65a8dcb3044829ff19b.jpg",
      title: "판다",
      id: "8",
    },
    {
      img: "https://i.pinimg.com/474x/7c/9d/db/7c9ddb8bca74a96139878cc9ac1a3be7.jpg",
      title: "아이언 스파이더맨",
      id: "9",
    },
    {
      img: "https://i.pinimg.com/474x/8c/6d/88/8c6d8858fa08f3b2155c633e020d0151.jpg",
      title: "카툰, 비",
      id: "10",
    },
    {
      img: "https://i.pinimg.com/474x/88/7d/68/887d68d4cb7f1ff468e3102e6cac0d8e.jpg",
      title: "건물",
      id: "11",
    },
    {
      img: "https://i.pinimg.com/474x/41/47/3d/41473dd1e415e38c24112aeaaea6f0fa.jpg",
      title: "케이크",
      id: "12",
    },
    {
      img: "https://i.pinimg.com/474x/62/bc/80/62bc80ae557ba83fddb7819b03874a16.jpg",
      title: "창문",
      id: "13",
    },
    {
      img: "https://i.pinimg.com/736x/26/e4/58/26e458028c8a137134e4b1fdbdc3c99e.jpg",
      title: "아이유",
      id: "14",
    },
    {
      img: "https://i.pinimg.com/474x/49/33/c3/4933c385c018e65e09b94ab6128ad830.jpg",
      title: "고양이",
      id: "15",
    },
    {
      img: "https://i.pinimg.com/474x/87/6d/01/876d01744a978148da53274727798e9f.jpg",
      title: "카툰 소녀",
      id: "16",
    },
    {
      img: "https://i.pinimg.com/474x/74/10/33/7410332f759b2df41207f769e1e59dea.jpg",
      title: "짱구",
      id: "17",
    },
    {
      img: "https://i.pinimg.com/474x/10/b5/d9/10b5d9fcb65a75c3ecdbbd4fcd22e153.jpg",
      title: "키보드",
      id: "18",
    },
    {
      img: "https://i.pinimg.com/474x/bd/e6/d0/bde6d05bae9bc8619af9c0e600572819.jpg",
      title: "링크",
      id: "19",
    },
    {
      img: "https://i.pinimg.com/474x/38/89/c0/3889c068a98a5d228795fc71fe29e54e.jpg",
      title: "젤다",
      id: "20",
    },
    {
      img: "https://i.pinimg.com/474x/0a/46/79/0a467984d5bf3c4b775a54cfcffef846.jpg",
      title: "젤다의 전설",
      id: "21",
    },
    {
      img: "https://i.pinimg.com/564x/2d/e5/73/2de573aa77bdc952be8513f6b8eeb6de.jpg",
      title: "젤다의 전설 시련",
      id: "22",
    },
    {
      img: "https://i.pinimg.com/474x/3c/da/ce/3cdace33d082f6023231d9730fdb0cd6.jpg",
      title: "아이폰 배경화면",
      id: "23",
    },
    {
      img: "https://i.pinimg.com/474x/af/f6/93/aff693024bf14390de70e5baf86e5360.jpg",
      title: "아이폰 배경화면",
      id: "24",
    },
    {
      img: "https://i.pinimg.com/474x/b4/8f/06/b48f06327369118d754e20d01664b2b2.jpg",
      title: "아이폰 배경화면",
      id: "25",
    },
    {
      img: "https://i.pinimg.com/474x/d9/5a/e4/d95ae430ef0e35ae7271ef13f28bd76e.jpg",
      title: "아이폰 배경화면",
      id: "26",
    },
    {
      img: "https://i.pinimg.com/474x/f4/e8/7f/f4e87f6cf15a2acddc559acad3e0c4ee.jpg",
      title: "토끼",
      id: "27",
    },
    {
      img: "https://i.pinimg.com/474x/09/e9/06/09e9061f7d02df3e4fceed6369e9c20d.jpg",
      title: "등대",
      id: "28",
    },
    {
      img: "https://i.pinimg.com/originals/70/37/d4/7037d478852af21357f038fac2d2e9f6.gif",
      title: "타이핑",
      id: "29",
    },
    {
      img: "https://i.pinimg.com/474x/c7/99/62/c79962cd2a039f9f13056c6937256ec3.jpg",
      title: "요리",
      id: "30",
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
