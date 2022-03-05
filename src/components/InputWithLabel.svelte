<script>
    export let label = ''
    export let name = ''
    export let placeholder = ''
    export let type = 'text'
    export let value = ''

    const handleInputChange = (e) => {
        // Since number and range has to be coerced to number
        value = type.match(/^(number|range)$/)
            ? +e.target.value
            : e.target.value
    }
</script>

<label class="input_container" for="">
    <span aria-label={label} class="input_label">
        {label}
    </span>
    <input
        {type}
        {name}
        {placeholder}
        class="input_box"
        on:input={handleInputChange}
    />
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
