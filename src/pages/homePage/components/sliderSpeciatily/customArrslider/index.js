export const SampleNextArrow =(props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: "50%", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
 export const SamplePrevArrow =(props) =>{
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", borderRadius: "50%", background: "green" }}
        onClick={onClick}
      />
    );
  }