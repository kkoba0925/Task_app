<template>

<main>
<nav class="navbar navbar-dark navbar-expand-sm bg-dark mt-3 mb-3">
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
    <ul class="navbar-nav">  
      <li class="nav-item active"><a class="nav-link active" ><router-link to="/">Home</router-link></a></li>
      <li class="nav-item active"><a class="nav-link active" ><router-link to="/about">About</router-link></a></li>
    </ul>
  </div>
</nav>

<router-view></router-view>

</main>
</template>

<script >

</script>

