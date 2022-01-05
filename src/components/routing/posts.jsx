import React from "react";
import config from "../../config.json";
import { ToastContainer } from "react-toastify";
import http from "../../services/httpService";
import "react-toastify/dist/ReactToastify.css";

class Posts extends React.Component {
  state = { posts: [] };
  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndpoint);
    return this.setState({ posts });
  }
  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    return this.setState({ posts });
  };
  handleUpdate = async (post) => {
    post.title = "UPDATED";
    await http.put(config.apiEndpoint + "/" + Number(post.id), post);
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    return this.setState({ posts });
  };
  handleDelete = async (post) => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });
    try {
      await http.delete(config.apiEndpoint + "/45" + post.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted");
      else {
        console.log("Logging the error ");
        alert("An unexpected error occured");
      }
      return this.setState({ originalPosts });
    }
  };

  render() {
    return (
      <div>
        <ToastContainer />
        <button
          onClick={this.handleAdd}
          className="button button btn-primary btn-sm"
        >
          add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Posts;
