import React from "react";

const UserCard = (props) => {
    const {email,displayName,photoURL}=props.user
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photoURL}
            alt="User"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{displayName}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
