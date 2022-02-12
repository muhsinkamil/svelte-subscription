<script>
    export let label;
    export let name;
    export let placeholder;
</script>


<label class="input_container">
    <span aria-label={label} class="input_label">
        {label}
    </span>
    <input type="input" {name} {placeholder} class="input_box">
</label>

<style>
    .input_container {
        display: flex;
        flex-direction: column;
        padding: 10px 0;
    }

    .input_label {
        padding: 5px 0;
        font-size: 0.8em;
        color: rgb(103, 101, 101);
    }
    .input_box {
        padding: 10px; 
    }
</style>