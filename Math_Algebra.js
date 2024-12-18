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
,
  {
      "question": "Solve for <em>x</em> in the equation \(3x + 7 = 2x + 13\):",
      "options": ["a) \(1\)", "b) \(2\)", "c) \(3\)", "d) \(4\)"],
      "answer": "b",
      "explanation": "To solve the equation \(3x + 7 = 2x + 13\), first subtract \(2x\) from both sides:\(x + 7 = 13\). Next, subtract 7 from both sides:\(x = 6\)."
  },
  {
      "question": "What is the value of \(4^2 - 3 \times 2\)?",
      "options": ["a) \(7\)", "b) \(9\)", "c) \(11\)", "d) \(13\)"],
      "answer": "c",
      "explanation": "\(4^2 = 16\) and \(3 \times 2 = 6\). Therefore, \(4^2 - 3 \times 2 = 16 - 6 = 10\)."
  },
  {
      "question": "What is the value of \(z\) when \(z = 3y + 2\) and \(y = 4\)?",
      "options": ["a) \(12\)", "b) \(14\)", "c) \(16\)", "d) \(18\)"],
      "answer": "b",
      "explanation": "Substituting \(y = 4\) into the equation \(z = 3y + 2\), we get \(z = 3 \times 4 + 2 = 12 + 2 = 14\)."
  },
  {
      "question": "A square has a side length of 6 cm. What is the perimeter of the square?<svg width='100' height='100'><rect x='20' y='20' width='60' height='60' style='fill:lightblue;stroke:black;stroke-width:2'/></svg>",
      "options": ["a) \(12\)", "b) \(18\)", "c) \(24\)", "d) \(36\)"],
      "answer": "c",
      "explanation": "The perimeter of a square is given by \(4 \times side\). Since the side length is 6 cm, the perimeter is \(4 \times 6 = 24\) cm."
  },
  {
      "question": "The product of two numbers is 24 and their sum is 9. What are the two numbers?",
      "options": ["a) \(3\) and \(6\)", "b) \(4\) and \(5\)", "c) \(6\) and \(3\)", "d) \(7\) and \(2\)"],
      "answer": "b",
      "explanation": "Let the numbers be \(x\) and \(y\). Then, \(x \cdot y = 24\) and \(x + y = 9\). The numbers \(4\) and \(5\) satisfy these conditions."
  },
  {
      "question": "If a rectangle has a length of \(10\) cm and a width of \(4\) cm, what is its area?<svg width='100' height='40'><rect x='0' y='0' width='100' height='40' style='fill:lightblue;stroke:black;stroke-width:2'/></svg>",
      "options": ["a) \(20\)", "b) \(30\)", "c) \(40\)", "d) \(50\)"],
      "answer": "c",
      "explanation": "The area of a rectangle is given by \(length \times width\). Therefore, the area is \(10 \times 4 = 40\) square centimeters."
  },
  {
      "question": "Solve for \(x\) in the equation \(2x + 6 = 4x - 8\):",
      "options": ["a) \(-2\)", "b) \(0\)", "c) \(2\)", "d) \(4\)"],
      "answer": "a",
      "explanation": "To solve the equation \(2x + 6 = 4x - 8\), first subtract \(2x\) from both sides:\(6 = 2x - 8\). Next, add 8 to both sides:\(14 = 2x\). Finally, divide both sides by 2:\(x = -2\)."
  },
  {
      "question": "What is the value of \(4y - 3\) when \(y = 2\)?",
      "options": ["a) \(-1\)", "b) \(1\)", "c) \(5\)", "d) \(7\)"],
      "answer": "c",
      "explanation": "Substituting \(y = 2\) into the expression \(4y - 3\), we get \(4 \cdot 2 - 3 = 8 - 3 = 5\)."
  },
  {
      "question": "The following triangle has sides of length \(6\), \(8\), and \(10\). Is it a right triangle?<svg width='120' height='120'><polygon points='10,110 50,10 110,110' style='fill:lightblue;stroke:black;stroke-width:2'/></svg>",
      "options": ["a) Yes", "b) No", "c) Cannot be determined", "d) Not enough information"],
      "answer": "a",
      "explanation": "By the Pythagorean theorem, a triangle is a right triangle if \(a^2 + b^2 = c^2\). Here, \(6^2 + 8^2 = 10^2\), so it is a right triangle."
  },
  {
      "question": "10. If \(y\) is a positive integer, what is the value of \(3y\) when \(y = 4\)?",
      "options": ["a) \(4\)", "b) \(8\)", "c) \(12\)", "d) \(16\)"],
      "answer": "c",
      "explanation": "The value of \(3y\) when \(y = 4\) is \(3 \cdot 4 = 12\)."
  }
