<script>
    export let label
    export let name
</script>

<label class="checkbox_container">
    <input type="checkbox" {name} class="checkbox_input" />
    <span aria-label={label}>
        {label}
    </span>
</label>

<style>
    .checkbox_container {
        padding: 5px 0;
        display: flex;
        align-items: center;
        gap: 5px;
    }
</style>
