程序语言设计的基本元素: 基本表现形式,组合方法,抽象方法

复合过程:(define (square x) (* x x)),我们定义了一个复合过程，并给他取了一个名字为square。
过程定义的一般形式是(define (<name> <parameters>) <body>)

在定义完这个复合过程之后，我们还可以把他作为基本构件去定义别的过程。比如
(define (sum-of-squares x y)(+ (square x) (square y)))

条件表达式和谓词:以求绝对值为例 (define (abs x) (cond ((> x 0) x)
                                                  ((= x 0) x)
                                                  ((< x 0) (- x)))
另一种写法                   (define (abs x) (cond ((< x 0) (- x))
                                                  （else x))
三言表达式的写法              (define (abs x) if (< x 0) (- x) (x))
基本谓词除了<,=,>外还有and,no,not.

计算阶乘

```
(define (factorial n) (if (= n 1) 1 (* n (factorial (- n 1)))))
```
或者</br>

```
(define (factorial n) (fact-iter 1 1 n))
(define (fact-iter product counter max-count)
        (if (> counter max-count)) product
        (fact-iter (* counter product)
                   (+ counter 1)
                   (max-count)))
```