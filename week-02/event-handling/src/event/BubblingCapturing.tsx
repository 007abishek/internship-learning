const BubblingCapturing = () => {
    const parentClick = () => {
      console.log("Parent clicked");
    };
  
    const childClick = () => {
      console.log("Child clicked");
    };
  
    return (
      <div onClick={parentClick} style={{ padding: "20px", border: "2px solid blue" }}>
        Parent
        <button onClick={childClick} style={{ marginLeft: "10px" }}>
          Child
        </button>
      </div>
    );
  };
  
  export default BubblingCapturing;
  