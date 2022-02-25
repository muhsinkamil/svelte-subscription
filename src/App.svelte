<script>
    import {
        Headings,
        Button,
        InputWithLabel,
        CheckboxWithLabel,
        Card,
    } from './components'
    import {
        checkboxOptions,
        enterMailWording,
        freetrialWording,
        informationWording,
        privacyWording,
        subscribeWording,
        tryNowWording,
        workMailWording,
    } from './wordings'

    let emailValue = ''

    const handleSubmit = (e) => console.log(emailValue)
</script>

<main>
    <Card>
        <div class="headings_wrapper">
            <Headings heading={tryNowWording} />
            <h6 class="sub_heading">{freetrialWording}</h6>
        </div>

        <form on:submit|preventDefault={handleSubmit}>
            <InputWithLabel
                label={workMailWording}
                placeholder={enterMailWording}
                name="email"
                type="email"
                bind:value={emailValue}
            />

            <div class="options_container">
                {#each checkboxOptions as { label, name } (label)}
                    <CheckboxWithLabel {label} {name} />
                {/each}
            </div>

            <Button label={subscribeWording} />
        </form>

        <p class="paragraph_privacy">
            {privacyWording}
            <a href="/" class="links">{informationWording}</a>
        </p>
    </Card>
</main>

<style>
    main {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(226, 222, 222);
    }

    .sub_heading {
        font-size: 0.9em;
        font-weight: 200;
    }

    .headings_wrapper {
        padding: 0 0 1rem 0;
    }

    .options_container {
        padding: 5px 0 20px 0;
        display: flex;
        flex-direction: column;
    }

    .paragraph_privacy {
        font-size: 0.9em;
        padding: 20px 0 0 0;
    }

    .links {
        text-decoration: none;
        color: #486ef3;
    }
</style>
