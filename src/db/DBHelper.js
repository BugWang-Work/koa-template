import mongoose from 'mongoose'
const DB_USER = 'admin';
const PASSWORD = encodeURIComponent('P@ssw0rd'); 
const DB_URL = `mongodb://${DB_USER}:${PASSWORD}@118.24.121.165:27017/blog`

// 创建链接
mongoose.connect(DB_URL, { useNewUrlParser: true })

// 链接成功
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connection open to ${DB_URL}`)
})

// 链接错误
mongoose.connection.on('error', error => {
  console.log(`Mongoose connection error: ${error}`)
})

// 链接错误
mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose connection disconnected.`)
})

export default mongoose
