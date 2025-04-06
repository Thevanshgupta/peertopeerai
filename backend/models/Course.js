import mongoose from 'mongoose'

const CourseSchema = new mongoose.Schema(
 {
  courseid: {
   type: String
  },
  name: {
   type: String
  },
  activites: [
   {
    title: {
     type: String
    },
    tools: [{ type: String }],
    outcome: { type: String }
   }
  ]
 },
 {
  versionKey: false
 }
)

const Course = mongoose.model('Course', CourseSchema)

export default Course
