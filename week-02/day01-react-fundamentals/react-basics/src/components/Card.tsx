type CardProps={
    name:string;
    description:string;
};

const Card=({ name, description}: CardProps)=>{
    return (
        <div style={{border: "1px solid gray",padding:"10px",margin:"10px"}}>
            <h3>{name}</h3>
            <p>{description}</p>


        </div>

    );
};

export default  Card;