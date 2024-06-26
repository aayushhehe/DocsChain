const mongoose = require('mongoose');

// Define document schema
const documentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['Aadhaar', 'PAN', 'Passport', 'Driving Licence'],
    required: true
  },
  ipfsUrl: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true,
    unique: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
  // Add timestamps to track creation and last update time
}, { timestamps: true });

// Create Document model
const Document = mongoose.model('Document', documentSchema);

module.exports = Document;
