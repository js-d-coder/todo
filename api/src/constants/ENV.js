module.exports = {
  MONGO_URL: 'mongodb+srv://foobar:eZ3xRd17aAzz6qzH@cluster0.7tyyxfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  MONGODB_DATABASE: process.env.NODE_ENV === 'development' ? 'dev-todo-app' : 'todo-app',
};
