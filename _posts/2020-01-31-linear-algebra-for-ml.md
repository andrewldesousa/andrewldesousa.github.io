---
title: "Linear Algebra for Machine Learning"
---

<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

This series contains the most useful Linear Algebra concepts used in Machine Learning. By mastering these concepts, the Linear Algebra in Machine Learning will not hinder your ability to understand these learning algorithms at a deep level. This post series is designed for people who want to do Machine Learning and don't quite meet the Linear Algebra prequisites or simply need a refresher because it has been a while since he/she has seen Linear Algebra. 

## Linear Systems and Basic Definitions 

Let's layout a definion for a linear equation. Here is its form:

$$
a_1x_1 + a_2x_2 + ... + a_nx_n = y
$$

where $$x_n$$ represents input parameters and $$a_n$$ represents coefficients or weights that scale the input parameters. Input paramaters can be thought of as the values that you pass to a function.

If you were to plot each valid set of $$x$$ variables for a fixed set of weights and a fixed $$y$$ value, you would find that the graph results in a set of points which could all be fit onto a line. Any function that doesn't fit on a line is not a linear function. If there were a term in the equation with a degree greater than 1 (for example: $$a_nx_n^2$$), the equation would no longer be considered linear.

A system of linear equations is a set of equations in linear form with respect to the same input parameters. A set of input paramters that satisfy each equation in a system gets called a solution to that system. Graphically speaking, a solution refers to a point in which all the lines of a system intersect. 

#### Example 1

$$
1x_1 + 3x_2 = 2 \\
2x_1 + 6x_2 = 4 \\
\\
x_1 = -1 \textrm{ and } x_2 = 1 
$$

In the example above, there is one solution to the problem. By plotting both lines (one for each equation), you would find that the lines intersect at point (-1, 1).

### Scalars, Vectors, Matrices, and Tensors
Scalars, vectors, matrices, and tensors are terms you must become comfortable with when dealing with Linear Algebra and Machine Learning.

How do these terms get applied? Well, a solution to a linear system (or a set of input paramaters that satisfy each equation of a sytem) gets represented as a vector. In example 1, the solution would be $$x = \begin{bmatrix}-1 \\ 1\end{bmatrix}$$.

Systems of equations get represented by matrices, where each row corresponds to a different equation in the system and each entry corresponds to a coefficient in that row's equation. The system in example 1 would get represented like this:

$$
A = 
\begin{bmatrix}
  1 & 2 \\ 
  2 & 6 
\end{bmatrix}
$$

That brings us to the infamous matrix equation. By convention, matrix equations thus looks like this:

$$
Ax = b
$$

where $$A$$ is the matrix to with each entry corresponding to a weight $$a_n$$, the input values gets $$x$$, and $$y$$ is the solution to the matrix equation. The way to think about this equation is this: given a vector $$x$$ and matrix $$A$$, apply matrix A to x and out comes $$b$$. This mapping of $$x$$ to $$b$$ through application of $$A$$ is called Linear transformation. A linear transformation in Linear Algebra occurs whenever you apply a Linear System to an object, where an object can be a vector, matrix, or tensor. The image of a linear transformation is b, which is the result of applying A to x.

## Matrix operations

Take a break here if you need to. Matrix operations, which don't require exceptional mathmatecal abilties to, come up quite frequently in Machine Learning so it is important that you nail this part.

Now that we've laid out the foundation to linear algebra, let's describe how operations regarding these matrices occur. So like normal scalar operations, matrices can be added, multiplied, inverted, and squared, but unlike scalars, they cannot be divided. 
