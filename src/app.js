import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            items: ['1', '1'],
            newItem: ""
        },
        methods: {
            saveNewItem: function(){
                this.items.push(this.newItem);
                this.newItem = "";
            }
        }
    })

})