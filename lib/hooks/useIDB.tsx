//@ts-nocheck
import { useEffect, useState, useRef } from 'react'
import { Book } from '../types';
export default function useIDB() {
    const [books, setBooks] = useState<Book[]>([]);
    const db = useRef<IDBDatabase | null>(null);

    useEffect(() => {
        if (!window.indexedDB) window.alert("Your browser doesn't support a stable version of IndexedDB.")
        db.current = window.indexedDB.open('testDB')
        if (db.current) {
            db.current.onsuccess = function (event: any) {
                db.current = event.target.result;
                console.log('Connection is established. DB is: ', db)
                getAllBooks()
                // getBooksByAuthor('me')
            }
    
            db.current.onerror = function (event: any) {
                console.log('Error is: ', event.target.error);
            }
    
            db.current.onupgradeneeded = function (event: any) {
                db.current = event.target.result;
    
                if (db.current) {
                    const books = db.current.createObjectStore('books', {
                        keyPath: 'id',
                        autoIncrement: true
                    })
                    console.log('upgraded db', db)
                    books.createIndex('title', 'title', {
                        unique: true
                    })
                    books.createIndex('author', 'author', {
                        unique: false
                    })
    
                    books.add({
                        author: 'me',
                        title: 'bookA'
                    })
                    books.add({
                        author: 'you',
                        title: 'bookB'
                    })
                }
            }
    
            db.current.onblocked = function (event) {
                console.log('You havent closed prev connection to perform an update of db verstion!')
            }
        }
        return () => window.indexedDB.deleteDatabase('testDB')
    }, [db])


    function getAllBooks() {
        const books: Book[] = []
        if (db.current) db.current.transaction("books").objectStore("books").openCursor().onsuccess = (event: any) => {
            const cursor = event.target.result
            if (cursor) {
                console.log(cursor.value)
                books.push(cursor.value)
                cursor.continue()
            } else setBooks(books)
        }
    }

    // function getBooksByAuthor(author) {
    //   const index = db.transaction("books").objectStore("books").index('author').getAll('me').onsuccess = event => {
    //     console.log(event.target.result)
    //   }
    // }

    return {
        books
    }
}