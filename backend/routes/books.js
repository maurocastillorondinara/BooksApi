const { Router } = require('express');
const router = Router();
const Book = require('../models/book.js');
const { unlink } = require('fs-extra'); // modulo de node encargado de trabajar con archivos
const path = require('path');

router.get('/',async (req,res) => {
    const books = await Book.find();
    res.json(books);

}); //crea ruta con metodo get en la ruta principal (index.js) del backend

router.post('/', async (req,res)=>{
    const { title, author, isbn } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newBook = new Book({title, author, isbn, imagePath});
    await newBook.save(); //es un metodo asincrono por eso el await
    res.json({message: 'Book Saved'});
});

router.delete('/:id',async (req,res) => {
   const book = await Book.findByIdAndDelete(req.params.id);
   unlink(path.resolve('./backend/public' + book.imagePath));
    res.json({"message": "Book Deleted"});
});
module.exports = router;