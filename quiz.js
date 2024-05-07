  var quizData1 = [
    {
    "question": "What is the vertex of the parabola represented by the equation y = x^2 - 4x + 3?",
    "options": ["a) (-2, -1)", "b) (2, -1)", "c) (-2, 7)", "d) (2, 7)"],
    "answer": "b",
    "explanation": "The vertex of a parabola in the form y = ax^2 + bx + c is at x = -b/2a. In this case, a = 1 and b = -4, so x = -(-4)/(2*1) = 2. Plugging x = 2 into the equation, we get y = 2^2 - 4*2 + 3 = -1. Therefore, the vertex is (2, -1)."
  },
  {
    "question": "What is the equation of the axis of symmetry of the parabola represented by the equation y = -2x^2 + 8x - 5?",
    "options": ["a) x = 2", "b) x = -2", "c) y = 2", "d) y = -2"],
    "answer": "a",
    "explanation": "The axis of symmetry of a parabola in the form y = ax^2 + bx + c is at x = -b/2a. In this case, a = -2 and b = 8, so x = -8/(2*(-2)) = 2. Therefore, the equation of the axis of symmetry is x = 2."
  },
  {
    "question": "What is the range of the function f(x) = x^3 - 3x^2 + 2?",
    "options": ["a) All real numbers", "b) y ≥ 2", "c) y ≤ 2", "d) y > -1"],
    "answer": "a",
    "explanation": "The range of a cubic function is all real numbers. This can be proven using calculus, but for the SAT, you can simply consider that the function can take on any value as x approaches positive or negative infinity."
  },
  {
    "question": "What is the domain of the function g(x) = sqrt(x - 4)?",
    "options": ["a) All real numbers", "b) x ≥ 4", "c) x ≤ 4", "d) x > 4"],
    "answer": "b",
    "explanation": "The square root function is undefined for negative values. Therefore, the domain of g(x) is x ≥ 4."
  },
  {
    "question": "What is the inverse of the function h(x) = 2x + 1?",
    "options": ["a) f(x) = (x - 1)/2", "b) f(x) = (x + 1)/2", "c) f(x) = (x - 2)/1", "d) f(x) = (x + 2)/1"],
    "answer": "a",
    "explanation": "To find the inverse, switch x and y and solve for y. In this case, x = 2y + 1. Solving for y, we get y = (x - 1)/2. Therefore, the inverse of h(x) is f(x) = (x - 1)/2."
  },
  {
    "question": "What is the period of the function j(x) = sin(3x)?",
    "options": ["a) 2π", "b) π", "c) 3π", "d) 6π"],
    "answer": "c",
    "explanation": "The period of a sine function is 2π divided by the coefficient of x. In this case, the coefficient of x is 3, so the period is 2π/3 = 3π."
  },
  {
    "question": "What is the amplitude of the function k(x) = 2cos(x/2)?",
    "options": ["a) 1/2", "b) 2", "c) 1", "d) 4"],
    "answer": "b",
    "explanation": "The amplitude of a cosine function is the absolute value of the coefficient of the cosine term. In this case, the coefficient is 2, so the amplitude is 2."
  },
  {
    "question": "What is the equation of the asymptotes of the function l(x) = (x^2 - 1)/(x - 2)?",
    "options": ["a) x = 1 and y = 2", "b) x = -1 and y = -2", "c) x = 2 and y = 1", "d) x = -2 and y = -1"],
    "answer": "c",
    "explanation": "The vertical asymptote of a rational function occurs where the denominator is equal to zero. In this case, the denominator is zero when x = 2. The horizontal asymptote occurs when the degree of the numerator is less than or equal to the degree of the denominator. In this case, both the numerator and denominator have a degree of 2, so the horizontal asymptote is y = 1 (the ratio of the leading coefficients). Therefore, the equations of the asymptotes are x = 2 and y = 1."
  },
  {
    "question": "What is the end behavior of the function m(x) = -x^4 + 2x^2 - 1?",
    "options": ["a) As x approaches positive or negative infinity, m(x) approaches positive infinity.", "b) As x approaches positive or negative infinity, m(x) approaches negative infinity.", "c) As x approaches positive or negative infinity, m(x) approaches zero.", "d) As x approaches positive or negative infinity, m(x) approaches 1."],
    "answer": "b",
    "explanation": "The end behavior of a polynomial function is determined by the leading term. In this case, the leading term is -x^4, which is negative. As x approaches positive or negative infinity, the value of -x^4 becomes increasingly negative. Therefore, the end behavior is that m(x) approaches negative infinity."
  },
  {
    "question": "What is the equation of the tangent line to the graph of the function n(x) = e^x at x = 1?",
    "options": ["a) y = e", "b) y = e(x - 1)", "c) y = e + e(x - 1)", "d) y = e + x"],
    "answer": "c",
    "explanation": "The equation of the tangent line to the graph of a function f(x) at x = a is y = f(a) + f'(a)(x - a). In this case, f(x) = e^x, f'(x) = e^x, and a = 1. Therefore, f(1) = e, f'(1) = e, and the equation of the tangent line is y = e + e(x - 1)."
  }
]

