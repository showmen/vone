const app = Vue.createApp({
    data(){
        return {
            name : 'Showmen',
            age : 2,
            ageStatus : 'Unknown'
        }
    },
    methods: {
        increaseAge(){
            this.age = this.age + 2;
            if(this.age >= 0 && this.age <= 10){
                this.ageStatus = 'Child'
            }
            if(this.age > 10 && this.age <= 18){
                this.ageStatus = 'Teen'
            }
            if(this.age > 18){
                this.ageStatus = 'Adult'
            }
            
        }
    }
})

app.mount('#app')