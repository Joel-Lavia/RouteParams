import { useParams } from "react-router-dom";
import Book from "../Data/Book";

function FavBooks() {
  const { BookId } = useParams();
  const newFavBook = Book.find((Book) => Book.id === BookId);
  if (!newFavBook) {
    <p>{`This page doesn't contain fav Books`}</p>;
  }
  return (
    <div>
      {newFavBook && (
        <div>
          <p>{`Title : ${newFavBook.title}`}</p>
          <p>{`Author : ${newFavBook.author}`}</p>
          <p>{`Year : ${newFavBook.year}`}</p>
          <p>{`Description : ${newFavBook.description}`}</p>
        </div>
      )}
    </div>
  );
}
export default FavBooks;
