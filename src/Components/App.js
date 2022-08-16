import React from 'react'
import BookList from './BookList';
import Book from './Book';
import BookContextProvider from '../Context/BookContext';
import ThemeContextProvider from '../Context/ThemeContext';


class App extends React.Component {





    render() {

        return (

            <ThemeContextProvider>
                <BookContextProvider>
                    <BookList />
                </BookContextProvider>
            </ThemeContextProvider>
        )

    }

}

export default App;