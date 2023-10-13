import { Outlet, Link } from "react-router-dom";
import Layout from "../components/Layout";
import ModelViewer from "../components/ModelViewer";

function Projects() {
  return (
    <Layout>
      <div className="home-grid">
        <div>
          <h2>Projects</h2>
          <p style={{width:"700px"}}>Coming soon...</p> {/* This is a hack */}
          <ModelViewer />
        </div>
      </div>
  </Layout>
  );
}

export default Projects;
