<script>
    import {
        Headings,
        Button,
        InputWithLabel,
        CheckboxWithLabel,
        Card,
        Modal,
        ThankModalContent,
    } from './components'
    import {
        subscriptionOptions,
        enterMailWording,
        freetrialWording,
        informationWording,
        privacyWording,
        subscribeWording,
        tryNowWording,
        workMailWording,
        termsAndConditions,
    } from './wordings'
    import { buildOptionGroup } from './helpers'

    const { label: termsAndConditionsLabel, name: termsAndConditionsName } =
        termsAndConditions[0]

    let isSubmitted = false

    let emailValue = ''
    let { termsAndConditions: termsAndConditionsAgreed } =
        buildOptionGroup(termsAndConditions)

    let selectedSubscriptions = buildOptionGroup(subscriptionOptions)

    const handleSubmit = (e) => {
        // console.log(emailValue)
        isSubmitted = true
        console.log(selectedSubscriptions)
    }
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
                <CheckboxWithLabel
                    label={termsAndConditionsLabel}
                    name={termsAndConditionsName}
                    optionName={termsAndConditionsName}
                    bind:checked={termsAndConditionsAgreed}
                />
                {#each subscriptionOptions as { label, name: optionName } (label)}
                    <CheckboxWithLabel
                        {label}
                        name="subscriptions"
                        {optionName}
                        bind:checked={selectedSubscriptions[optionName]}
                    />
                {/each}
            </div>

            <Button
                label={subscribeWording}
                disabled={!termsAndConditionsAgreed}
            />
        </form>

        <p class="paragraph_privacy">
            {privacyWording}
            <a href="/" class="links">{informationWording}</a>
        </p>
        <Modal show={isSubmitted} okBtnText="ok">
            <ThankModalContent />
        </Modal>
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
