import React, { Fragment, useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { createProfile } from "../../actions/profile";
import DashboardActions from "../dashboard/DashboardActions";

const Profile = ({
  createProfile,
  getCurrentProfile,
  history,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const [formData, setFormData] = useState({
    bio: "",
    favoritemovie: "",
    favoritegame: "",
    favoritetvseries: "",
  });

  const { bio, favoritemovie, favoritegame, favoritetvseries } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1>Welcome {user && user.name}</h1>
      {/* <h3>A little bit about myself:{profile.bio}</h3>
      <h2>Favorite Movie:{profile.favoritemovie}</h2>
      <h2>Favorite Game:{profile.favoritegame}</h2>
      <h2>Favorite TV Series:{profile.favoritetvseries}</h2> */}
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
        <form className="form" onSubmit={(e) => onSubmit(e)}>
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
        {/* <input type="submit" className="btn btn-primary" /> */}
        <button onClick={onSubmit}>Submit</button>
      </Fragment>
    </Fragment>
  );
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, createProfile })(
  withRouter(Profile)
);
