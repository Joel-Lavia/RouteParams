import { Link } from "react-router-dom";

function BookShop() {
return(
    <div>
<h1>list of book shops</h1>
    <ul>
        <li>Book Shop & Stationery</li>
        <li>Simon books</li>
        <li>Dynamic Book home</li>
    </ul>
    <Link to={"/"}>Book</Link>
    </div>
)    
}
export default BookShop;