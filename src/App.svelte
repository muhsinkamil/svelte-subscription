<script>
    import {
        Headings,
        Button,
        InputWithLabel,
        CheckboxWithLabel,
        Card,
    } from './components'

    const options = [
        {
            label: 'I agree to the terms and conditions',
            name: 'termsAndConditions',
        },
        {
            label: 'Subscribe to newsletters and communications',
            name: 'newsletter',
        },
        {
            label: 'Subscribe to onboarding emails',
            name: 'emails',
        },
    ]
</script>

<main>
    <Card>
        <div class="headings_wrapper">
            <Headings heading="Try it now!" />
            <h6 class="sub_heading">Free trial, no obligation</h6>
        </div>

        <form>
            <InputWithLabel
                label="Work email address"
                placeholder="Enter your email address"
                name="email"
                type="email"
            />

            <div class="options_container">
                {#each options as { label, name } (label)}
                    <CheckboxWithLabel {label} {name} />
                {/each}
            </div>

            <Button label="Download now" />
        </form>

        <p class="paragraph_privacy">
            We value your privacy and you have complete control over any
            information submitted. For more info, see our <a
                href="/"
                class="links">information policy</a
            >
        </p>
    </Card>
</main>

<style>
    main {
        height: 100vh;
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
