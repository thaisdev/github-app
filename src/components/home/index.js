import { Component } from "react";
import ajax from "@fdaciuk/ajax";
import Content from "./content";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      repos: [],
      starred: [],
    };
  }

  handleSearch = (e) => {
    const { key } = e;
    const ENTER = "Enter";
    if (key === ENTER) {
      const { value } = e.target;
      ajax()
        .get(`https://api.github.com/users/${value}`)
        .then((result) => {
          console.log(result);
          this.setState({
            userInfo: {
              username: result.name || "Sem nome",
              login: result.login,
              photo: result.avatar_url,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            },
          });
        });
    }
  };

  render() {
    const { userInfo, repos, starred } = this.state;
    return (
      <Content
        userInfo={userInfo}
        repos={repos}
        starred={starred}
        handleSearch={this.handleSearch}
      />
    );
  }
}

export default Home;
