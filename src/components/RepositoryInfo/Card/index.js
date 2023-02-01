import React from "react";
import { useState } from "react";
import Back from "./Back";
import Front from "./Front";

export default function CardDisplay({ repoDetails, isLoading }) {
  const [isFlipped, setisFlipped] = useState(false);

  const handleflip = async () => {
    setisFlipped(!isFlipped);
  };
  const handleflipBack = () => {
    setisFlipped(false);
  };

  return (
    <>
      {isFlipped ? (
        <Back
          name={repoDetails.name}
          handleflip={handleflipBack}
          fullName={repoDetails.full_name}
        />
      ) : (
        <Front
          name={repoDetails.name}
          repoDetails={repoDetails}
          handleflip={handleflip}
        />
      )}
    </>
  );
}
