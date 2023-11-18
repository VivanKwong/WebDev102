import './App.css';
import { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPost from './pages/ReadPost'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetail from './pages/PostDetail';
import { Link } from 'react-router-dom'
import { supabase } from './Client'


const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // READ all post from table
    const fetchPosts = async () => {
      const {data} = await supabase
        .from('Posts')
        .select();

      // set state of posts
      setPosts(data)
    }
    fetchPosts();
  }, []); 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPost data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost />
    },
    {
      path:"/new",
      element: <CreatePost />
    },
    {
      path:"/post/:id",
      element: <PostDetail />
    }
  ]);

  return ( 

    <div className="App">

      <div className="header">
        <h1>Pride and Prejudice Forum</h1>
        <Link to="/"><button className="headerBtn"> All Posts </button></Link>
        <Link to="/new"><button className="headerBtn"> New Post </button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;
