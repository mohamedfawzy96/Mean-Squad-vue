<template>
  <div class="search-fawzy">
    <link rel="stylesheet" href="static/css/search/search.css">
    <div class="">
      <h1>
        {{msg}}
      </h1>

    </div>
    <br>
    <br>
    <form class="" action="index.html" method="post">
      <input type="text" class='searchBar-fawzy' v-on:keyup='addSearch' v-model="searchWord"  name="search" value="" placeholder="Search User Here..." autocomplete="off">
    </form>
    <div class="users">
          <div class="" v-show='NotstartedTyping'  v-for='user in users '>
            <h1>{{user.name}}</h1>
          </div>
          <div class=""  v-for='user in searchResults '>
            <h1>{{user.name}}</h1>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  // this is the data you want the component to have that you can use in your html
  data () {
    return {
      msg: 'Welcome to Mean Squad',
      searchWord:"",
      searchResults:[],
      users:[],
      NotstartedTyping:true
    }
  },
  // these are the methods you can use in your inputs or buttons check input field v-on:keyup
  methods:{
    addSearch: function() {
      this.NotstartedTyping = false;
      var searchWord = this.searchWord;
      var results = Array();
      this.users.forEach(function(user) {
        if(String(user.name).toLowerCase().includes(String(searchWord).toLowerCase())){
          results.push(user);
        }
      })
      this.searchResults = results;
      console.log(this.searchResults);
    }
  },
  //this methods runs once the component is showen
  created:function(){
    //When you want to make a get request use this method and put the url u want to use
    this.$http.get('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
      this.users = response.data;
      console.log(response.data);
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
