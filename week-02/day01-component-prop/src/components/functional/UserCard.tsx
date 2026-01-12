type UserCardProps = {
    name: string;
    role: string;
  };
  
  const UserCard = ({ name, role }: UserCardProps) => {
    return (
      <div>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    );
  };
  
  export default UserCard;
  