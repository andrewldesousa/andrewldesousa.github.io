---
title: "Linear Algebra for Machine Learning (Part 1)"
---

<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

This series contains the most useful Linear Algebra concepts used in Machine Learning. By mastering these concepts, the Linear Algebra involved in Machine Learning will not get in your way when it comes to understanding ML algorithms at a deep level. This post series is designed for people who want to do Machine Learning and either don't quite meet the Linear Algebra prequisites or haven't has seen Linear Algebra in a while and he/she needs a refresher.

## Linear Systems and Basic Definitions 

Let's layout a definion for a linear equation. Here is an example of a linear equation:

$$
a_1x_1 + a_2x_2 + ... + a_nx_n = y
$$

where $$x_n$$ represents input parameters and $$a_n$$ represents coefficients. Input paramaters are the values that get passed to a function. Coefficients are simply weights that scale the values provided by the input.

If you were to plot each valid set of $$x$$ inputs for a fixed set of weights and a fixed $$y$$ value, you would find that the graph results in a set of points which could all be fit onto a line. That is simply what it means for an equation to be linear, and any function that doesn't fit on a line is not a linear function. If there were a term in the equation with a degree greater than 1 (for example: $$a_nx_n^2$$), the plot of the function would not be a line and the equation would not be linear.

A system of linear equations is a set of equations in linear form with respect to the same input parameters. A set of input paramters that satisfy each equation in a system gets called a solution to that system. Graphically speaking, a solution refers to a point in which all the lines of a system intersect.

#### Example 1

$$
1x_1 + 3x_2 = 2 \\
1x_1 + 6x_2 = 5 \\
\\
x_1 = -1 \textrm{ and } x_2 = 1 
$$

In the example above, there is exactly one solution to the problem. By plotting both lines (one for each equation), you would find that the lines intersect at point (-1, 1) and only at point (-1, 1).

Systems don't always have solutions and those systems are called inconsistent. Systems with solutions are called consistent. Consistent systems can be divided into two sets: systems with one solution and systems with infinitely many solutions.

### Scalars, Vectors, Matrices, and Tensors
Scalars, vectors, matrices, and tensors are terms you must become comfortable with when dealing with Linear Algebra and Machine Learning.

How do these terms get applied? Well, a solution to a linear system (or a set of input paramaters that satisfy each equation of a sytem) gets represented as a vector. In example 1, the solution can be represented in vector form as $$x = \begin{bmatrix}-1 \\ 1\end{bmatrix}$$.

Systems of equations get represented by matrices, where each row corresponds to a different equation in the system and each entry corresponds to a coefficient in that row's equation. The system in example 1 could be represented in matrix form as:

$$
A = 
\begin{bmatrix}
  1 & 3 \\ 
  1 & 6 
\end{bmatrix}
$$

That brings us to the infamous matrix equation. By convention, matrix equations look like this:

$$
Ax = b
$$

where $$A$$ is the matrix, $$x$$ is the input vector, and $$b$$ is the solution vector. This mapping of $$x$$ to $$b$$ through application of $$A$$ is called a Linear transformation. A linear transformation in Linear Algebra occurs whenever you apply a linear system to an object (an object can be a vector, matrix, or tensor). The image of a linear transformation is $$b$$, the output of applying $$A$$ to $$x$$.

## Matrix operations
Matrix operations, which don't require exceptional mathmatical abilties to understand, are probably the most important thing to understand in Linear Algebra.

Now that we've laid out the foundation to Linear Algebra, let's describe how operations among objects like matrices and vectors occur. Like normal operations between scalar values, matrices can be added, multiplied, inverted (though not all can be inverted), and squared.

