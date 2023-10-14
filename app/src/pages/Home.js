import { Link } from "react-router-dom";
import Layout from '../components/Layout';
import PostCard from "../components/PostCard";


export default function Home() {
  return (
    <Layout>
      <p>
        I'm a software engineer based in San Francisco, California. I currently work at Uber.
        In 2022, I graduated from the Technical Unviersity of Munich with a Master's degree in Computer Science.
        I'm currently interested in the research and applications of Machine Learning and Computer Vision.
      </p>
      <div className="posts-section">
        <h2 className="posts-section__title">Posts</h2>
        <PostCard 
          title="Diffusion Models"
          toPath="/diffusion"
          description="Resources, findings, and thoughts on Diffusion models" 
          date="2023-10-12" thumbnailSrc="diffusion.png"/>
      </div>
    </Layout>
  );
}