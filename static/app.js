const App = {
    data(){
        return{
            dbs: [],
            lists: [],
            objects: [],
            lists_ab:[],

        }
    },
    //TODO: методы туt
    methods:{
        getLists(id){
            this.lists = this.lists_ab.filter(x => x.father_id ===id)
            console.log(this.lists)
            for (const element of document.getElementsByClassName("list_item")){
                console.log("worked getElementsByClassName")
                element.addEventListener("click", setActiveClass_list);
            }
        }
        // async createServer(){
        //     const  data = {
        //         name: this.name,
        //         status: 'created'
        //     }
        //     const res = await fetch('/api/server',{
        //         method:'POST',
        //         headers:{
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     })
        //     this.name =''
        //     const newServer = await res.json()
        //     this.servers.push(newServer)
        // },
        // async remove(id){
        //     fetch('/api/server' + id,{
        //         method:'DELETE'})
        //     this.servers = this.servers.filter(s => s.id !== id)
        // }
    },

    async mounted(){
        let res = await fetch('/api/server')
        this.dbs = await res.json()
        res = await fetch('/api/server/lists')
        this.lists_ab = await res.json();
        console.log(this.lists)
        for (const element of document.getElementsByClassName("db_item")){
            console.log("worked getElementsByClassName")
            element.addEventListener("click", setActiveClass_db);
        }
    }
}

Vue.createApp(App).mount('#app')

//TODO : delete logs
console.log("app.js worked")

function setActiveClass_db(e) {
    for (const element of document.getElementsByClassName("db_item"))
        element.classList.remove("active")
    e.target.classList.add("active");
}

function setActiveClass_list(e) {
    for (const element of document.getElementsByClassName("list_item"))
        element.classList.remove("active")
    e.target.classList.add("active");
}