<script>
	import { Headings, Button, InputWithLabel, CheckboxWithLabel } from './components'

	const options = [
		{
			label:"I agree to the terms and conditions",
			name: "termsAndConditions"
		},
		{
			label:"Subscribe to newsletters and communications",
			name: "newsletter"
		},
		{
			label:"Subscribe to onboarding emails",
			name: "emails"
		}
	]
</script>

<main>
	<div class="layout_card">
		<Headings heading="Try it now!"/>
		<h6>Free trial, no obligation</h6>

		<InputWithLabel 
			label="Work email address"
			placeholder="Enter your email address"
			name="email"
		/>

		{#each options as { label, name } (label)}
		<CheckboxWithLabel 
			{label}
			{name}
		/>
		{/each}
		
		<Button label="Download now"></Button>
	</div>
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.layout_card {
		display: flex;
		padding: 5%;
		flex-direction: column;
		border: 2px solid rgb(243, 237, 237);
		box-shadow: 5px 5px rgb(238, 238, 238);
	}
</style>