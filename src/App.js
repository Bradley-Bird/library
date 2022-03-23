import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>
        <Switch>
          <Route path="/books/:id">
            <BookDetail />
          </Route>
          <Route path="/books">
            <BookList />
          </Route>
          <Route path="/">
            <BookList />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
