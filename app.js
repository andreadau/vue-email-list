/*
Istruzioni:
Genera 10 mail tramite api e stampale in una lista
Usate Vue e Axios.
La richiesta AJAX per gli indirizzi email inviatela al seguente link:
https://flynn.boolean.careers/exercises/api/random/mail
La lista di email va stampata a schermo nella pagina html
*/

let vm = new Vue({
    el: "#app",
    data: {
        userEmails:[],
    },
    methods: {
        getEmail(){
            for (let i = 0; i < 10; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                let userEmail = response.data.response;
                this.userEmails.push(userEmail);
            }).catch(error => {
                console.log("error in the API");
                console.log(error);
            });
            }
        }
    },
    mounted(){
        this.getEmail();
    }
});