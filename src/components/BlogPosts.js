import React from 'react';
import Post from './Post';
import './App.css';
import { ThreeDots } from 'svg-loaders-react'


const query = `
    {
      user(username: "rutikwankhade") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;

class Blogposts extends React.Component {
    state = {
        posts: [],
        loading: true
    };

    componentDidMount() {
        this.fetchPosts();
    }

    fetchPosts = async () => {
        const response = await fetch('https://api.hashnode.com', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ query }),
        })
        const ApiResponse = await response.json();

        console.log(ApiResponse.data.user.publication.posts);
        this.setState({ posts: ApiResponse.data.user.publication.posts, loading: false });


    };

    render() {

        if (this.state.loading) return <div className="spinner"><ThreeDots fill="#e1bafd" trokeOpacity=".125" /></div>;

        return (
            <div class="container">
                {this.state.posts.map((post, index) => (
                    <a key={index} href={`https://blog.rutikwankhade.dev/${post.slug}`} >
                        <Post post={post} />
                    </a>
                ))}
            </div>
        );
    }
}

export default Blogposts;
