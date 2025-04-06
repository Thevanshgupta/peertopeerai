import mongoose from 'mongoose'

const InterestSchema = new mongoose.Schema(
	{
		name: {
			type: String
		},
		description: {
			type: String
		}
	},
	{ versionKey: false }
)

const Interest = mongoose.model('Interest', InterestSchema)

export default Interest
