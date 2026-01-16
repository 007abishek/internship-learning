const Avatar = ({ name }) => {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "#4f46e5",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
      }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
