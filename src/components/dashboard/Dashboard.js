import Reac, { Fragment } from "react";
import PropTypes from "prop-types";
import { initialMovies } from "../../actions/movies";

const Dashboard = (props) => {
  return (
    <>
      <div className="dashboard">Dashboard</div>
      <div className="search">
        <input type="text" placeholder="ex: Lion King" />
        <button>Search</button>
        <input type="text" placeholder="ex: Movie" />
        <button>Search</button>
      </div>
    </>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
