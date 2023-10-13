import { Outlet, Link } from "react-router-dom";
import Layout from '../components/Layout';


function App() {
  return (
    <Layout>
      <p>
        I'm a software engineer based in San Francisco, California. In 2022, I graduated from the Technical Unviersity of Munich with a Master's degree in Computer Science where I focused on Machine Learning and Computer Vision. Prior to that I completed a Bachelor's degree in Computer Science at the University of Miami.
        I'm currently interested in the research and applications of Machine Learning and Computer Vision (NeRFs, Deep Generative Modeling, Diffusion Models, and others). I am also interested in Backend Engineering, System Design, and Machine Learning Engineering.
      </p>
      <div className="posts_section">
        <h2 className="posts_section__title">Posts</h2>
        <div className="posts_section__post_card">
          <Link to="/diffusion">
            <h3 className="posts_section__post_card__title">Diffusion Models Deep Dive</h3>
            <div className="posts_section__post_card__body">
              <div className="posts_section__post_card__description">
                Resources, findings, and thoughts on Diffusion Models
              </div>
              <div className="posts_section__post_card__image">
                <img src="thumbnail.png" height="74px" width="130px">
                </img>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default App;
