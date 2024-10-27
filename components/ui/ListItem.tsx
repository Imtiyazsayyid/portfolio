import React from "react";

const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <li className="list-item"></li>
      <p>{children}</p>
    </div>
  );
};

export default ListItem;
