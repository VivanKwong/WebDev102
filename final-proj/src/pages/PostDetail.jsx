import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../Client';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await supabase.from('Posts').select().eq('id', id);
        setPost(data[0]);
      } catch (error) {
        console.error('Error fetching post:', error.message);
      }
    };
  
    const fetchComments = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase.from('Posts').select().eq('id', id);
            if (error) {
            throw error;
          }
          console.log('Fetched data:', data[0]);
          const fetchedComments = JSON.parse(data[0]?.comments || '[]');
          setComments(fetchedComments);
        } catch (error) {
          console.error('Error fetching comments:', error.message);
        } finally {
          setLoading(false);
        }
    };
  
    fetchData();
    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const existingComments = JSON.parse(post.comments || '[]');
    const updatedComments = [...existingComments, { content: newComment }];

    await supabase.from('Posts').update({
        comments: JSON.stringify(updatedComments),
    }).eq('id', id);
    setNewComment('');
    // Refresh comments after submitting a new comment
    const { data } = await supabase.from('Posts').select().eq('id', id);
    setComments(JSON.parse(data[0]?.comments || '[]'));
  };

  const handleUpvote = async () => {
    // Update the post's upvotes count in the database
    await supabase.from('Posts').update({ upvotes: post.upvotes + 1 }).eq('id', id);
    // Refresh the post data after upvoting
    const { data } = await supabase.from('Posts').select().eq('id', id);
    setPost(data[0]);
  };

  const handleEdit = async (event) => {
    event.preventDefault();
    await supabase.from('Posts').update({ title: post.title, description: post.description}).eq('id', id);
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const confirmed = window.confirm('Are you sure you want to delete this post?');
    if (confirmed) {
      await supabase.from('Posts').delete().eq('id', id); // Use id instead of postId
      // Navigate to the home page after deleting the post
      navigate('/');
    }
  };

  return (
    <div>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <p>Created At: {post.created_at}</p>
          <p>Upvotes: {post.upvotes}</p>
          <p>Description: {post.description}</p>
          <button onClick={handleUpvote}>👍 Upvote</button>

          <div>
            <h3>Comments</h3>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment.content}</li>
              ))}
            </ul>
            <form onSubmit={handleCommentSubmit}>
              <label htmlFor="newComment">Add a Comment:</label>
              <input
                type="text"
                id="newComment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button type="submit">Submit Comment</button>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
