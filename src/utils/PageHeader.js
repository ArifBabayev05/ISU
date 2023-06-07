import "../style/pageHeader.css";

const Pageheader = (props) => {
  return (
    <>
      <div className="page-header" style={{ justifyContent:props.justifyContent, margin:props.margin }}>
        <h1 style={{ fontSize: props.size + 'px'}}>{props.header}</h1>
        <div></div>
      </div>
    </>
  );
};

export default Pageheader;
