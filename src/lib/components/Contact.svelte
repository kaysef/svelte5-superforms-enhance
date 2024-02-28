<script lang="ts">
	import GeneralEnquiries from './forms/generalEnquiries.svelte';

	import type { GeneralEnquiriesFormSchema } from '$lib/components/forms/schemas';
	import type { Infer, SuperForm } from 'sveltekit-superforms';

	type FormProps = {
		form: SuperForm<Infer<GeneralEnquiriesFormSchema>>;
		errors: any;
		formData: any;
	};

	let { form, errors, formData } = $props<FormProps>();
</script>

<div class="mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:divide-x lg:px-8">
	<div>
		<form
			use:form.enhance
			method="POST"
			action="?/send_message"
			class="flex flex-col space-y-6 py-6 md:px-6 md:py-0"
		>
			<GeneralEnquiries {form} {errors} {formData} />
			<button
				type="submit"
				class="btn btn-dark-transparent self-center rounded px-8 py-3 text-lg hover:ring focus:ring"
			>
				Submit
			</button>
		</form>
	</div>
</div>
