<template>
  <div class="login-fawzy">
    <form v-on:submit="login">
      <link rel="stylesheet" href="static/css/login/login.css">
      <h2 class="form-signin-heading">Please sign in</h2>
      <label for="inputEmail" class="sr-only">Username</label>
      <input type="text" v-model="username" name="username" id="inputEmail" class="form-control" placeholder="Email address" required
        autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" v-model="password" name="password" id="inputPassword" class="form-control" placeholder="Password"
        required>
      <input class="btn btn-lg btn-primary btn-block" type="submit" value="Login"/>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        username: '',
        password: ''
      }
    },
    methods: {
      login: function (e) {
        console.log(this.username);
        e.preventDefault();
        this.$http.post('http://localhost:8080/user/login', {
            username: this.username,
            password: this.password
          })
          .then(function (response) {
            if (response.data.data.errors) {
              console.log("responded with errors");
            }
            console.log(response.data.data);
          }, function (response) {
            console.log("error happened with http");
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>