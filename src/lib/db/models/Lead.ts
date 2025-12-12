import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
	fullName: string;
	email: string;
	source: string;
	timestamp: Date;
	utm_source?: string;
	utm_medium?: string;
	utm_campaign?: string;
	utm_term?: string;
	utm_content?: string;
	mailchimpSubscribed: boolean;
	mailchimpId?: string;
	createdAt: Date;
	updatedAt: Date;
}

const LeadSchema: Schema = new Schema(
	{
		fullName: {
			type: String,
			required: [true, 'Full name is required'],
			trim: true,
		},
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: true,
			lowercase: true,
			trim: true,
			match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
		},
		source: {
			type: String,
			default: 'coaching_page',
		},
		timestamp: {
			type: Date,
			default: Date.now,
		},
		utm_source: String,
		utm_medium: String,
		utm_campaign: String,
		utm_term: String,
		utm_content: String,
		mailchimpSubscribed: {
			type: Boolean,
			default: false,
		},
		mailchimpId: String,
	},
	{
		timestamps: true,
	}
);

// Create index for faster queries
LeadSchema.index({ email: 1 });
LeadSchema.index({ createdAt: -1 });

// export default mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
export default mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);