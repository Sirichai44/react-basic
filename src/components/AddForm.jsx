import React from 'react'
import './AddForm.css'
import { useState } from 'react'

const AddForm = (props) => {
    const {students,setStudent} = props
    const [name,setName] = useState("");
    const [gender,setGender] = useState("male");

    function saveStudent(e){
        e.preventDefault();
        if(!name){
            alert("กรุณาป้อนข้อมูล");
        }else{
            const newStudent = {
                id:Math.floor(Math.random()*1000),
                name:name,
                gender:gender
            }
            // console.log(newStudent);
            setStudent([...students,newStudent]);
            setName("");
            setGender("male")
        }
    }

  return (
    <section className="container">
        <form onSubmit={saveStudent}>
            <label>ชื่อนักเรียน</label>
            <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} />
            <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option value="male">ชาย</option>
                <option value="female">หญิง</option>
            </select>
            <button type='submit' className='btn-add'>บันทึก</button>
        </form>
    </section>
  )
}

export default AddForm