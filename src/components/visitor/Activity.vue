<template>
    <div>
        <br><br>
        <h2>{{activityItem.name}}</h2>
        <p>{{activityItem.description}}</p>
    </div>
</template>

<script>
    export default {
        name: 'activity',
        props:['activityItem'],
        data() {
            return {
                title: 'Activity',
                businesses: []
            }
        },

        created:function(){
            //When you want to make a get request use this method and put the url u want to use
            console.log(this.activityItem);
        }
    }
</script>