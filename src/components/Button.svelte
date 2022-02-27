<script>
    export let label
</script>

<button class="button_cls">{label}</button>

<style>
    .button_cls {
        padding: 18px;
        background-color: rgb(37, 36, 36);
        color: white;
        cursor: pointer;
        width: 100%;
        border: none;
        font-size: 1em;
    }

    .button_cls:hover {
        transform: scale(1.01);
    }
    .button_cls:active {
        transform: scale(0.99);
    }
</style>
