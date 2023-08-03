export default function HobbyLinks(){
    let hobbyLinks = ["https://www.maesmilesandmusic.com/is-running-a-hobby/","https://www.onepeloton.com/" ]
    return (
    <div>
        <h2>My Hobbies</h2>
        <ol>
            <li><a href = {hobbyLinks[0]}>Running</a></li>
            <li><a href = {hobbyLinks[1]}>Peloton</a></li>
        </ol>
    </div>)
}