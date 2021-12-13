<script>
  import Nav from "$lib/Nav.svelte";
</script>

<div class="container">
  <!-- <Nav/> -->
  <slot/>
</div>


<style>
  .container {
    width: 80%;
    margin: 10px auto;
  }
</style>
