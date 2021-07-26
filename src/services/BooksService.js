import React from 'react'
import axios from 'axios'

const book_API_BASE_URL = "http://localhost:8080/api/v1/books"
class BookService{

    getBooks(){
        return axios.get(book_API_BASE_URL);
    }
}

export default new BookService()