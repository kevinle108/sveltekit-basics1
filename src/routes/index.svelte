<script context="module">
  export const load = async ({fetch}) => {
    const res = await fetch('/api/post');
    const data = await res.json();
    console.log(data);
    return {
      props: {
        data,
      }
    }
  }
</script>

<script>
  export let data;
  console.dir(data);
</script>

{JSON.stringify(data)}

<h1>Homepage</h1>
