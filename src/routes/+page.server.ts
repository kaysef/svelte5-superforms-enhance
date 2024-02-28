import { superValidate, message } from "sveltekit-superforms/server";
import { zod } from 'sveltekit-superforms/adapters';
import { generalEnquiriesFormSchema } from "$lib/components/forms/schemas";

export async function load() {

    const form = await superValidate(zod(generalEnquiriesFormSchema));
    return {
        form
    }
}


export const actions = {
    send_message: async ({ request }) => {

        const form = await superValidate(request, zod(generalEnquiriesFormSchema));


        if (!form.valid) {
            // Again, return { form } and things will just work.
            return message(form, 'Please correct errors on the form');
        }

        //    do whatever you want with the form data here

        return message(form, {
            description: "Please expect to hear back within 1 to 2 business days",
            title: "Message submitted succesfully! "

        });

    }
};


