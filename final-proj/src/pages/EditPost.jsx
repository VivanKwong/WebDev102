import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../Client'

const EditPost = ({data}) => {
    const { id } = useParams();
    const postId = parseInt(id, 10); // Convert id to a number
    // const post = data.find(item => item.id === postId);

    const [post, setPost] = useState({ title: "", description: "" });

    useEffect(() => {
      const fetchData = async () => {
        try {
            const postData = data.find((item) => item.id === postId);
            setPost(postData);
        //   const { data } = await supabase.from('Posts').select().eq('id', postId);
        //   setPost(data[0]);
        } catch (error) {
          console.error('Error fetching post:', error.message);
        }
      };
  
      fetchData();
    }, [postId]);

    // UPDATE post
    const updatePost = async (event) => {
        event.preventDefault();
    
        await supabase.from('Posts').update({ title: post.title, description: post.description}).eq('id', id);
    
        window.location = "/";
    }

    // DELETE post
    const deletePost = async (event) => {
        event.preventDefault();

        const confirmed = window.confirm('Are you sure you want to delete this post?');
        if (confirmed) {
          await supabase.from('Posts').delete().eq('id', postId);
          window.location.href = "http://localhost:3000/";
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updatePost();
    }

    return (
        <div>
            <form onSubmit={updatePost}>
                <label htmlFor="title">Title:</label> <br />
                <input
                type="text"
                id="title"
                name="title"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                /><br />
                <br/>

                <label htmlFor="description">Content:</label><br />
                <input
                type="text"
                id="description"
                name="description"
                value={post.description}
                onChange={(e) => setPost({ ...post, description: e.target.value })}
                /><br />
                <br/>
                <input type="submit" value="Update Post" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost
