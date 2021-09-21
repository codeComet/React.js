export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = process.env.REACT_APP_CLIENT_ID;

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = window.location.hash
  .substring(1)
  .split("&")
  .reduce((initial, item) => {
    let parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);
    console.log(initial);
    return initial;
  }, {});

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

//["access_token=BQASLBO8qGsynTvCH4LsdRO1ZRMfXrr0s2F3m…sdC0VwIhkeFcasa0NDvPAQZQ5Eoyw32jtGz239dzdDWoVQG-A", "token_type=Bearer", "expires_in=3600"]

//alternate solution to get access token without using reduce

// let str = ["access_token=BQASLBO8qGsynTvCH4LsdRO1ZRMfXrr0s2F3m…sdC0VwIhkeFcasa0NDvPAQZQ5Eoyw32jtGz239dzdDWoVQG-A", "token_type=Bearer", "expires_in=3600"]
// str.map((item)=> {
//   let splitted = item.split("=")
//   console.log(
//     {[splitted[0]]: decodeURIComponent(splitted[1])}
//   )
// })
