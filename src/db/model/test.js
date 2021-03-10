import mongoose from '../DBHelper'

const Schema = mongoose.Schema

const TestSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  email: { type: String },
})

const TestModel = mongoose.model('users', TestSchema)

// TestModel.updateOne({name:'test'},{age:'100'}).then(res => console.log(res))
export default TestModel
