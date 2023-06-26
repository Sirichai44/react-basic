import React, { useState } from "react";
import "./StudentList.css";
import Item from "./Item"

const StudentList = (props) => {
  const {students, deleteStudent} = props

  const [show, setShow] = useState(true);
  const btnStyle = {
    background:show ?"purple" : "green"
  }

  return (
    <>
      <ul>
        <div className="header">
          <h1 style={{ color: "purple" }}>
            จำนวนนักเรียน = {students.length} style
          </h1>
          <button onClick={() => setShow(!show)} style={btnStyle}>{show ?"ซ่อน" : "แสดง"}</button>
        </div>
        {show &&
          students.map((data) => (
            <Item key={data.id} data={data} deleteStudent={deleteStudent} />
          ))}
      </ul>
    </>
  );
};

export default StudentList;
