import "./PageTitle.css";

function PageTitle(props: any) {
  return (
    <div className="page-title">
      <h2 className="page-title">{props.pageTitle}</h2>
    </div>
  );
}

export default PageTitle;
