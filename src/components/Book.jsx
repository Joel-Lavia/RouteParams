import { Link } from "react-router-dom";
import Book from "../Data/Book";

function Boook() {
  return (
    <div>
      {/* <ul>
        <ol>
          77 Ways get to more customers By: <i>Ubuy</i>
        </ol>
        <ol>
          Authenticity By: <i>Emanuel Rose</i>{" "}
        </ol>
        <ol>
          {" "}
          Change Your thinking change your life By: <i>Brian Tracy</i>
        </ol>
        <Link to={"/BookShop"}>BookShop</Link>
        <Link to={"published/itemId"}>Published</Link>
      </ul> */}
      {Book.map((Book) => (
          <div>
            <p>
              <Link to={`newbooks/${Book.id}`}>{Book.title}</Link>
            </p>
          </div>
        ))}
    </div>
  );
}
export default Boook;
