import React from "react";

const CommitTableRow = ({ key, index, fields }) => {
  const { Title, Username, Hash, DateCreated } = fields;
  return (
    <tr key={Title}>
      <td>{Title}</td>
      <td>{Username}</td>
      <td>{Hash}</td>
      <td>{DateCreated}</td>
    </tr>
  );
};

export default CommitTableRow;
