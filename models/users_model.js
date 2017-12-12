var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    char_image: String,
    char_name: String,
    hashed_password: String
});
mongoose.model('User', UserSchema);
