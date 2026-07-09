package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String bookName) {
        System.out.println("Service: adding book...");
        bookRepository.addBook(bookName);
    }

    public void getBook(String bookName) {
        System.out.println("Service: fetching book...");
        bookRepository.getBook(bookName);
    }
}