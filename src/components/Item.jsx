import React from "react";
import './Item.css';

const Item = (props) => {
    const {data,deleteStudent} = props;

  return (
    <>
      <li key={data.id} className={data.gender}>
        <h1>
          {data.id} - {data.name}
        </h1>
        <button onClick={() => deleteStudent(data.id)} className="delete">
          Delete
        </button>
      </li>
    </>
  );
};

export default Item;
