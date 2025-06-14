const Post = require('../models/postModel');

exports.getAll = async (req, res) => {
    const posts = await Post.getAllPosts();
    res.json(posts);
};

exports.getById = async (req, res) => {
    const post = await Post.getPostById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
};

exports.create = async (req, res) => {
    const { title, content } = req.body;
    const newPost = await Post.createPost(title, content);
    res.status(201).json(newPost);
};

exports.update = async (req, res) => {
    const { title, content } = req.body;
    const updated = await Post.updatePost(req.params.id, title, content);
    if (!updated) return res.status(404).json({ message: 'Post not found' });
    res.json(updated);
};

exports.delete = async (req, res) => {
    await Post.deletePost(req.params.id);
    res.status(204).send();
};
