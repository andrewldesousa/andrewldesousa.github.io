---
title: "Linear Algebra for Machine Learning"
---

<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

This post series is designed for people who want to do Machine Learning, but find that the Linear Algebra involved is making it more difficult than it needs to be. This series contains the most useful Linear Algebra concepts used in Machine Learning. By mastering these concepts, the Linear Algebra in Machine Learning will not hinder your ability to understand these learning algorithms at a deep level.

## Linear Systems and Basic Definitions 

Let's layout a definion for a linear equation. A linear equation maintains this form:

$$
a_1x_1 + a_2x_2 + ... + a_nx_n = y
$$

where $$x_n$$ represents input parameters and $$a_n$$ represents coefficients or weights that scale the input parameters.

If you were to plot each valid set of $$x$$ variables for a fixed weights and a fixed $$y$$, you would find that the graph results in a set of points which all fall on a single line. If there were a term in the equation with a degree greater than 1 (for example: $$a_nx_n^2$$), the equation would no longer be considered linear because the points would no longer all lie on a straight line.

A system of linear equations is a set of equations in linear form with respect to the same input parameters. A set of input paramters that satisfy each equation in a system gets called a solution to that system. Graphically speaking, a solution refers to a point in which all the lines of a system intersect. 

#### Example 1

$$
1x_1 + 3x_2 = 1 \\
2x_1 + 6x_2 = 4 \\

x_1 = 1 \textrm{ and } x_2 = 2 \textrm{ form a valid solution to this system}
$$

In the example above, there is only one valid solution to the problem.

### Scalars, Vectors, Matrices, and Tensors
Scalars, vectors, matrices, and tensors are terms you must become comfortable with when dealing with Linear Algebra and Machine Learning.

How do these terms get applied? A solution to a linear system (or a set of input paramaters that satisfy each equation) gets represented as a vector. Linear systems get represented by matrices, where each row corresponds to a different equation in the system and each entry corresponds to a coefficient in that row's equation. 

Here is a system and it's matrix representation.

$$
2x_1 + 3x_2 = 1
2x_1 + 6x_2 = 3


\begin{bmatrix}
    x_{11}       & x_{12} & x_{13} & \dots & x_{1n} \\
    x_{21}       & x_{22} & x_{23} & \dots & x_{2n} \\
    ... \\
    x_{d1}       & x_{d2} & x_{d3} & \dots & x_{dn}
\end{bmatrix}
$$

Then, that brings us to the matrix equation.

$$
Ax = b
$$

The way to think about this equation is this: given a vector x and matrix A, apply matrix A to x and out comes b. This is known as a Linear transformation. A linear transformation in Linear Algebra occurs whenever you apply a Linear System to an object, where an object can be a vector, matrix, or tensor. The image of a linear transformation is b, which is the result of applying A to x.



## Matrix operations

Take a break here if you need to. Matrix operations, which don't require exceptional mathmatecal abilties to, come up quite frequently in Machine Learning so it is important that you nail this part.

Now that we've laid out the foundation to linear algebra, let's describe how operations regarding these matrices occur. So like normal scalar operations, matrices can be added, multiplied, inverted, and squared, but unlike scalars, they cannot be divided. 
