import data from './..//data.json'
import { useState } from 'react'

export default function MyProjects(){
    const [index,setIndex] = useState(0);
    const fakeHobby = data;
    const indexedFake = fakeHobby.projects[index]

    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }


    return(
        <>
        <button onClick= {handleClick}>
            Next
        </button>
        <p>
            <li>{indexedFake.canvas}</li>
            <li>{indexedFake.designer}</li>
            <li><img src = {indexedFake.photoUrl} alt = {indexedFake.alt}/></li>
            <li>{indexedFake.alt}</li>
            
        </p>
        </>
        
    )
}