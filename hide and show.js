// JavaScript source code

const app = {
    data() {
        return {
            visible: true
        }
    },
    methods: {
        hide() {
            return this.visible = false
        },
        show() {
            return this.visible = true
        }
    }
}

Vue.createApp(app).mount('#root')