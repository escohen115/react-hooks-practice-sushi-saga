import React from "react";

function Table({ plates, userMoney}) {
  
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${userMoney} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {emptyPlates}
          </div>
      </div>
    </>
  );
}

export default Table;
