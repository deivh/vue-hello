function initVue() {
    new Vue({
        el: '#app', 
        data: {
            'content': 'ciao mondo'
        },
        methods: { 
            printHello: function() {
                this.content = `
                    Hello ${this.content} 
                `;
            }
        }
    });
}

function init() {
    initVue();
    // initJQuery();
}
$(init);