var quizData = [
  {
      "question": "A certain book has 300 pages. If Mario reads 12 pages each day, how many days will it take him to read the entire book?",
      "options": ["a) 25", "b) 24", "c) 26", "d) 30"],
      "answer": "c",
      "explanation": "To find the number of days, divide the total pages by the pages read per day: 300 / 12 = 25 with a remainder. Therefore, it will take 26 days."
  },
  {
      "question": "The sum of two numbers is 23, and one number is three times the other. What is the larger number?",
      "options": ["a) 17.25", "b) 18", "c) 21", "d) 12"],
      "answer": "a",
      "explanation": "Let the numbers be x and 3x. Their sum is 23, so x + 3x = 23. Therefore, 4x = 23, so x = 5.75. The larger number is 3x = 17.25."
  },
  {
      "question": "A rectangle has a length that is three times its width. If the perimeter of the rectangle is 32 cm, what is the width?",
      "options": ["a) 4", "b) 6", "c) 8", "d) 10"],
      "answer": "a",
      "explanation": "Let the width be w. Then the length is 3w. The perimeter of a rectangle is given by 2w + 2l. Therefore, 2w + 2(3w) = 32, or 8w = 32, so w = 4."
  },
  {
      "question": "Jack has twice as many nickels as dimes. If the total value of his nickels and dimes is $2.10, how many nickels does he have?",
      "options": ["a) 6", "b) 7", "c) 12", "d) 14"],
      "answer": "c",
      "explanation": "Let the number of dimes be d and the number of nickels be 2d. Then the value of the dimes is 0.10d and the value of the nickels is 0.05 * 2d. Therefore, 0.10d + 0.10d = 2.10, or 0.20d = 2.10, so d = 10.5."
  },
  {
      "question": "The sum of three consecutive integers is 48. What is the smallest of these integers?",
      "options": ["a) 15", "b) 16", "c) 17", "d) 18"],
      "answer": "b",
      "explanation": "Let the integers be x, x+1, and x+2. Their sum is 48, so x + (x + 1) + (x + 2) = 48. Therefore, 3x + 3 = 48, so 3x = 45, so x = 15."
  },
  {
      "question": "If the product of two numbers is 72 and their sum is 18, what is the larger of the two numbers?",
      "options": ["a) 9", "b) 8", "c) 12", "d) 6"],
      "answer": "c",
      "explanation": "Let the numbers be x and y. Then x*y = 72 and x+y = 18. Solving the quadratic equation, we find x = 12 and y = 6."
  },
  {
      "question": "A train travels 60 miles per hour for 3 hours and then 80 miles per hour for 2 hours. What is the average speed of the train for the entire trip?",
      "options": ["a) 65", "b) 70", "c) 72", "d) 75"],
      "answer": "c",
      "explanation": "The average speed is the total distance divided by the total time. The train travels 60*3 = 180 miles and 80*2 = 160 miles, for a total of 340 miles in 5 hours. Therefore, the average speed is 340/5 = 68 miles per hour."
  },
  {
      "question": "The sum of the squares of two consecutive positive even integers is 340. What is the smaller integer?",
      "options": ["a) 10", "b) 12", "c) 14", "d) 16"],
      "answer": "b",
      "explanation": "Let the integers be x and x+2. Then x^2 + (x+2)^2 = 340. This expands to 2x^2 + 4x - 336 = 0, which can be factored into (x-12)(x+14) = 0."
  },
  {
      "question": "A landscaper charges $30 for each lawn mowing job, plus a $15 service fee. If a customer has $300 to spend on lawn mowing, what is the maximum number of jobs the customer can afford?",
      "options": ["a) 8", "b) 9", "c) 10", "d) 11"],
      "answer": "a",
      "explanation": "The cost of one job is $30 + $15 = $45. Therefore, the customer can afford $300/45 = 6.66, or 6 jobs."
  },
  {
      "question": "If x = -2 and y = 3, what is the value of x^2 - 2xy + y^2?",
      "options": ["a) 1", "b) 13", "c) 25", "d) 49"],
      "answer": "c",
      "explanation": "The expression simplifies to (-2)^2 - 2*(-2)*3 + 3^2 = 4 + 12 + 9 = 25."
  },
  {
      "question": "A jar contains blue and green marbles in a ratio of 5:3. If there are 40 blue marbles, how many green marbles are there?",
      "options": ["a) 8", "b) 10", "c) 20", "d) 24"],
      "answer": "b",
      "explanation": "The ratio of blue to green marbles is 5:3, so if there are 40 blue marbles, the number of green marbles is (40 / 5) * 3 = 8."
  },
  {
      "question": "The length of a rectangle is three times its width. If the area of the rectangle is 75 square units, what is the length of the rectangle?",
      "options": ["a) 10", "b) 12", "c) 15", "d) 20"],
      "answer": "c",
      "explanation": "Let the width be w. Then the length is 3w. The area of the rectangle is w*3w = 75, or 3w^2 = 75, so w = 5."
  },
  {
      "question": "A car travels from Town A to Town B at 60 miles per hour and returns at 40 miles per hour. What is the average speed of the car for the round trip?",
      "options": ["a) 48", "b) 50", "c) 52", "d) 55"],
      "answer": "a",
      "explanation": "Let the distance between Town A and Town B be d miles. The average speed for the round trip is 2d/(d/60 + d/40) = 48 miles per hour."
  },
  {
      "question": "In a bag of 25 candies, there are 5 red candies and 20 blue candies. If one candy is selected at random, what is the probability that it is blue?",
      "options": ["a) 1/5", "b) 4/5", "c) 1/4", "d) 3/4"],
      "answer": "b",
      "explanation": "The probability of selecting a blue candy is 20/25 = 4/5."
  },
  {
      "question": "The sum of five consecutive integers is 100. What is the smallest integer?",
      "options": ["a) 16", "b) 17", "c) 18", "d) 19"],
      "answer": "c",
      "explanation": "Let the integers be x, x+1, x+2, x+3, and x+4. Their sum is 100, so 5x + 10 = 100, so x = 18."
  },
  {
      "question": "A rectangle has a width of 5 and a length that is twice the width. What is the area of the rectangle?",
      "options": ["a) 25", "b) 50", "c) 75", "d) 100"],
      "answer": "b",
      "explanation": "The area of a rectangle is given by l*w. In this case, l = 2*w = 2*5 = 10, so l*w = 10*5 = 50."
  },
  {
      "question": "Solve for x in the equation 5x - 3 = 2x + 12.",
      "options": ["a) 3", "b) 4", "c) 5", "d) 6"],
      "answer": "c",
      "explanation": "5x - 3 = 2x + 12, or 3x = 15, so x = 5."
  }
];
