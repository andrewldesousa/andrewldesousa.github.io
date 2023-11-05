import Layout from '../components/Layout'
import * as React from 'react'

export default function Home (): React.ReactElement {
  return (
    <Layout>
      <p>
        I am a Software Engineer based in San Francisco, California. I currently work at <a href="https://www.microsoft.com/en-us/">Microsoft</a>.
      </p>

      <p>
        My ambition is to work on technically interesting projects that have a positive impact on society. My technical interests are in Machine Learning, Computer Vision, and Large-scale Distributed Systems.
      </p>

      <p>
        Previously, I worked on an identity verification platform at <a href="https://www.uber.com/">Uber</a>.
        In 2022, I graduated from the <a href="https://www.tum.de/en/">Technical University of Munich</a> with a Master's degree in Computer Science. The focus of my studies was on Machine Learning and Computer Vision.
        I did my thesis on Synthetic-to-Real Domain Adaptation for Computer Vision in cooperation with <a href="https://www.bmwgroup.com/en.html">BMW Group</a>. Prior to that, I worked part-time and as an intern at several other companies during my studies (see <a href="https://www.linkedin.com/in/andrewldesousa/">my LinkedIn</a> for more details).
      </p>

      <p>
        Other interests: guitar, travel, video games, and reading.
      </p>
    </Layout>
  )
}
