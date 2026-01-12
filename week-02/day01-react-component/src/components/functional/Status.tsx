type StatusProps={
    isOnline: boolean;
};

const Status=({isOnline}:StatusProps)=>{
    return (
        <p>
            Status:{isOnline?"Online !!":"Offline"}
        </p>
    );
};
export default Status;