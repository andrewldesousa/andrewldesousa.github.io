---
title: "Mesh R-CNN"
excerpt: "A playground for Mesh R-CNN with model retrieval and texturing additions"
header:
  teaser: /img/mesh_rcnn_header.jpg
sidebar:
  - title: "Responsibilities"
    text: "Texturing, API development, visualizations"  
---

This project contains the development of a playground around Mesh R-CNN as well as our own additions to the mesh predictions pertaining to texturing and model retrieval. We have developed and deployed a web application that enables easy interaction with Mesh R-CNN. Texture information for meshes are maintained through the use of UV mapping techniques. We have also applied model retrieval with some moderate success as a way to return similar high-quality meshes for detected objects.

My contributions: API development, texturing (UV mapping and smoothing), and extending Mesh R-CNN visualizations.

For more information regarding the original Mesh R-CNN work, visit this [link](https://gkioxari.github.io/meshrcnn/). You can find the original paper and code there.

## UV Mapping for Mesh R-CNN

A straight forward extension to Mesh R-CNN was to apply UV mapping techniques in order to maintain some of the qualitative information of the original object that the predicted mesh represents. Using the by projecting the mesh back into 2D via the camera parameters, we can use the pixel color information and apply it to the mesh. Here is an example of that:

![Example](/img/mesh_rcnn_teaser.png)

## Additional Information
If you would like to learn more about this project, checkout our [report](/docs/mesh_rcnn_report.pdf). To see the server side of this application, visit [here](https://github.com/andrewldesousa/Mesh-R-CNN).

This project was completed by our group for the 3D Scanning and Spatial Learning practical course (Winter semester 2020/21) at the Technical University of Munich.
