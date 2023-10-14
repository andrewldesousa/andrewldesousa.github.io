import { Link } from "react-router-dom";
import Layout from '../components/Layout';


export default function Home() {
  return (
    <Layout>
      <p>
        I'm a software engineer based in San Francisco, California. I currently work at Uber.
        
        In 2022, I graduated from the Technical Unviersity of Munich with a Master's degree in Computer Science.
        I'm currently interested in the research and applications of Machine Learning and Computer Vision.
      </p>
      <div className="posts_section">
        <h2 className="posts_section__title">Posts</h2>
        <div className="posts_section__post_card">
          <Link to="/diffusion">
            <h3 className="posts_section__post_card__title">
              Diffusion Models Notes<span className="posts_section__post_card__date">2023-10-12</span>
            </h3>
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