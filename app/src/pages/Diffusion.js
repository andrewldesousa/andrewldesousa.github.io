import Layout from '../components/Layout';
import Latex from 'react-latex';


function App() {
  return (
    <Layout>
      <h3 className="post_header">Diffusion Models Notes</h3>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <br></br>

      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <Latex displayMode={true}>$$(3\times 4) \div (5-3)$$</Latex>

      <h4>
        Helpful Resources
      </h4>
      <ul>
        <a href="https://arxiv.org/abs/2006.11239"><li>Denoising Diffusion Probabilistic Models</li></a>
        <a href="https://arxiv.org/abs/2208.11970"><li>Understanding Diffusion Models: A Unified Perspective</li></a>
      </ul>
    </Layout>
  );
}

export default App;
