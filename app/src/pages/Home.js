import { Link } from "react-router-dom";
import Layout from '../components/Layout';
import PostCard from "../components/PostCard";


export default function Home() {
  return (
    <Layout>
      <p>
        I am a Software Engineer based in San Francisco. I currently work on an identity verification platform at Uber.
      </p>

      <p style={{"margin-top": "1em"}}>
        My ambition is to work on technically interesting projects that have a positive impact on society. My technical interests are in Machine Learning, Computer Vision, and Large-scale Distributed Systems.
      </p>

      <p style={{"margin-top": "1em"}}>
        In 2022, I graduated from the Technical University of Munich with a Master's degree in Computer Science. The focus of my studies was on Machine Learning and Computer Vision (3D and 2D). 
        I did my thesis on Synthetic-to-Real Translation for Computer Vision in cooperation with BMW Group.
      </p>

      <p style={{"margin-top": "1em"}}>
        Other interests: guitar, travel, gym, video games, and reading.
      </p>    


      {/* <div className="posts-section">
        <h2 className="posts-section__title">Posts</h2>
        <PostCard 
          title="Diffusion Models"
          toPath="/diffusion"
          description="Resources, findings, and thoughts on Diffusion models" 
          date="2023-10-12" thumbnailSrc="diffusion.png"/>
      </div> */}
    </Layout>
  );
}