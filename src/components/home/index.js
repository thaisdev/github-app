import { Component } from "react";
import ajax from "@fdaciuk/ajax";
import Content from "./content";

const GITHUBAPIURL = "https://api.github.com/users";

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
        .get(`${GITHUBAPIURL}/${value}`)
        .then((result) => {
          this.setState({
            userInfo: {
              username: result.name || "Sem nome",
              login: result.login,
              photo: result.avatar_url,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
            },
            repos: [],
            starred: [],
          });
        });
    }
  };

  handleGetRepos = (type) => {
    const { userInfo } = this.state;
    ajax()
      .get(`${GITHUBAPIURL}/${userInfo.login}/${type}`)
      .then((result) => {
        this.setState({
          [type]: result.map((repo) => ({
            id: repo.id,
            name: repo.name,
            link: repo.html_url,
          })),
        });
      });
  };

  render() {
    const { userInfo, repos, starred } = this.state;
    return (
      <Content
        userInfo={userInfo}
        repos={repos}
        starred={starred}
        handleSearch={this.handleSearch}
        getRepos={() => this.handleGetRepos("repos")}
        getStarred={() => this.handleGetRepos("starred")}
      />
    );
  }
}

export default Home;
