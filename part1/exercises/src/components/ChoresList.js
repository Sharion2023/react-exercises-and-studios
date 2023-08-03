import classes from './ChoresList.module.css'

export default function ChoresList () {
   return (
      <div>
         <h2 className = {classes.choresHeading}>Chores To Do Today</h2>
            <ul className = {classes.choresText}>
               <li>laundry</li>
               <li>menu planning</li>
               <li> LaunchCode class/studio prep</li>
            </ul>
      </div>
   );
}