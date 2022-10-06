import { useGetBooksQuery } from "./booksApiSlice"
import { Link } from "react-router-dom";

const BooksList = () => {
    const {
        data: books,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetBooksQuery()
 
    let content;
    if (isLoading) {
        content = <p>"Loading..."</p>;
    } else if (isSuccess) {
        content = (
            <section className="books">

                <p><Link to="/welcome">Go to the Books List</Link></p>
                <h1>Books List</h1>
                <ul>
                    {books.data.map((book, i) => {
                        return <li key={i}>{book.title}</li>
                    })}
                </ul>
                <Link to="/welcome">Back to Welcome</Link>
            </section>
        )
    } else if (isError) {
        content = <p>{JSON.stringify(error)}</p>;
    }

    return content
}
export default BooksList