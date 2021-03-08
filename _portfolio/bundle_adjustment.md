---
title: "Mesh R-CNN"
excerpt: "A playground for Mesh R-CNN with model retrieval and texturing additions"
header:
  image: /img/mesh_rcnn_header.png
  teaser: /img/mesh_rcnn_teaser.png
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

## FastSynonym
This model will get the synonyms for any word (in English) the user gives. As an example, the user can say 
<p align="center">
“Alexa, what's another word for <ins>eat</ins> ?”.
</p>

**Model Used: The Word2Vec Skipgram model.**

Word2vec is a technique for learning word embeddings in natural language processing. It uses a neural network model to learn word associations from a large corpus of text. As the name implies, word2vec represents each distinct word with a vector such that we can learn the level of semantic similarity between the words represented by those vectors. 

## FastSummarise
It is very important to be informed of the latest things happening around our world in different areas of life (medicine, agriculture, science, etc). This is why Reddit is a suitable platform to get latest posts on. However, it can be tedious to read very long Reddit posts. We may want just a summary of the whole post.

FastSummarise is a project that summarises the latest posts from any subreddit for you. As an example, the user says:
<p align="center">
  “Alexa, summarize the latest post in <ins>learningpython</ins>”
  </p>

The user can specify the subreddit you want and how many posts you want summarized (the default is 1). If the number of posts to be summarized is more than one, Alexa will take turns summarizing each one and giving you the summary (this will definitely take some time).

**NLP Category: Text Summarization**

To achieve this, we used learned BERT sentence embeddings to build an extractive summarizer. In extractive text summarization, we aim to use deep learning to identify the important sentences or excerpts from a large text. Our extractive summarizer uses the HuggingFace Pytorch transformers library to run extractive summarizations. It does this by first embedding the sentences, then running a clustering algorithm, finding the sentences that are closest to the cluster's centroids. 

{% include gallery caption="This is a sample gallery to go along with this case study." %}
