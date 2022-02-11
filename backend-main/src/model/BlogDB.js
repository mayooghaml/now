const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://userone:userone@ictakfiles.dunq6.mongodb.net/user?retryWrites=true&w=majority");
//mongoose.connect("mongodb://localhost:27017/my-blog");

const Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    description: String,
    name: String,
    upvoters: Array,
    comments: Array
})

var ArticleInfo = mongoose.model("articles", articleSchema);

module.exports = ArticleInfo;