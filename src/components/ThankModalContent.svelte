<script>
    import { thankModalHeading } from '../wordings'
    export let emailValue = ''
</script>

<h2 class="thanks-txt">{thankModalHeading}</h2>
<div class="thanks-msg">
    Will keep in touch at <span class="email-txt">{emailValue}</span>. Thanks
    for subscribing to emails.
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

    .email-txt {
        font-weight: 600;
        color: rgb(182, 47, 74);
    }
</style>
