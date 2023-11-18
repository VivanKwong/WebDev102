import React from 'react';
import './CreatePost.css'
import { supabase } from '../Client'
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [post, setPost] = React.useState({title: "", description: ""});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('Posts')
          .insert({title: post.title, description: post.description})
          .select();
      
          navigate('/');
    }

    return (
        <div>
            <form onSubmit={createPost}>
                <label for="title">Title:</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange}/><br />
                <br/>

                <label for="description">Content:</label><br />
                <input type="text" id="description" name="description" rows="4" cols="50" onChange={handleChange}/><br />
                <br/>
                <input type="submit" value="Upload Post" />
            </form>
        </div>
    )
}

export default CreatePost
