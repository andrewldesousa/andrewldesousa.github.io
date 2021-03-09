---
title: "FastSS"
excerpt: "An Alexa skill that allows for word similarity queries and summarization of recent Reddit posts"
header:
  teaser: /img/fastss_header.jpeg
sidebar:
  - title: "Responsibilities"
    text: "Development of an Alexa skill and the API used by it to invoke NLP models"
---

This project was done with the


## Word similarities with word2vec
Word2vec is a technique for learning word embeddings in natural language processing. It uses a neural network model to learn word associations from a large corpus of text. As the name implies, word2vec represents each distinct word with a vector such that we can learn the level of semantic similarity between the words represented by those vectors. 


## TextSummarization

To achieve this, we used learned BERT sentence embeddings to build an extractive summarizer. In extractive text summarization, we aim to use deep learning to identify the important sentences or excerpts from a large text. Our extractive summarizer uses the HuggingFace Pytorch transformers library to run extractive summarizations. It does this by first embedding the sentences, then running a clustering algorithm, finding the sentences that are closest to the cluster's centroids.
