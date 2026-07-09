package com.library.repository;

public class BookRepository {

    public void addBook(String bookName) {
        System.out.println("Book added to repository: " + bookName);
    }

    public void getBook(String bookName) {
        System.out.println("Fetching book from repository: " + bookName);
    }
}