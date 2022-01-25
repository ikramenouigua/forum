const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required :[true, 'Please add title'],
           
            maxLength :[40,'title cannot be more than 40']
        },
        category:{
            type:String,
            required :[true, 'Please add category'],
            
            maxLength :[100,'title cannot be more than 40']
        },
        description :{
            type:String,
            required :[true, 'Please add title'],
            
            maxLength :[200,'title cannot be more than 200']
        },

    }
)
module.exports= mongoose.models.Article || mongoose.model('Article',ArticleSchema);