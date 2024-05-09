var quizData = [
    {
        "question": "<p>1. Simplify the expression \(\frac{2x^2 - 3x + 5}{x - 2}\).</p>",
        "options": ["<p>a) \(2x - 3 + \frac{5}{x - 2}\)</p>", "<p>b) \(2x - 3 + 5(x - 2)\)</p>", "<p>c) \(2x - 3 + \frac{5}{x + 2}\)</p>", "<p>d) \(2x - 3 + 5\)</p>"],
        "answer": "a",
        "explanation": "<p>To simplify the expression, we can factor out an \(x - 2\) from the numerator and divide both the numerator and denominator by \(x - 2\):</p><p>\(\frac{2x^2 - 3x + 5}{x - 2} = (2x - 3) + \frac{5}{x - 2}\)</p>",
        "hint": "Use the algebraic technique of factoring to simplify the expression.",
        "similar_question": {
            "question": "<p>Simplify the expression \(\frac{3x^3 - 2x^2 + 4x - 7}{x + 1}\).</p>",
            "solution": "<p>To simplify the expression, we can factor out an \(x + 1\) from the numerator and divide both the numerator and denominator by \(x + 1\):</p><p>\(\frac{3x^3 - 2x^2 + 4x - 7}{x + 1} = (3x^2 - 2x + 4) + \frac{-7}{x + 1}\)</p>"
        }
    },
    {
        "question": "<p>2. The graph of a line has a slope of \(3\) and passes through the point \((2, 5)\). What is the equation of this line?</p><svg width='200' height='200'><line x1='0' y1='0' x2='200' y2='200' style='stroke:black;stroke-width:2'/><circle cx='40' cy='100' r='5' style='fill:red'/></svg>",
        "options": ["<p>a) \(y = 3x + 5\)</p>", "<p>b) \(y = 3x - 1\)</p>", "<p>c) \(y = 3x + 2\)</p>", "<p>d) \(y = 3x - 2\)</p>"],
        "answer": "a",
        "explanation": "<p>The slope-intercept form of a line is \(y = mx + b\), where \(m\) is the slope and \(b\) is the y-intercept. We are given that the slope is \(3\) and the line passes through the point \((2, 5)\). Plugging in the slope and the point, we get \(y = 3x + 5\).</p>",
        "hint": "Use the slope-intercept form of a line equation: \(y = mx + b\), where \(m\) is the slope and \(b\) is the y-intercept.",
        "similar_question": {
            "question": "<p>The graph of a line has a slope of \(-2\) and passes through the point \((3, 4)\). What is the equation of this line?</p>",
            "solution": "<p>The slope-intercept form of a line is \(y = mx + b\), where \(m\) is the slope and \(b\) is the y-intercept. We are given that the slope is \(-2\) and the line passes through the point \((3, 4)\).</p><p>Plugging in the slope and the point, we get:</p><p>\(4 = -2(3) + b\)</p><p>\(b = 10\)</p><p>Therefore, the equation of the line is \(y = -2x + 10\).</p>"
        }
    },
    {
        "question": "<p>3. If the equation of a circle is \((x - 3)^2 + (y - 4)^2 = 16\), what are the coordinates of the center and the radius of the circle?</p>",
        "options": ["<p>a) Center: (3, 4), Radius: 4</p>", "<p>b) Center: (4, 3), Radius: 4</p>", "<p>c) Center: (3, 4), Radius: \(\sqrt{16}\)</p>", "<p>d) Center: (4, 3), Radius: \(\sqrt{16}\)</p>"],
        "answer": "a",
        "explanation": "<p>The general equation of a circle is \((x - h)^2 + (y - k)^2 = r^2\), where \((h, k)\) is the center and \(r\) is the radius. In this case, the center is \((3, 4)\) and the radius is \(4\).</p>",
        "hint": "Use the general equation of a circle: \((x - h)^2 + (y - k)^2 = r^2\), where \((h, k)\) is the center and \(r\) is the radius.",
        "similar_question": {
            "question": "<p>If the equation of a circle is \((x - 2)^2 + (y - 5)^2 = 9\), what are the coordinates of the center and the radius of the circle?</p>",
            "solution": "<p>The general equation of a circle is \((x - h)^2 + (y - k)^2 = r^2\), where \((h, k)\) is the center and \(r\) is the radius.</p><p>Comparing the given equation \((x - 2)^2 + (y - 5)^2 = 9\) to the general form, we can see that the center is \((2, 5)\) and the radius is \(\sqrt{9} = 3\).</p>"
        }
    },
    
    {
        "question": "<p>6. Evaluate the expression \(\sqrt{4x^2 - 9}\) when \(x = 3\).</p>",
        "options": ["<p>a) \(\sqrt{27}\)</p>", "<p>b) \(6\)</p>", "<p>c) \(3\)</p>", "<p>d) \(-3\)</p>"],
        "answer": "a",
        "explanation": "<p>To evaluate the expression \(\sqrt{4x^2 - 9}\) when \(x = 3\), we substitute the value of \(x\) into the expression:</p><p>\(\sqrt{4(3)^2 - 9} = \sqrt{36 - 9} = \sqrt{27}\)</p>",
        "hint": "Substitute the given value of \(x\) into the expression and then simplify the result.",
        "similar_question": {
            "question": "<p>Evaluate the expression \(\sqrt{9y^2 + 4}\) when \(y = -2\).</p>",
            "solution": "<p>To evaluate the expression \(\sqrt{9y^2 + 4}\) when \(y = -2\), we substitute the value of \(y\) into the expression:</p><p>\(\sqrt{9(-2)^2 + 4} = \sqrt{36 + 4} = \sqrt{40}\)</p>"
        }
    },
    {
        "question": "<p>7. What is the distance between the points \((2, 3)\) and \((5, 7)\)?</p>",
        "options": ["<p>a) \(\sqrt{10}\)</p>", "<p>b) \(\sqrt{13}\)</p>", "<p>c) \(\sqrt{18}\)</p>", "<p>d) \(\sqrt{26}\)</p>"],
        "answer": "b",
        "explanation": "<p>The distance between two points \((x_1, y_1)\) and \((x_2, y_2)\) is given by the formula \(\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\). In this case, the points are \((2, 3)\) and \((5, 7)\), so the distance is \(\sqrt{(5 - 2)^2 + (7 - 3)^2} = \sqrt{9 + 16} = \sqrt{25} = 5\).</p>",
        "hint": "Use the distance formula: \(\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\).",
        "similar_question": {
            "question": "<p>What is the distance between the points \((-3, 2)\) and \((4, -1)\)?</p>",
            "solution": "<p>The distance between two points \((x_1, y_1)\) and \((x_2, y_2)\) is given by the formula \(\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\).</p><p>Plugging in the points \((-3, 2)\) and \((4, -1)\), we get:</p><p>\(\sqrt{(4 - (-3))^2 + (-1 - 2)^2} = \sqrt{49 + 9} = \sqrt{58}\)</p>"
        }
    },
        {
            "question": "<p>7. What is the distance between the points \((2, 3)\) and \((5, 7)\)?</p>",
            "options": ["<p>a) \(\sqrt{10}\)</p>", "<p>b) \(\sqrt{13}\)</p>", "<p>c) \(\sqrt{18}\)</p>", "<p>d) \(\sqrt{26}\)</p>"],
            "answer": "b",
            "explanation": "<p>The distance between two points \((x_1, y_1)\) and \((x_2, y_2)\) is given by the formula \(\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\). In this case, the points are \((2, 3)\) and \((5, 7)\), so the distance is \(\sqrt{(5 - 2)^2 + (7 - 3)^2} = \sqrt{9 + 16} = \sqrt{25} = 5\).</p>",
            "hint": "Use the distance formula: \(\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\).",
            "similar_question": {
                "question": "<p>What is the distance between the points \((-3, 2)\) and \((4, -1)\)?</p>",
                "solution": "<p>The distance between two points \((x_1, y_1)\) and \((x_2, y_2)\) is given by the formula \(\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\).</p><p>Plugging in the points \((-3, 2)\) and \((4, -1)\), we get:</p><p>\(\sqrt{(4 - (-3))^2 + (-1 - 2)^2} = \sqrt{49 + 9} = \sqrt{58}\)</p>"
            }
        },
        {
            "question": "<p>8. The graph of a function \(f(x) = ax^2 + bx + c\) has a minimum at the point \((-2, 1)\). What is the value of \(b\)?</p><svg width='200' height='200'><line x1='0' y1='0' x2='200' y2='200' style='stroke:black;stroke-width:2'/><circle cx='40' cy='180' r='5' style='fill:red'/></svg>",
            "options": ["<p>a) \(-4\)</p>", "<p>b) \(-2\)</p>", "<p>c) \(2\)</p>", "<p>d) \(4\)</p>"],
            "answer": "b",
            "explanation": "<p>The general form of a quadratic function is \(f(x) = a(x - h)^2 + k\), where \((h, k)\) is the vertex. We are given that the vertex is \((-2, 1)\), so \(h = -2\) and \(k = 1\).</p><p>The coefficient \(b\) can be found using the formula \(b = -2ah\), which gives \(b = -2 \cdot a \cdot (-2) = 4a\). Since the vertex is a minimum, \(a > 0\), so \(b = 4a > 0\). Therefore, \(b = 2\).</p>",
            "hint": "Use the formula for the vertex of a quadratic function: \(h = -\frac{b}{2a}\) and \(k = f(h)\).",
            "similar_question": {
                "question": "<p>The graph of a function \(f(x) = ax^2 + bx + c\) has a maximum at the point \((3, 4)\). What is the value of \(b\)?</p>",
                "solution": "<p>The general form of a quadratic function is \(f(x) = a(x - h)^2 + k\), where \((h, k)\) is the vertex. We are given that the vertex is \((3, 4)\), so \(h = 3\) and \(k = 4\).</p><p>The coefficient \(b\) can be found using the formula \(b = -2ah\), which gives \(b = -2 \cdot a \cdot 3 = -6a\). Since the vertex is a maximum, \(a < 0\), so \(b = -6a > 0\). Therefore, \(b = -6\).</p>"
            }
        },
        {
            "question": "<p>9. The equation of a parabola is \(y = x^2 - 4x + 3\). What are the coordinates of the vertex of the parabola?</p>",
            "options": ["<p>a) \((-2, -1)\)</p>", "<p>b) \((-2, 1)\)</p>", "<p>c) \((2, -1)\)</p>", "<p>d) \((2, 1)\)</p>"],
            "answer": "a",
            "explanation": "<p>The general form of a quadratic function is \(f(x) = a(x - h)^2 + k\), where \((h, k)\) is the vertex. Comparing the given equation \(y = x^2 - 4x + 3\) to the general form, we can see that \(a = 1\), \(b = -4\), and \(c = 3\).</p><p>The coordinates of the vertex can be found using the formula \(h = -\frac{b}{2a}\) and \(k = f(h)\). Plugging in the values, we get \(h = -\frac{-4}{2(1)} = 2\) and \(k = 1^2 - 4(2) + 3 = -1\). Therefore, the vertex is at \((-2, -1)\).</p>",
            "hint": "Use the general form of a quadratic function: \(f(x) = a(x - h)^2 + k\), where \((h, k)\) is the vertex.",
            "similar_question": {
                "question": "<p>The equation of a parabola is \(y = -2x^2 + 6x - 1\). What are the coordinates of the vertex of the parabola?</p>",
                "solution": "<p>The general form of a quadratic function is \(f(x) = a(x - h)^2 + k\), where \((h, k)\) is the vertex. Comparing the given equation \(y = -2x^2 + 6x - 1\) to the general form, we can see that \(a = -2\), \(b = 6\), and \(c = -1\).</p><p>The coordinates of the vertex can be found using the formula \(h = -\frac{b}{2a}\) and \(k = f(h)\). Plugging in the values, we get \(h = -\frac{6}{2(-2)} = 3\) and \(k = -2(3)^2 + 6(3) - 1 = 4\). Therefore, the vertex is at \((3, 4)\).</p>"
            }
        },
            {
                "question": "<p>10. The graph of a function \(f(x) = ax^2 + bx + c\) passes through the points \((-1, 1)\) and \((2, 9)\). What is the value of \(a\)?</p><svg width='200' height='200'><line x1='0' y1='0' x2='200' y2='200' style='stroke:black;stroke-width:2'/><circle cx='20' cy='180' r='5' style='fill:red'/><circle cx='40' cy='180' r='5' style='fill:red'/></svg>",
                "options": ["<p>a) \(-1\)</p>", "<p>b) \(-\frac{1}{2}\)</p>", "<p>c) \(\frac{1}{2}\)</p>", "<p>d) \(1\)</p>"],
                "answer": "c",
                "explanation": "<p>We can use the given points to set up a system of equations to solve for the coefficients \(a\), \(b\), and \(c\). Plugging in the points \((-1, 1)\) and \((2, 9)\), we get:</p><p>\(f(-1) = a(-1)^2 + b(-1) + c = a - b + c = 1\)</p><p>\(f(2) = a(2)^2 + b(2) + c = 4a + 2b + c = 9\)</p><p>Solving this system of equations, we get \(a = \frac{1}{2}\).</p>",
                "hint": "Set up a system of equations using the given points \((-1, 1)\) and \((2, 9)\) to solve for the coefficients \(a\), \(b\), and \(c\).",
                "similar_question": {
                    "question": "<p>The graph of a function \(f(x) = ax^2 + bx + c\) passes through the points \((0, 2)\) and \((3, 11)\). What is the value of \(a\)?</p>",
                    "solution": "<p>We can use the given points to set up a system of equations to solve for the coefficients \(a\), \(b\), and \(c\). Plugging in the points \((0, 2)\) and \((3, 11)\), we get:</p><p>\(f(0) = a(0)^2 + b(0) + c = c = 2\)</p><p>\(f(3) = a(3)^2 + b(3) + c = 9a + 3b + 2 = 11\)</p><p>Solving this system of equations, we get \(a = 1\).</p>"
                }
            }
        ];