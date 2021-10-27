// Start by creating vue app
const app = Vue.createApp({
    // creating route components
    // data, functions
    //template: '<h2>I am the template</h2>'
    // first create function, and return data from that function
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0
        }
    },
   
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
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