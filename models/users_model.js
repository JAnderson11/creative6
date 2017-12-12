var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    char_image: {type: String, default: "https://pre00.deviantart.net/be5f/th/pre/i/2014/296/7/6/_mickey_may_cry___2011__by_mirkomics-d83uqvi.png"},
    char_name: {type: String, default: "Mickey Mouse"},
    hashed_password: String
});
mongoose.model('User', UserSchema);
