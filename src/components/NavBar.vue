<template>
<div id="app">
    <link rel="stylesheet" href="static/css/navbar/navbar.css">
    <div class="navBar-fawzy">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Mean Squad</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><router-link router-link to='profile'>Profile</router-link></li>
            <li><router-link to='/search' >Search</router-link></li>
            <li><router-link to='/businesses' >Businesses</router-link></li>
            <li><router-link to='/activities' >Activities</router-link></li>
            <li><router-link to='/login' >Login</router-link></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    </div>
    <div class="container-fawzy">
        <router-view></router-view>
    </div>
</div>
</template>



<script>
export default {
  name: 'NavBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{

  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
