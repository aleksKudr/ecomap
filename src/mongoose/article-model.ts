import mongoose from 'mongoose';

const { Schema } = mongoose;

export type IArticle = {
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  published: boolean;
  image: string;
};

const ArticleSchema = new Schema<IArticle>({
  title: String,
  content: String,
  author: String,
  createdAt: Date,
  published: Boolean,
  image: String
});

const Article = mongoose.model('Article', ArticleSchema);

// module.exports = Article;

export default Article;
