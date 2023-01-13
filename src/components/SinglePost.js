import React from "react";
import { useHistory } from "react-router-dom";

function SinglePost({ item }) {
  const history = useHistory();
  /*
  const submitUser = async () => {
    let urlQuery =
      "http://localhost:8080/user/get-user?username=" + item.creator;

    const response = await axios.get(urlQuery);

    setUser(response.data);
    if (user) console.log(JSON.stringify(user.age, null, 2));
  };
*/
  return (
    <div className="row ">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <div className="chip">
              <img
                src="https://thumbs.dreamstime.com/b/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg"
                alt="Contact Person"
              />
              {item.creator}
            </div>

            <br />
            <span className="card-title">{item.content}, </span>

            <div className="card-action">
              <button
                onClick={() => {
                  if (item.creator !== localStorage.getItem("username")) {
                    localStorage.setItem("messageReceiver", item.creator);
                    history.push("/profile");
                    window.location.reload();
                  }
                }}
                disabled={item.creator === localStorage.getItem("username")}
                className="btn waves-effect waves-light"
                hidden={item.creator === localStorage.getItem("username")}
              >
                {item.creator}
                <i className="material-icons right">send</i>
              </button>
            </div>
            <span>{item.timeAgo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
