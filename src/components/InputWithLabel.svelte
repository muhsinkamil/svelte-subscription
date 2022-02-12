<script>
    export let label;
    export let name;
    export let placeholder;
</script>


<label class="input_container">
    <span aria-label={label}>
        {label}
    </span>
    <input type="input" {name} {placeholder}>
</label>

<style>
    .input_container {
        display: flex;
        flex-direction: column;
    }
</style>