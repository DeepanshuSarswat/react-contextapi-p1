import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import NewBookForm from "./components/NewBookForm";
import BookContextprovider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextprovider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextprovider>
    </div>
  );
}

export default App;
