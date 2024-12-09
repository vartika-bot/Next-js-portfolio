const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['patient', 'doctor', 'admin'], required: true },
    userId: { type: String, unique: true }, 
}, { timestamps: true });

userSchema.pre('save', function(next) {
    if (this.isNew) {
        this.userId = this.name.slice(0, 3).toLowerCase() + this.email.slice(0, 2).toLowerCase();
    }
    next();
});

module.exports = mongoose.model('User', userSchema);
