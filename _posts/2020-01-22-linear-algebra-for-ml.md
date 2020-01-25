---
title: "Linear Algebra for ML"
---

<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>



## Linear Systems and Basic Definitions 

To start with, let's layout the definion of a system of linear equations. An linear equation has this form (x represents coefficients and a symbols represent variables):

$$
x_1a_1 + x_2a_2 + ... + x_na_n = y
$$

If there were a term in the equation with an exponent, it would no longer be considered a linear equation. A system of linear equations would then just be a set of equations in linear form, each with the same set of variables. A set of values that satisfies each equation in the system would constitute a solution to the system. If the system has more than one solution, then there would be multiple solutions in the solution set. A solution to a system of linear equations is represented by vectors in Linear Algebra.

### Scalars, Vectors, Matrices, and Tensors
Scalars, vectors, matrices, and tenors are some terms you should become comfortable with when dealing with Linear Algebra.

\begin{tabular}{|1|l|}
Apples & Green \\
Strawberries & Red \\
Oranges & Orange \\
\end{tabular}



How do these terms get applied? As I said earlier, a solution to a linear system is a vector. Also, a way to nicely represent linear systems is as a matrix, where each entry corresponds to a coeffiecient in the linear system and each row represents a different equation in the system.

Here is a system and it's matrix representation.


\begin{bmatrix}
    x_{11}       & x_{12} & x_{13} & \dots & x_{1n} \\
    x_{21}       & x_{22} & x_{23} & \dots & x_{2n} \\
    ... \\
    x_{d1}       & x_{d2} & x_{d3} & \dots & x_{dn}
\end{bmatrix}


Then, that brings us to the matrix equation.

$$
Ax = b
$$

The way to think about this equation is this: given a vector x and matrix A, apply matrix A to x and out comes b. This is known as a Linear transformation. A linear transformation in Linear Algebra occurs whenever you apply a Linear System to an object, where an object can be a vector, matrix, or tensor. The image of a linear transformation is b, which is the result of applying A to x.



## Matrix operations

Take a break here if you need to. Matrix operations, which don't require exceptional mathmatecal abilties to, come up quite frequently in Machine Learning so it is important that you nail this part.

Now that we've laid out the foundation to linear algebra, let's describe how operations regarding these matrices occur. So like normal scalar operations, matrices can be added, multiplied, inverted, and squared, but unlike scalars, they cannot be divided. 
