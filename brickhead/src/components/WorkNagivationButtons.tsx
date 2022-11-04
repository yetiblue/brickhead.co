import "./WorkNavigationButtons.css";

function WorkNavigationButtons(props: any) {
  const pickCategory = (category) => {
    props.selectedCategory(category);
  };
  return (
    <div className="work-nav">
      <button
        onClick={() => {
          pickCategory("Branded");
        }}
        className="work-nav-text"
      >
        Branded
      </button>
      <button
        onClick={() => {
          pickCategory("Music Videos");
        }}
        className="work-nav-text"
      >
        Music Videos
      </button>
    </div>
  );
}

export default WorkNavigationButtons;
