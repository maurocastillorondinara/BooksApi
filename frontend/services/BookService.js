class BookService{
    constructor(){
        this.URI = '/api/books'
    }
//Devuelve todos los Libros
    async getBooks(){
       const response = await fetch(this.URI);
       const books = await response.json();
       return books;
    }
//Agrega Libros
   async postBook(book){
       const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
    }
//Borra libros
   async deleteBook(bookId){
       const res = await fetch(`${this.URI}/${bookId}`,{
            headers:{
                'Content-type': 'aplication/json'
            },
            method: 'DELETE'
        });
      const data = await res.json();
    }
}

export default BookService;