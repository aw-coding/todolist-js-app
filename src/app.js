import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            items: [
                {name: 'Do shoppping', priority: 3},
                {name: 'Clean shower', priority: 4},
                {name: 'Finish boring book', priority: 1}
            ],
            newItem: "",
            newItemPriority: ""
        },
        methods: {
            saveNewItem: function(){
                this.items.push({name:this.newItem, priority:this.newItemPriority});
                this.newItem = "";
                this.newItemPriority = "";
            }
        }
    })

})