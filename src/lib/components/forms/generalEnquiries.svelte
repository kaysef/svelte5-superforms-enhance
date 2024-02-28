<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import type { GeneralEnquiriesFormSchema } from './schemas';

	import type { Infer, SuperForm } from 'sveltekit-superforms';

	type FormProps = {
		form: SuperForm<Infer<GeneralEnquiriesFormSchema>>;
		errors: any;
		formData: any;
	};

	let { form, errors, formData } = $props<FormProps>();
</script>

<Form.Field class="col-span-6 md:col-span-3" {form} name="full_name">
	<Form.Control let:attrs>
		<Form.Label class="text-xs">
			{#if $errors.full_name}
				<Form.FieldErrors class="text-xs" />
			{:else}
				Full Name
			{/if}
		</Form.Label>
		<Input class="placeholder:text-slate-400" {...attrs} bind:value={$formData.full_name} />
	</Form.Control>
</Form.Field>
<Form.Field class="col-span-6 md:col-span-3" {form} name="email">
	<Form.Control let:attrs>
		<Form.Label class="text-xs">
			{#if $errors.email}
				<Form.FieldErrors class="text-xs" />
			{:else}
				Email
			{/if}
		</Form.Label>
		<Input
			class="placeholder:text-slate-400"
			type="email"
			{...attrs}
			bind:value={$formData.email}
		/>
	</Form.Control>
</Form.Field>

<Form.Field class="col-span-6 md:col-span-3" {form} name="message">
	<Form.Control let:attrs>
		<Form.Label class="text-xs">
			{#if $errors.message}
				<Form.FieldErrors class="text-xs" />
			{:else}
				Message
			{/if}
		</Form.Label>
		<Textarea {...attrs} class="resize-none" bind:value={$formData.message} />
	</Form.Control>
</Form.Field>
