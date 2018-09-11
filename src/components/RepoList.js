import React from "react";

const RepoList = ({ repos: { isFetching, items } }) => {
  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!items.length) {
    return <div>No repos found.</div>;
  }

  return (
    <div>
      {items.map(item => {
        return <h2 key={item.id}>{item.name}</h2>;
      })}
    </div>
  );
};

export default RepoList;
