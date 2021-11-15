// Start by creating vue app
const app = Vue.createApp({
    // creating route components
    // data, functions
    //template: '<h2>I am the template</h2>'
    // first create function, and return data from that function
    data() {
        return {
            url: "http://www.thenetninja.co.uk",
            showBooks: true,
            // title: 'The Final Empire',
            // author: 'Brandon Sanderson',
            // age: 45,

            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: '/assets/1.jpg', isFav: false },
                { title: 'the way of kings', author: 'brandon sanderson', img: '/assets/2.jpg', isFav: false  },
                { title: 'the final empire', author: 'brandon sanderson', img: '/assets/3.jpg', isFav: false  },
            ],

            x: 0,
            y: 0
        }
    },
   
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },

        toggleFav(book) {
                book.isFav = !book.isFav;
        },

        handleEvent(e, data) {
            console.log(e)
            console.log(e.type)
            if (data) {
                console.log(data)
            }
        },

        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY

        }
    }
    /*
    methods: {
        changeTitle(title) {
            console.log('you clicked me')
            this.title = title
        }
    }
    */
})

// now we need to control certain part of webpage
app.mount('#app')