const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [{ title: "Harry Potter", author: "James", img: "assets/s1.png", isFav: true }, { title: "The Alchemist", author: "Paulo", img: "assets/s2.png", isFav: false }, { title: "Solo leveling", author: "Hunter", img: "assets/s3.png", isFav: true }],
            buttonName: "Hide Text",
            x: 0,
            y: 0,
        }
    },
    methods: {
        textToggle() {
            this.showBooks = !this.showBooks;
            this.buttonName = !this.showBooks ? "Show Books" : "Hide Books";
        },
        handleEvent(e) {
            console.log(e, e.type);
        },
        favBook(book) {
            book.isFav = !book.isFav;
        },
    },
    computed: {
        filterBooks() {
            return this.books.filter((book) => book.isFav);
        }
    }
})

app.mount('#app');