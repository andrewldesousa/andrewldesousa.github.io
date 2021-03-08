---
title: "Bundle Adjustment"
excerpt: "A Structure from Motion implementation"
header:
  image: /img/bundle_adjustment_header.png
  teaser: /img/bundle_adjustment_header.png
sidebar:
  - title: "Responsibilities"
    text: "Development of an Alexa skill and the API used by it to invoke NLP models"
gallery:
  - url: /assets/images/unsplash-gallery-image-1.jpg
    image_path: assets/images/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 1"
  - url: /assets/images/unsplash-gallery-image-2.jpg
    image_path: assets/images/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
  - url: /assets/images/unsplash-gallery-image-3.jpg
    image_path: assets/images/unsplash-gallery-image-3-th.jpg
    alt: "placeholder image 3"
---

This is an implementation of bundle adjustment on RGB-D
data taken from a Microsoft Kinect camera. We have used a global point matching
algorithm and a variety of solvers and cost functions when optimizing for the camera
poses and point coordinates that serve as the best model for a structure from a given scan.



{% include gallery caption="This is a sample gallery to go along with this case study." %}
