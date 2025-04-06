import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String
		},
		email: {
			type: String
		},
		password: {
			type: String
		},
		courses: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Course'
		},
		studytime: {
			type: String
		},
		studymethod: {
			type: String
		},
		groupsize: {
			type: Number
		},
		knowledge: [
		  {
		    title: String,
		    knowledgebase: Number
		  }
		]
	},
	{ versionKey: false }
)

const User = mongoose.model('User', UserSchema)

export default User
