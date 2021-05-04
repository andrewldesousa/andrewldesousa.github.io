Datasets can be generated from a complex distribution, which is often the case for many real world applications. Complex distributions don't converge well with the classical distributions (gaussian, exponential, etc.) which have many useful and/or convenient problems, but are limited in their scope. This reality complicates the process of having to model a complex distribution which we need to do in order to produce generative sampling and/or density estimation applications.

For this post, I will explain how we can use variational autoencoders to model $\mathbb{p}(x)$ where $\mathbb{p}(x)$ is a complex distribution.

### Approaches
There are several other approaches that can be used for modeling complex distributions. These approaches will not be covered in this post.
- Normalizing Flows
- Generative Adversarial Networks
- Mixture of Gaussians

## LVM
