const mongoose = require('mongoose')

const sentenceSchema = new mongoose.Schema({
  en: {
    type: String,
    required: true
  },
  zh: {
    type:String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Sentence', sentenceSchema)