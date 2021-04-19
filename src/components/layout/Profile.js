import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";

const Profile = ({ getCurrentProfile, auth: { user }, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  const [formData, setFormData] = useState({
    bio: "",
    favoritemovie: "",
    favoritegame: "",
    favoritetvseries: "",
  });

  const { bio, favoritemovie, favoritegame, favoritetvseries } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1>Profile</h1>
      <p>Welcome {user && user.name}</p>
      {/* {user.favoritemovie} */}
      {/* {profile !== null ? (
        <Fragment>has</Fragment>
      ) : ( */}
      <Fragment>
        <h1>Create your profile!</h1>
        <p>
          Enter your favorite movies, games, and tv series; and a fun fact about
          yourself.
        </p>
        <small>* = required field</small>
        <form className="form">
          <div className="form-group">
            <textarea
              placeholder="Your bio here"
              name="bio"
              value={bio}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your favorite movies"
              name="favoritemovie"
              value={favoritemovie}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your favorite games"
              name="favoritegame"
              value={favoritegame}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your favorite TV series"
              name="favoritetvseries"
              value={favoritetvseries}
              onChange={(e) => onChange(e)}
            />
          </div>
        </form>
        <input type="submit" className="btn btn-primary" />
      </Fragment>
    </Fragment>
  );
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
