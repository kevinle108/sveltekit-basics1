<script context="module">
  export const load = ({error, status}) => {

    return {
      props: {
        error,
        status
      }
    }
  }
</script>

<script>
  export let error;
  export let status;

  console.log(error);
  console.log(status);

</script>

<h1>Root Error Page</h1>
<h1>{error.name} {status}</h1>
<h1>{error.message}</h1>

<style>

</style>