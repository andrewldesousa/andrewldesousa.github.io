import Layout from '../components/Layout';


function App() {
  return (
    <Layout>
      <h2 className="post__header">Diffusion Models</h2>
      <h4><b>Note: this post is a work in progress.</b></h4>
      <p>
        Diffusion models are a class of deep generative models capable of modeling complex distributions (e.g. image datasets). They define a Markov chain over a sequence of latent variables, where each latent variable is a noisy version of the previous latent variable. The sequence of latent variables is then used to generate the data.
      </p>  
      <div className="post__figure">
        <img src="diffusion_figure.png" height="140px" width="600px"></img>
        <p>Figure 1: Diffusion model</p>
      </div>
      <p>
        What distinguishes diffusion models from other types of latent variable models is that the approximate posterior, called the forward process or diffusion process, is fixed to a Markov chain that gradually adds Gaussian noise to the data according to a variance schedule. This is in contrast to other latent variable models, such as VAEs, where the approximate posterior is a neural network that takes in the data as input and outputs the parameters of a latent distribution.
      </p>
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
