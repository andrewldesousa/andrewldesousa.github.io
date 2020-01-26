---
title: "Linear Algebra for Machine Learning"
---

<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

## Linear Systems and Basic Definitions 

To start with, let's layout a definion for a linear equation. A linear equation maintains this form ($$x_n$$ represents input parameters, $$a_n$$ represents coefficients or weights that scale the input parameters):

$$
a_1x_1 + a_2x_2 + ... + a_nx_n = y
$$

If you were the output of a linear equation with respect to its inputs, you would find that all points fall on the same line. This defines a linear relationship. If there were a term in the equation with a degree greater than 1 (for example: $$a_nx_n^2$$), the equation would no longer be considered linear because the points would no longer all lie on a single line.

A system of linear equations is a set of equations in linear form with respect to the same input parameters. A set of values that satisfies all equations in a system is solution to that system. And a solution refers to a point in which all lines of a system intersect. A set of input parameters corresponding to a solution are represented as vectors in Linear Algebra.

### Scalars, Vectors, Matrices, and Tensors
Scalars, vectors, matrices, and tensors are terms you must become comfortable with when dealing with Linear Algebra and Machine Learning.

How do these terms get applied? As I said earlier, a solution to a linear system gets represented as vectors. Linear systems get represented by matrices, where each row corresponds to a different equation in the system and each entry corresponds to a coefficient in that row's equation. 

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
