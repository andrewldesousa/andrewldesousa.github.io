import { Outlet, Link } from "react-router-dom";
import Layout from "./Layout";

function Projects() {
  return (
    <Layout>
      <div className="home-grid">
        <div>
          <h2>Projects</h2>
          <p style={{width:"700px"}}>Coming soon...</p> {/* This is a hack */}
        </div>
      </div>
  </Layout>
  );
}

export default Projects;
