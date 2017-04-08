<template>
    <div class="activity text-center">
        <h1>{{title}}</h1>
        <li v-for="activity in activities">
            <h2>{{activity.name}}</h2>
            <p>{{activity.description}}</p>
        </li>
    </div>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
                title: 'All Activities',
                activities: []
            }
        },

        created:function(){
            //When you want to make a get request use this method and put the url u want to use
            this.$http.get('http://localhost:8080/activities')
            .then(function(response){
            this.activities = response.data.data[0].Activities;
            console.log(this.activities[0].name);
            })
        }
    }
</script>

<style scoped>

</style>