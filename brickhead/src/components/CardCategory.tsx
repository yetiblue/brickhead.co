import "./CardCategory.css";
function CardCategory(props: any) {
  return (
    <div className="category-wrapper">
      <p className="category-type">{props.categoryName}</p>
      {/* <p>{props.title}</p> */}
    </div>
  );
}

export default CardCategory;
