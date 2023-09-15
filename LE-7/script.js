document.addEventListener("DOMContentLoaded",function () {
    const fetchBooksButton = document.getElementById("fetchBooks");
    const bookList = document.getElementById("bookList");

    fetchBooksButton.addEventListener("click", function () {
        // Make an AJAX request to fetch JSON data
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=6oUTa3VnwJnuIsZqyG7yw1qLAP3Nnv0H", true); // Replace with your API URL
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const booksData = JSON.parse(xhr.responseText);
                displayBooks(booksData);
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
                bookList.innerHTML = "Failed to fetch books.";
            }
        };

        xhr.send();
    });

    function displayBooks(booksData) {
        console.log(booksData["results"]["books"]);
        let bookHTML = "<ul>";

        for (const book of booksData["results"]["books"]) {
            bookHTML += `<li>${book.title} by ${book.author}</li>`;
        }

        bookHTML += "</ul>";
        bookList.innerHTML = bookHTML;
    }
});
