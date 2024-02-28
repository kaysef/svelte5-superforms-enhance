<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';

	let { data } = $props();

	import SuperDebug, { superForm } from 'sveltekit-superforms';
	import { generalEnquiresValidatorSchema } from '$lib/components/forms/schemas';

	// Client API:
	const form = superForm(data.form, {
		taintedMessage: true,
		validators: generalEnquiresValidatorSchema,

		async onUpdated({ form: f }) {
			if (!f.valid) {
				console.log(`${f.message} from onUpdated`);
			}
		}
	});

	const { form: formData, errors, message } = form;

	$inspect($message);
</script>

<section>
	<div class="image-fade-in cust-container py-16 sm:px-6 lg:px-8">
		<Contact {form} {errors} {formData} />
	</div>
</section>

<SuperDebug data={$formData} />
