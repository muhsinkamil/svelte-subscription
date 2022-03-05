<script>
    export let label
    export let disabled
</script>

<button class="button_cls" {disabled}>{label}</button>

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

    .button_cls:hover:enabled {
        transform: scale(1.01);
    }
    .button_cls:active:enabled {
        transform: scale(0.99);
    }

    .button_cls:disabled {
        background-color: rgb(136, 136, 136);
    }
</style>
