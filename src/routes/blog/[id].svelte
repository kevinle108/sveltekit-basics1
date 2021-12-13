<script context="module">
  export const load = ({page}) => {
    const nameofendpoint = page.params.id;


    return {
      props: {
        nameofendpoint
      }
    }
  }
</script>

<script>
  export let nameofendpoint;
</script>



<style>

</style>

<h1>Blog Post {nameofendpoint}</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos repellat ipsam tempora numquam laboriosam molestias incidunt provident expedita sunt iure voluptatum earum, assumenda, dolorem corporis corrupti quam, officiis nihil?</p>

