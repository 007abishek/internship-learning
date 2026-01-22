import Item from "./Item";
export default function Page() {
  return (
    <div>
      <Item
        title="A - Apple - Fruit"
        image="https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
      />
      <Item
        title="L - Lion - Wild Animal"
        image="https://images.unsplash.com/photo-1546182990-dffeafbe841d"
      />
      <Item
        title="C - Cat - Animal"
        image="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
      />
    </div>
  );
}