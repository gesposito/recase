import fetch from "cross-fetch";

const TOKEN = localStorage.getItem("token") || "";

export default {
  get: profile =>
    fetch(`https://api.github.com/users/${profile}/repos`, {
      headers: {
        Authorization: `token ${TOKEN}`
      }
    }).then(response => response.json())
};
