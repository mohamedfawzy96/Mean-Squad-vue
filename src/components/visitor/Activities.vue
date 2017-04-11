<template>
    <div class="activity text-center" id="activity">
        <h1>{{title}}</h1>
        <li v-for="activity in activities">
            <activity v-bind:activityItem="activity"></activity>
        </li>
    </div>
</template>

<script>
    import activity from './Activity';
    export default {
        name: 'test',
        components: {
            activity
        }
        ,
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
            this.activities = response.data.data.activities;
            })
        }
    }
</script>

<style scoped>

</style>