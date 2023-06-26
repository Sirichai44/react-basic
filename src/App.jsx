import "./App.css";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import { useState } from "react";
import AddForm from "./components/AddForm";

function App() {

  const [students, setStudent] = useState([
    {id:1,name:"boy",gender:"male"},
    {id:2,name:"girl",gender:"female"},
  ]);

  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }

  return (
    <div className="App">
      <Header title="Home" />
      <main>
        <AddForm students={students} setStudent={setStudent} />
        <StudentList students={students} deleteStudent={deleteStudent} />
      </main>
    </div>
  );
}

export default App;
