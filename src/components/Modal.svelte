<script>
    export let show = false
    export let okBtnText = ''
    export let cancelBtnText = ''
</script>

{#if show}
    <div class="modal-overlay">
        <div class="modal">
            <slot />
            <div class="modal-btns">
                {#if okBtnText}
                    <button class="btn-primary">{okBtnText}</button>
                {/if}
                {#if cancelBtnText}
                    <button class="btn-secondary">{cancelBtnText}</button>
                {/if}
            </div>
        </div>
    </div>
{/if}

<style>
    .modal-overlay {
        background-color: rgba(0, 0, 0, 0.8);
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0%;
        left: 0%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        margin: 0 20px;
    }

    .modal-btns {
        text-align: end;
        padding: 10px 0;
    }

    .modal-btns > button {
        outline: none;
        border: none;
        font-size: 1em;
        background-color: white;
        cursor: pointer;
    }

    .modal-btns > button:hover {
        transform: scale(1.2);
    }

    .modal-btns > button:active {
        transform: scale(0.9);
    }

    .btn-primary {
        color: rgb(37, 158, 37);
    }

    .btn-secondary {
        color: rgb(219, 64, 64);
    }
</style>
