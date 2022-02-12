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
		padding: 0; 
		display: flex;
	}
	.layout_card {
		display: flex;
		flex-direction: column;
	}
</style>