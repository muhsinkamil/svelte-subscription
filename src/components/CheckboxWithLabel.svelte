<script>
    export let label
    export let name
</script>

<label class="checkbox_container">
    <input type="checkbox" {name} />
    <span aria-label={label}>
        {label}
    </span>
</label>

<style>
    .checkbox_container {
        padding: 5px 0;
    }
</style>
