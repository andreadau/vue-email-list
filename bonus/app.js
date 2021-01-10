/*
Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato
*/

let vm = new Vue({
    el: "#app",
    data: {
      rows: 6,
      cells: 6,
      table: [],
    },
    methods: {
        gridGen(){
            for (let i = 0; i < this.rows; i++) {
                this.table.push([]);
                    for (let j = 0; j < this.cells; j++) {
                        this.table[i].push({num:""});
                    }
            }
        },
        getRandomNum(r,c){
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/int")
                .then(response => {
                    let randomNum = response.data.response;
                    this.table[r][c].num = randomNum;
                }).catch(error => {
                    console.log("error in the API");
                    console.log(error);
                });        
        }
    },
    mounted(){
        this.gridGen();
    }
})