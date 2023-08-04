import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true

    },
    password: {
        type: String,
        require: true,
        select: false
    },
    avatar: {
        type: String,
        require: true
    },
    background: {
        type: String,
        require: true
    },
});
UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
})
const User = mongoose.model("User", UserSchema);

export default User;