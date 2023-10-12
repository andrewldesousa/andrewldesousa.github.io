import { Outlet, Link } from "react-router-dom";
import Layout from './Layout';


function App() {
  return (
    <Layout>
      <div className="home-grid">
        <div>
          <h2>About</h2>
          <p>
            I'm a software engineer based in San Francisco, California.
            In 2022, I graduated from the Technical Unviersity of Munich with a Master's degree in Computer Science where I focused on Machine Learning and Computer Vision. Prior to that I completed a Bachelor's degree in Computer Science at the University of Miami.
            <br></br><br></br>
            I'm currently interested in the research and applications of Machine Learning and Computer Vision (NeRFs, Deep Generative Modeling, Diffusion Models, and others). I am also interested in Backend Engineering, System Design, and Machine Learning Engineering.
          </p>
        </div>          
      </div>
    </Layout>
  );
}

export default App;
