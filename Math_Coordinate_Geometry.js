var quizData = [
    {
        "question": "<p> Solve for <em>x</em> in the equation \(3x + 7 = 2x + 13\):</p>",
        "options": ["<p>a) \(1\)</p>", "<p>b) \(2\)</p>", "<p>c) \(3\)</p>", "<p>d) \(4\)</p>"],
        "answer": "b",
        "explanation": "<p>To solve the equation \(3x + 7 = 2x + 13\), first subtract \(2x\) from both sides:</p><p>\(x + 7 = 13\). Next, subtract 7 from both sides:</p><p>\(x = 6\).</p>"
    },
    {
        "question": "<p> What is the value of \(4^2 - 3 \times 2\)?</p>",
        "options": ["<p>a) \(7\)</p>", "<p>b) \(9\)</p>", "<p>c) \(11\)</p>", "<p>d) \(13\)</p>"],
        "answer": "c",
        "explanation": "<p>\(4^2 = 16\) and \(3 \times 2 = 6\). Therefore, \(4^2 - 3 \times 2 = 16 - 6 = 10\).</p>"
    },
    {
        "question": "<p> What is the value of \(z\) when \(z = 3y + 2\) and \(y = 4\)?</p>",
        "options": ["<p>a) \(12\)</p>", "<p>b) \(14\)</p>", "<p>c) \(16\)</p>", "<p>d) \(18\)</p>"],
        "answer": "b",
        "explanation": "<p>Substituting \(y = 4\) into the equation \(z = 3y + 2\), we get \(z = 3 \times 4 + 2 = 12 + 2 = 14\).</p>"
    },
    {
        "question": "<p> A square has a side length of 6 cm. What is the perimeter of the square?</p><svg width='100' height='100'><rect x='20' y='20' width='60' height='60' style='fill:lightblue;stroke:black;stroke-width:2'/></svg>",
        "options": ["<p>a) \(12\)</p>", "<p>b) \(18\)</p>", "<p>c) \(24\)</p>", "<p>d) \(36\)</p>"],
        "answer": "c",
        "explanation": "<p>The perimeter of a square is given by \(4 \times side\). Since the side length is 6 cm, the perimeter is \(4 \times 6 = 24\) cm.</p>"
    },
    {
        "question": "<p> The product of two numbers is 24 and their sum is 9. What are the two numbers?</p>",
        "options": ["<p>a) \(3\) and \(6\)</p>", "<p>b) \(4\) and \(5\)</p>", "<p>c) \(6\) and \(3\)</p>", "<p>d) \(7\) and \(2\)</p>"],
        "answer": "b",
        "explanation": "<p>Let the numbers be \(x\) and \(y\). Then, \(x \cdot y = 24\) and \(x + y = 9\). The numbers \(4\) and \(5\) satisfy these conditions.</p>"
    },
    {
        "question": "<p> If a rectangle has a length of \(10\) cm and a width of \(4\) cm, what is its area?</p><svg width='100' height='40'><rect x='0' y='0' width='100' height='40' style='fill:lightblue;stroke:black;stroke-width:2'/></svg>",
        "options": ["<p>a) \(20\)</p>", "<p>b) \(30\)</p>", "<p>c) \(40\)</p>", "<p>d) \(50\)</p>"],
        "answer": "c",
        "explanation": "<p>The area of a rectangle is given by \(length \times width\). Therefore, the area is \(10 \times 4 = 40\) square centimeters.</p>"
    },
    {
        "question": "<p> Solve for \(x\) in the equation \(2x + 6 = 4x - 8\):</p>",
        "options": ["<p>a) \(-2\)</p>", "<p>b) \(0\)</p>", "<p>c) \(2\)</p>", "<p>d) \(4\)</p>"],
        "answer": "a",
        "explanation": "<p>To solve the equation \(2x + 6 = 4x - 8\), first subtract \(2x\) from both sides:</p><p>\(6 = 2x - 8\). Next, add 8 to both sides:</p><p>\(14 = 2x\). Finally, divide both sides by 2:</p><p>\(x = -2\).</p>"
    },
    {
        "question": "<p> What is the value of \(4y - 3\) when \(y = 2\)?</p>",
        "options": ["<p>a) \(-1\)</p>", "<p>b) \(1\)</p>", "<p>c) \(5\)</p>", "<p>d) \(7\)</p>"],
        "answer": "c",
        "explanation": "<p>Substituting \(y = 2\) into the expression \(4y - 3\), we get \(4 \cdot 2 - 3 = 8 - 3 = 5\).</p>"
    },
    {
        "question": "<p> The following triangle has sides of length \(6\), \(8\), and \(10\). Is it a right triangle?</p><svg width='120' height='120'><polygon points='10,110 50,10 110,110' style='fill:lightblue;stroke:black;stroke-width:2'/></svg>",
        "options": ["<p>a) Yes</p>", "<p>b) No</p>", "<p>c) Cannot be determined</p>", "<p>d) Not enough information</p>"],
        "answer": "a",
        "explanation": "<p>By the Pythagorean theorem, a triangle is a right triangle if \(a^2 + b^2 = c^2\). Here, \(6^2 + 8^2 = 10^2\), so it is a right triangle.</p>"
    },
    {
        "question": "<p> If \(y\) is a positive integer, what is the value of \(3y\) when \(y = 4\)?</p>",
        "options": ["<p>a) \(4\)</p>", "<p>b) \(8\)</p>", "<p>c) \(12\)</p>", "<p>d) \(16\)</p>"],
        "answer": "c",
        "explanation": "<p>The value of \(3y\) when \(y = 4\) is \(3 \cdot 4 = 12\).</p>"
    },
    {
        "question": "<p> Simplify the expression \(\frac{2x^2 - 3x + 5}{x - 2}\).</p>",
        "options": ["<p>a) \(2x - 3 + \frac{5}{x - 2}\)</p>", "<p>b) \(2x - 3 + 5(x - 2)\)</p>", "<p>c) \(2x - 3 + \frac{5}{x + 2}\)</p>", "<p>d) \(2x - 3 + 5\)</p>"],
        "answer": "a",
        "explanation": "<p>To simplify the expression, we can factor out an \(x - 2\) from the numerator and divide both the numerator and denominator by \(x - 2\):</p><p>\(\frac{2x^2 - 3x + 5}{x - 2} = (2x - 3) + \frac{5}{x - 2}\)</p>"
    },
    {
        "question": "<p> The graph of a line has a slope of \(3\) and passes through the point \((2, 5)\). What is the equation of this line?</p><svg width='200' height='200'><line x1='0' y1='0' x2='200' y2='200' style='stroke:black;stroke-width:2'/><circle cx='40' cy='100' r='5' style='fill:red'/></svg>",
        "options": ["<p>a) \(y = 3x + 5\)</p>", "<p>b) \(y = 3x - 1\)</p>", "<p>c) \(y = 3x + 2\)</p>", "<p>d) \(y = 3x - 2\)</p>"],
        "answer": "a",
        "explanation": "<p>The slope-intercept form of a line is \(y = mx + b\), where \(m\) is the slope and \(b\) is the y-intercept. We are given that the slope is \(3\) and the line passes through the point \((2, 5)\). Plugging in the slope and the point, we get \(y = 3x + 5\).</p>"
    },
    {
        "question": "<p> If the equation of a circle is \((x - 3)^2 + (y - 4)^2 = 16\), what are the coordinates of the center and the radius of the circle?</p>",
        "options": ["<p>a) Center: (3, 4), Radius: 4</p>", "<p>b) Center: (4, 3), Radius: 4</p>", "<p>c) Center: (3, 4), Radius: \(\sqrt{16}\)</p>", "<p>d) Center: (4, 3), Radius: \(\sqrt{16}\)</p>"],
        "answer": "a",
        "explanation": "<p>The general equation of a circle is \((x - h)^2 + (y - k)^2 = r^2\), where \((h, k)\) is the center and \(r\) is the radius. In this case, the center is \((3, 4)\) and the radius is \(4\).</p>"
    },
    {
        "question": "<p> Solve the system of linear equations:</p><p>\(2x + 3y = 12\)</p><p>\(x - y = 4\)</p>",
        "options": ["<p>a) \(x = 2, y = 2\)</p>", "<p>b) \(x = 3, y = 1\)</p>", "<p>c) \(x = 4, y = 0\)</p>", "<p>d) \(x = 0, y = 4\)</p>"],
        "answer": "b",
        "explanation": "<p>To solve the system of equations, we can use the substitution method. From the second equation, we have \(x = y + 4\). Substituting this into the first equation, we get:</p><p>\(2(y + 4) + 3y = 12\)</p><p>Solving for \(y\), we get \(y = 1\). Substituting \(y = 1\) back into the second equation, we get \(x = 3\).</p>"
    },
    {
        "question": "<p> The graph of a quadratic function \(f(x) = ax^2 + bx + c\) passes through the points \((0, 1)\) and \((2, 9)\). What is the value of \(b\)?</p><svg width='200' height='200'><line x1='0' y1='200' x2='200' y2='0' style='stroke:black;stroke-width:2'/><circle cx='0' cy='200' r='5' style='fill:red'/><circle cx='40' cy='180' r='5' style='fill:red'/></svg>",
        "options": ["<p>a) \(-1\)</p>", "<p>b) \(0\)</p>", "<p>c) \(1\)</p>", "<p>d) \(2\)</p>"],
        "answer": "c",
        "explanation": "<p>We can use the given points to set up a system of equations to solve for the coefficients \(a\), \(b\), and \(c\). Plugging in the points \((0, 1)\) and \((2, 9)\), we get:</p><p>\(f(0) = a(0)^2 + b(0) + c = c = 1\)</p><p>\(f(2) = a(2)^2 + b(2) + c = 4a + 2b + 1 = 9\)</p><p>Solving for \(b\), we get \(b = 1\).</p>"
    },
    {
        "question": "<p> The graph of a function \(f(x) = ax^2 + bx + c\) has a vertex at \((3, 4)\) and passes through the point \((0, 1)\). What is the value of \(b\)?</p><svg width='200' height='200'><line x1='0' y1='0' x2='200' y2='200' style='stroke:black;stroke-width:2'/><circle cx='60' cy='80' r='5' style='fill:red'/><circle cx='0' cy='200' r='5' style='fill:red'/></svg>",
        "options": ["<p>a) \(-6\)</p>", "<p>b) \(-3\)</p>", "<p>c) \(3\)</p>", "<p>d) \(6\)</p>"],
        "answer": "b",
        "explanation": "<p>The general form of a quadratic function is \(f(x) = a(x - h)^2 + k\), where \((h, k)\) is the vertex. We are given that the vertex is \((3, 4)\), so \(h = 3\) and \(k = 4\).</p><p>Substituting the point \((0, 1)\) into the equation, we get \(1 = a(0 - 3)^2 + 4\), which simplifies to \(1 = 9a + 4\). Solving for \(a\), we get \(a = -\frac{1}{3}\).</p><p>The coefficient \(b\) can be found using the formula \(b = -2ah\), which gives \(b = -2 \cdot (-\frac{1}{3}) \cdot 3 = 2\).</p>"
    }]