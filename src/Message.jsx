import React from "react";

export default function Message({ person }) {
  if (person === "chris")
    return (
      <>
        <h1>Chris, we gaan je missen</h1>
      </>
    );
  if (person === "jago")
    return (
      <>
        <h1>Jago, we gaan je missen</h1>
      </>
    );
  if (person === "boyan")
    return (
      <>
        <h1>Boyan, we gaan je missen</h1>
      </>
    );
  if (person === "nathalie")
    return (
      <>
        <h1>Nathalie, we gaan je missen</h1>
      </>
    );
}
