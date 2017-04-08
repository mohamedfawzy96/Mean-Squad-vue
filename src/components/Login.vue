<template>
  <div class="login-fawzy">
        <link rel="stylesheet" href="static/css/login/login.css">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Username</label>
        <input type="text" v-model="username" name="username" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" v-model="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <button class="btn btn-lg btn-primary btn-block" v-on:click="login">Sign in</button>
  </div>
</template>

<script>
export default {
    name: 'login',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        username: '',
        password: ''
      }
    },
    methods: {
      login: function() {
          console.log(this.username);
            this.$http.post('http://localhost:8080/user/login', {
              username:this.username,
              password:this.password
            })
            .then(function(response){
              if(response.data.data.errors) {
                console.log("bateekh");
              }
            console.log(response.data.data);
            }, function(response){
              console.log("bayez");
            });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
