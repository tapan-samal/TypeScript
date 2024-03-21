import React from "react";

interface ProfileDetalisType {
  details: {
    firstName: string;
    lastName: string;
    isPlaying: boolean;
    score: number;
  };
}

const ObjectType = (props: ProfileDetalisType) => {
  return (
    <>
      <h2>2. Object Types: </h2>
      <div>First Name: {props.details.firstName}</div>
      <div>Last Nmae: {props.details.lastName}</div>
      <div>
        {props.details.isPlaying ? (
          <>Score: {props.details.score}</>
        ) : (
          <>"Not Playing"</>
        )}{" "}
      </div>
    </>
  );
};

export default ObjectType;
