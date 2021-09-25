import "./RecentlyAdded.css";

let RecentlyAdded = props => {
  return (
    <div className="recent">
      <h1>Food Details...</h1>
      <p>{props.selectedFood.strMeal}</p>
    </div>
  );
};

export default RecentlyAdded;
