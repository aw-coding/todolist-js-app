import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el:"#app",
        data: {
            todoItems: ['1', '1'],
            newItem: ""
        }
    })

})