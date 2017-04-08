<template>
    <div class="business text-center">
        <h1>{{title}}</h1><hr>
        <li v-for="business in businesses">
            <h1>Business: <strong>{{business.name}}</strong></h1>
            <p>Status: {{business.approved}}</p>
        </li>
    </div>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
                title: 'All Businesses',
                businesses: []
            }
        },

        created:function(){
            //When you want to make a get request use this method and put the url u want to use
            this.$http.get('http://localhost:8080/businesses')
            .then(function(response){
            this.businesses = response.data.data[0];
            console.log(this.businesses[0].name);
            })
        }
    }
</script>

<style scoped>

</style>