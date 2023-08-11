import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label: "salads", value: "salads"} ,{label: "summer", value: "summer"}, {label: "light" , value: "light"}];
   const[boardName, setName] = useState('no board yet!')
   const handleChange = (event) => {
      setName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((boards) => <option value = {boards.value} >{boards.label}</option>)}
      </select>

      
      <p>Saved to {boardName}!</p>
      </div>
   );
}