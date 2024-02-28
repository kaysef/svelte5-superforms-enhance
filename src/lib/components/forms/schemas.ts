// import axios from 'axios';
import { z } from 'zod';
import { zod } from 'sveltekit-superforms/adapters';

export const generalEnquiriesFormSchema = z
    .object({
        full_name: z
            .string({ required_error: 'Full Name is required' })
            .min(1, { message: 'Full Name is required' })
            .trim(),
        email: z
            .string({ required_error: 'Email is required' })
            .email()
            .trim(),
        message: z
            .string({ required_error: 'Message is required' })
            .min(1, { message: 'Message is required' })
            .trim(),
    })

export const generalEnquiresValidatorSchema = zod(generalEnquiriesFormSchema)
export type GeneralEnquiriesFormSchema = typeof generalEnquiriesFormSchema;