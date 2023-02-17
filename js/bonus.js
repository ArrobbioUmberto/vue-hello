const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            image: './img/boolean_logo.png',
            alt_image: 'image add from js'
        }
    }
}).mount('#app')