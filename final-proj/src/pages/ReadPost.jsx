import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../Client';

const ReadPost = (props) => {
    const [posts, setPosts] = useState([]);
    const [sortBy, setSortBy] = useState('created_at');
    const [searchQuery, setSearchQuery] = useState('');
  
    const fetchPosts = async () => {
        let query = supabase.from('Posts').select().ilike('title', `%${searchQuery}%`);

        if (sortBy === 'upvotes') {
          query = query.order('upvotes', { ascending: false, nullsFirst: false });
        } else {
          query = query.order(sortBy, { ascending: sortBy !== 'created_at' });
          query = query.order('created_at', { ascending: false }); // Always order by created_at as a tiebreaker
        }
        const { data } = await query;
        setPosts(data);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        fetchPosts(query);
    };

    const handleUpvote = async (post) => {
        // Get the current user
        const user = supabase.auth.getUser();

        if (!user) {
            // Handle case where user is not logged in
            console.error('User is not authenticated');
            return;
        }

        // Update the post's upvotes count in the database
        const { data, error } = await supabase
            .from('Posts')
            .update({ upvotes: post.upvotes + 1 })
            .eq('id', post.id);

        if (error) {
            console.error('Error updating upvotes:', error.message);
        } else {
            // Refresh the posts data after upvoting
            fetchPosts(); // Make sure you have a fetchPosts function to update the post list
        }
     };
  
    useEffect(() => {
      fetchPosts();
    }, [props, sortBy]);
  
    return (
      <div className="ReadPosts">
        <div>
          Sort By:
          <button onClick={() => setSortBy('created_at')}>Created Time</button>
          <button onClick={() => setSortBy('upvotes')}>Upvotes Count</button>
          <input type="text" placeholder="Search by title" value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
        </div>
  
        {posts && posts.length > 0 ? (
            posts.map((post, index) => (
                <Card
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                upvotes={post.upvotes}
                onUpvote={() => handleUpvote(post)} // Pass the post id to handleUpvote
                />
            ))
        ) : (
          <h2>{'No Posts Yet 😞'}</h2>
        )}
      </div>
    );
  };

export default ReadPost;
