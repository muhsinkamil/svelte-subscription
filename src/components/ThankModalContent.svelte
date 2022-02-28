<script>
    import { thankModalHeading } from '../wordings'
    export let emailValue = ''
</script>

<h2 class="thanks-txt">{thankModalHeading}</h2>
<div class="thanks-msg">
    Will keep in touch at {emailValue}. Thanks for subscribing to emails
</div>

<style>
    .thanks-txt {
        font-size: 1.6em;
        color: green;
        padding: 5px 0;
    }

    .thanks-msg {
        font-size: 1em;
        padding: 5px 0;
    }
</style>
