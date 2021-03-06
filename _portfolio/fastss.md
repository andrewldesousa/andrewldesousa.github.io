---
title: "FastSS"
excerpt: "An Alexa skill that allows for word similarity queries and summarization of recent Reddit posts"
header:
  teaser: /img/fastss_header.jpeg
sidebar:
  - title: "Responsibilities"
    text: "Development of an Alexa skill and the API used by it to invoke NLP models"
  -
---

This project is about an Amazon Alexa skill that allows for word similarity queries and summarization of recent Reddit posts. The code repository can be found [here](https://github.com/andrewldesousa/FastSS). Our API was deployed with AWS EC2 using the FastAPI library.


## Word Similarities with Word2vec
Word2vec is a technique for learning word embeddings in natural language processing. Through the use of context word predictions given a center word, word2vec is able to find similar words nearby in vector space. Our Alexa application allows users to query the vector space through natural language.

This (group) project was presented in my Deep Learning for NLP seminar (Winter semester 2020/21) at the Techical University of Munich.
