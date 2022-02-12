<script>
    export let label;
    export let name;
</script>


<label name="checkbox_container">
    <input type="checkbox" {name}>
    <span aria-label={label}>
        {label}
    </span>
</label>

<style>
    .checkbox_container {

    }
</style>