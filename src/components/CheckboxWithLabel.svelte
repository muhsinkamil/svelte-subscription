<script>
    export let label
    export let name
    export let optionName
    export let checked

    // Svelte yet does not support Checkbox bind:group :(
    // TODO: Track https://github.com/sveltejs/svelte/issues/2308
    // const handleCheckboxChange = (e) => {
    //     const { value, checked } = e.target
    //     if (checked) {
    //         bindGroup = [...bindGroup, value]
    //     } else {
    //         bindGroup = bindGroup.filter((item) => item !== value)
    //     }
    // }
</script>

<label class="checkbox_container">
    <input
        type="checkbox"
        {name}
        class="checkbox_input"
        value={optionName}
        bind:checked
    />
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
