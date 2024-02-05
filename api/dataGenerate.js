const size = ["1284/2778", "1080/1080", "1080/608"];
for (let i = 0; i < 500; i++) {
  let num = Math.floor(Math.random() * 100);
  let currentSize = size[i % size.length];
  console.log(`{
    img: "https://picsum.photos/id/${num}/${currentSize}",
    title: "${num}",
    id: "${i}",
  },`);
}