,
  {
      "question": "Solve for <em>x</em> in the equation \(5x - 3 = 2x + 12\):",
      "options": ["a) \(3\)", "b) \(4\)", "c) \(5\)", "d) \(6\)"],
      "answer": "c",
      "explanation": "To solve the equation \(5x - 3 = 2x + 12\), first subtract \(2x\) from both sides:\(3x - 3 = 12\). Next, add 3 to both sides:\(3x = 15\). Finally, divide both sides by 3:\(x = 5\)."
  },
  {
      "question": "What is the value of \(7^2 - 4 \times 5\)?",
      "options": ["a) \(29\)", "b) \(33\)", "c) \(39\)", "d) \(49\)"],
      "answer": "b",
      "explanation": "\(7^2 = 49\) and \(4 \times 5 = 20\). Therefore, \(7^2 - 4 \times 5 = 49 - 20 = 29\)."
  },
  {
      "question": "What is the value of \(y\) when \(y = 2x + 1\) and \(x = 3\)?",
      "options": ["a) \(5\)", "b) \(6\)", "c) \(7\)", "d) \(8\)"],
      "answer": "c",
      "explanation": "Substituting \(x = 3\) into the equation \(y = 2x + 1\), we get \(y = 2 \times 3 + 1 = 6 + 1 = 7\)."
  },
  {
      "question": "A rectangle has a length that is twice its width. If the perimeter of the rectangle is 30 cm, what is the width?<svg width='100' height='50'><rect x='20' y='10' width='60' height='30' style='fill:lightblue;stroke:black;stroke-width:2'/></svg>",
      "options": ["a) \(5\)", "b) \(6\)", "c) \(8\)", "d) \(10\)"],
      "answer": "a",
      "explanation": "Let the width be \(w\). Then the length is \(2w\). The perimeter of the rectangle is \(2w + 2 \cdot 2w = 30\), so \(6w = 30\), and \(w = 5\)."
  },
  {
      "question": "The product of two numbers is 36 and their sum is 15. What are the two numbers?",
      "options": ["a) \(9\) and \(6\)", "b) \(12\) and \(3\)", "c) \(10\) and \(5\)", "d) \(8\) and \(7\)"],
      "answer": "a",
      "explanation": "Let the numbers be \(x\) and \(y\). Then, \(x \cdot y = 36\) and \(x + y = 15\). The numbers \(9\) and \(6\) satisfy these conditions."
  },
  {
      "question": "If a rectangle has a length of \(8\) cm and a width of \(3\) cm, what is its area?<svg width='80' height='30'><rect x='0' y='0' width='80' height='30' style='fill:lightblue;stroke:black;stroke-width:2'/></svg>",
      "options": ["a) \(24\)", "b) \(18\)", "c) \(30\)", "d) \(48\)"],
      "answer": "a",
      "explanation": "The area of a rectangle is given by \(length \times width\). Therefore, the area is \(8 \times 3 = 24\) square centimeters."
  },
  {
      "question": "Solve for \(x\) in the equation \(x - 5 = 2x + 10\):",
      "options": ["a) \(-5\)", "b) \(5\)", "c) \(-10\)", "d) \(10\)"],
      "answer": "a",
      "explanation": "To solve the equation \(x - 5 = 2x + 10\), first subtract \(x\) from both sides:\(-5 = x + 10\). Next, subtract 10 from both sides:\(-15 = x\)."
  },
  {
      "question": "What is the value of \(3x + 5\) when \(x = -2\)?",
      "options": ["a) \(-1\)", "b) \(1\)", "c) \(5\)", "d) \(-11\)"],
      "answer": "a",
      "explanation": "Substituting \(x = -2\) into the expression \(3x + 5\), we get \(3 \cdot (-2) + 5 = -6 + 5 = -1\)."
  },
  {
      "question": "The following triangle has sides of length \(3\), \(4\), and \(5\). Is it a right triangle?<svg width='100' height='100'><polygon points='10,90 10,10 50,90' style='fill:lightblue;stroke:black;stroke-width:2'/></svg>",
      "options": ["a) Yes", "b) No", "c) Cannot be determined", "d) Not enough information"],
      "answer": "a",
      "explanation": "By the Pythagorean theorem, a triangle is a right triangle if \(a^2 + b^2 = c^2\). Here, \(3^2 + 4^2 = 5^2\), so it is a right triangle."
  },
  {
      "question": "10. If \(x\) is a positive integer, what is the value of \(2x\) when \(x = 3\)?",
      "options": ["a) \(3\)", "b) \(4\)", "c) \(6\)", "d) \(9\)"],
      "answer": "c",
      "explanation": "The value of \(2x\) when \(x = 3\) is \(2 \cdot 3 = 6\)."
  }
];
