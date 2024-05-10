var quizData = 
[
    {
    "passage": "<svg align=\"center\" id=\"MathJax-Element-1\" viewBox=\"0 0 100.919 136.368\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M 9,133.288 L 9,10.625 L 12.062,10.625 L 12.062,72.766 L 28.375,72.766 L 28.375,133.288 Z M 37.75,133.288 L 37.75,54.489 L 73.188,54.489 L 73.188,133.288 Z M 81.25,133.288 L 81.25,10.625 L 84.312,10.625 L 84.312,133.288 Z\" fill=\"White\" stroke=\"Black\" stroke-width=\"2\"/>\n<text x=\"50\" y=\"91.168\" font-family=\"texgyrepagella\" font-size=\"24\">y</text>\n<text x=\"18.188\" y=\"69.668\" font-family=\"texgyrepagella\" font-size=\"24\">x</text>\n<path d=\"M 34.688,28.312 L 34.688,10.688 L 37.75,10.688 L 37.75,28.312 Z\" fill=\"Black\" stroke=\"Black\" stroke-width=\"2\"/>\n<text x=\"44.938\" y=\"21.75\" font-family=\"texgyrepagella\" font-size=\"24\">2</text>\n<text x=\"25.938\" y=\"17.75\" font-family=\"texgyrepagella\" font-size=\"24\">1</text>\n<text x=\"73.281\" y=\"17.75\" font-family=\"texgyrepagella\" font-size=\"24\">3</text>\n</svg>",
    "question": "",
    "options": ["a) x + y = 5", "b) x + y = 8", "c) x + 2y = 10", "d) x - y = 5"],
    "answer": "a",
    "explanation": "The coordinates of the points are (1,4), (3,2), and (5,1). The difference between the y-coordinate of the first two points is 2, which is the same as the difference between the y-coordinate of the second and third points. This shows that the line connecting the three points has a slope of -1. The x-coordinate of the first point is 1, and the y-coordinate is 4. Using the point-slope form of a linear equation, we can write the equation of the line as y - 4 = -1(x - 1). Simplifying this equation, we get y = -x + 5. Therefore, the equation of the line is x + y = 5.",
    "hint": "Determine the slope of the line by finding the change in y over the change in x between two points on the line. Use the point-slope form of a linear equation to write the equation of the line using the slope and one of the points on the line.",
    "similar_question": {
     "question": "Find the equation of the line passing through the points (2,5) and (4,9).",
     "solution": "The slope of the line is 4/2 = 2. Using the point-slope form of a linear equation, we can write the equation of the line as y - 5 = 2(x - 2). Simplifying this equation, we get y = 2x + 1."
    }
   },
   {
       "passage": "Find a quadratic inequality that has a solution set of {x | x < 2 or x > 5}.",
       "question": "",
       "options": [
           "a) x^2 + x - 12 > 0",
           "b) x^2 - x - 12 < 0",
           "c) x^2 + x - 12 < 0",
           "d) x^2 - x - 12 > 0"
       ],
       "answer": "a",
       "explanation": "To find a quadratic inequality with the given solution set, we can factor the expression x^2 + x - 12 into (x + 4)(x - 3).  Then, we can write the inequality as (x + 4)(x - 3) > 0.  This inequality is true when either x + 4 > 0 and x - 3 > 0, or x + 4 < 0 and x - 3 < 0.  Simplifying these inequalities, we get x > -4 and x < 3, or x < -4 and x > 3.  The first set of inequalities corresponds to the solution set {x | x < 2 or x > 5}, so the correct answer is (x + 4)(x - 3) > 0, which is equivalent to x^2 + x - 12 > 0.",
       "hint": "Factor the expression x^2 + x - 12 and write the inequality as a product of two factors.  Then, find the values of x for which each factor is greater than 0 or less than 0.",
       "similar_question": {
           "question": "Find a quadratic inequality that has a solution set of {x | x ≤ -3 or x ≥ 2}.",
           "solution": "The correct answer is (x + 3)(x - 2) ≥ 0, which is equivalent to x^2 + x - 6 ≥ 0."
       }
   },
   {
           "passage": null,
           "question": "If x = 2, what is the value of x^2 + 3x + 2?",
           "options": ["a) 14", "b) 13", "c) 12", "d) 11"],
           "answer": "a",
           "explanation": "x^2 + 3x + 2 = (2)^2 + 3(2) + 2 = 4 + 6 + 2 = 12",
           "hint": "Substitute x = 2 into the expression and simplify.",
           "similar_question": {
               "question": "If x = 3, what is the value of x^2 + 2x - 1?",
               "solution": "10"
           }
       },
   {
        "passage": null,
        "question": "What is the x-intercept of the parabola y = x^2 + 2x - 3?",
        "options": ["a) -1", "b) -3", "c) 1", "d) 3"],
         "answer": "a",
         "explanation": "To find the x-intercepts of a parabola, set y = 0 and solve for x:0 = x^2 + 2x - 3. Factoring:0 = (x + 3)(x - 1) <br>Setting each factor equal to 0: x + 3 = 0 and x - 1 = 0<br>Solving for x in each equation:x = -3 and x = 1<br>Therefore, the x-intercepts are (-3, 0) and (1, 0).<br>The answer is (a) -1.",
   "hint": "To find the x-intercepts of a parabola, set y = 0 and solve for x.",
   "similar_question": {
   "question": "What is the x-intercept of the parabola y = x^2 - 4x + 3?",
   "solution": "x = 1 and x = 3"
   }
   },
   {
       "passage": "Given polynomial $$P(x) = 3x^3 + 2x^2 + 5x - 7$$",
       "question": "What is the remainder when P(x) is divided by (x-2)?",
       "options": ["a) 43 ", "b) -43 ", "c) 3", "d) -3"],
       "answer": "a",
       "explanation": "**Remainder Theorem** states that when a polynomial f(x) is divided by (x - a), the remainder is f(a).          Therefore, to find the remainder of P(x) when divided by (x-2), we simply need to evaluate P(x) at x = 2:          $$P(2) = 3(2)^3 + 2(2)^2 + 5(2) - 7$$       $$= 3(8) + 2(4) + 5(2) - 7$$       $$= 24 + 8 + 10 - 7$$       $$= 43$$",       "hint": "Use the Remainder Theorem.",
       "similar_question": {
           "question": "What is the remainder when the polynomial f(x) = x^4 - 3x^3 + 2x^2 - 5x + 1 is divided by (x - 1)?",
           "solution": "Using the Remainder Theorem, we have:                  f(1) = 1^4 - 3(1)^3 + 2(1)^2 - 5(1) + 1           = 1 - 3 + 2 - 5 + 1           = -2                  Therefore, the remainder is -2."
       }
   },
   {
       "passage": "<svg height=\"400\" width=\"400\">\
   <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"green\" stroke-width=\"4\" fill=\"yellow\" />\
   <line x1=\"50\" y1=\"50\" x2=\"150\" y2=\"150\" stroke=\"red\" stroke-width=\"2\" />\
   </svg>",
       "question": "What is the slope of the line?",
       "options": ["a) 1", "b) 2", "c) 3", "d) 4"],
       "answer": "b",
       "explanation": "The slope of a line is calculated by dividing the change in y by the change in x. In this case, the change in y is 150 - 50 = 100, and the change in x is 150 - 50 = 100. Therefore, the slope of the line is 100/100 = 1.",
       "hint": "The slope of a line is a measure of its steepness. A line with a positive slope is increasing, while a line with a negative slope is decreasing. The steeper the line, the greater the slope.",
       "similar_question": {
           "question": "What is the slope of the line that passes through the points (1, 2) and (3, 8)?",
           "solution": "The slope of the line is 3."
       }
   },
   {
       "passage": "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"400px\" height=\"400px\">\n  <circle cx=\"200px\" cy=\"200px\" r=\"50px\" fill=\"blue\" stroke=\"black\" stroke-width=\"5px\" />\n  <text x=\"220px\" y=\"180px\" font-size=\"14px\">A</text>\n  <circle cx=\"300px\" cy=\"220px\" r=\"40px\" fill=\"red\" stroke=\"black\" stroke-width=\"5px\" />\n  <text x=\"300px\" y=\"220px\" font-size=\"14px\">B</text>\n</svg>",
       "question": "What is the total area, in square units, of the 2 circles in terms of pi (π)?",
       "options": ["a) 30π", "b) 36π", "c) 46π", "d) 50π"],
       "answer": "b",
       "explanation": "The area of a circle is given by πr², where r is the radius of the circle.\nThe radius of the blue circle is 50 units, so the area of the blue circle is π(50)² = 2500π square units.\nThe radius of the red circle is 40 units, so the area of the red circle is π(40)² = 1600π square units.\nThe total area of the 2 circles is 2500π + 1600π = 4100π square units.  So the answer is b) 36π.",
       "hint": "Remember that the area of a circle is πr².",
       "similar_question": {
           "question": "What is the area of a circle with a radius of 10 cm?",
           "solution": "The area of a circle with a radius of r cm is πr².  So the area of a circle with a radius of 10 cm is π(10)² = 100π cm².  So the answer is 100π cm²."
       }
   },
   {
           "passage": "A rectangular prism has a length of 6 cm, a width of 4 cm, and a height of 3 cm. What is the volume of the rectangular prism?",
           "question": "What is the volume of the rectangular prism?",
           "options": ["a) 72 cubic centimeters", "b) 24 cubic centimeters", "c) 12 cubic centimeters", "d) 36 cubic centimeters"],
           "answer": "a",
           "explanation": "The volume of a rectangular prism is given by the formula V = lwh, where l is the length, w is the width, and h is the height. Substituting the given values into the formula, we get V = 6 cm * 4 cm * 3 cm = 72 cubic centimeters.",
           "hint": "Use the formula V = lwh to find the volume of the rectangular prism.",
           "similar_question": {
               "question": "A cube has a side length of 5 cm. What is the volume of the cube?",
               "solution": "The volume of a cube is given by the formula V = s^3, where s is the side length. Substituting the given value into the formula, we get V = 5 cm^3 = 125 cubic centimeters."
           }
   },
   {
   "passage": "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100\" width=\"450\"><line x1=\"75\" y1=\"25\" x2=\"75\" y2=\"75\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"0\" y1=\"75\" x2=\"150\" y2=\"75\" stroke=\"black\" stroke-width=\"2\"/><line x1=\"150\" y1=\"75\" x2=\"75\" y2=\"25\" stroke=\"black\" stroke-width=\"2\"/></svg>\n\t",
   "question": "What is the area of this triangle?\n\t",
   "options": ["a) 37.5 sq. units", "b) 75 sq. units", "c) 187.5 sq. units", "d) 48.75 sq. units"],
   "answer": "a",
   "explanation": "The area of a triangle is found by multiplying the base by the height and then dividing by 2.\nIn this case, the base is 150 and the height is 50, so the area is 37.5 sq. units.",
   "hint": "",
   "similar_question": {
   "question": "What is the area of a triangle with a base of 10 and a height of 8?",
   "solution": "The area of the triangle is 40 sq. units."
   }
   },
   {
       "passage": "",
       "question": "Quadrant III, compute the cosecant 1.5π ?",
       "options": ["a) -√3", "b) √3", "c) -1", "d) 1"],
       "answer": "a",
       "explanation": "The cosecant of an angle is equal to the reciprocal of the sine of that angle. In this case, the sine of 1.5π is -√3, so the cosecant of 1.5π is -1/√3 = -√3.",
       "hint": "",
       "similar_question": {
           "question": "Quadrant II, compute the cosecant 1π ?",
           "solution": "-1"
       }
   },
   {
           "passage": "Find the radian measure of the angle \u03b8 that satisfies the equation \u03b8 = \u03c0 / 3.",
           "question": "What is the radian measure of the angle \u03b8?",
           "options": ["a) \u03c0 / 3", "b) 3\u03c0", "c) 180\u03c0", "d) \u03c0"],
           "answer": "a",
           "explanation": "The radian measure of an angle is equal to the length of the arc of a circle with radius 1 that is subtended by the angle. Since the arc length is equal to the radius times the central angle, we have \u03b8 = r\u03c8, where r is the radius and \u03c8 is the central angle in radians. In this case, r = 1 and \u03c8 = \u03c0 / 3, so \u03b8 = 1 * (\u03c0 / 3) = \u03c0 / 3. Therefore, the answer is (a) \u03c0 / 3.",
           "hint": "",
           "similar_question": {
               "question": "Find the radian measure of the angle \u03b8 that satisfies the equation \u03b8 = 2\u03c0 / 5.",
               "solution": "The answer is \u03c0 / 2."
           }
       },
   {
           "passage": "<svg width=\"400\" height=\"300\">\n  <rect width=\"100%\" height=\"100%\" fill=\"#000\" />\n  <text x=\"10\" y=\"20\" fill=\"#fff\">Question:</text>\n  <text x=\"10\" y=\"40\" fill=\"#fff\">What is the area of the rectangle?</text>\n  <rect x=\"10\" y=\"60\" width=\"100\" height=\"100\" fill=\"#fff\" />\n  <text x=\"110\" y=\"120\" fill=\"#000\">Answer:</text>\n  <text x=\"110\" y=\"140\" fill=\"#000\">10000</text>\n</svg>",
           "question": "What is the area of the rectangle?",
           "options": ["a) 100", "b) 1000", "c) 10000", "d) 100000"],
           "answer": "c",
           "explanation": "The area of the rectangle is width * height. The width is 100 and the height is 100, so the area is 100 * 100 = 10000.",
           "hint": "Remember that the area of a rectangle is width * height.",
           "similar_question": {
               "question": "What is the area of a rectangle with a width of 5 and a height of 10?",
               "solution": "The area of the rectangle is 50."
           }
       },
   {
           "passage": "The following table shows the number of students in each grade at a particular school:\n\n\n| Grade | Number of Students |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|-\n| 9th | 200 |\n| 10th | 180 |\n| 11th | 160 |\n| 12th | 140 |\n\nWhat is the mean number of students per grade?",
           "question": "What is the mean number of students per grade?",
           "options": ["a) 160", "b) 165", "c) 170", "d) 175"],
           "answer": "b",
           "explanation": "Mean is the sum of all values divided by the number of values in a dataset. In this case, the mean number of students per grade is (200 + 180 + 160 + 140) / 4 = 680 / 4 = 165.",
           "hint": "To find the mean, add up all the values and then divide the sum by the number of values in the dataset.",
           "similar_question": {
               "question": "The following table shows the number of students in each grade at a different school:\n\n\n| Grade | Number of Students |\n|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|-\n| 9th | 150 |\n| 10th | 140 |\n| 11th | 130 |\n| 12th | 120 |\n\nWhat is the mean number of students per grade?",
               "solution": "The mean number of students per grade is (150 + 140 + 130 + 120) / 4 = 540 / 4 = 135."
           }
       },
   {
           "passage": "A box contains 3 red balls, 5 blue balls, and 4 green balls. Suppose you randomly pick two balls from the box without replacement. What is the probability of choosing a red ball and then a green ball?",
           "question": "What is the probability of choosing a red ball and then a green ball?",
           "options": ["a) 12/55", "b) 3/10", "c) 12/110", "d) 4/22"],
           "answer": "a",
           "explanation": "The probability of choosing a red ball is 3/12. After choosing a red ball, there will be 2 red balls, 5 blue balls, and 4 green balls left in the box. The probability of choosing a green ball is 4/11. Therefore, the probability of choosing a red ball and then a green ball is (3/12) * (4/11) = 12/55.",
           "hint": "Use the concept of conditional probability: P(A and B) = P(A) * P(B | A).",
           "similar_question": {
               "question": "A bag contains 5 red balls, 6 blue balls, and 4 green balls. Suppose you randomly pick two balls from the bag without replacement. What is the probability of choosing a green ball and then a blue ball?",
               "solution": "P(green) = 4/15, P(blue | green) = 6/14. P(green and blue) = P(green) * P(blue | green) = (4/15) * (6/14) = 24/210 = 4/35."
           }
       },
   {
       "passage": " <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100' height='100'><path d='M 50  0 L 50 100 L 100  50 z' fill='red'/><path d='M 0  50 L 100  50 L 50   0 z' fill='blue'/></svg>",
       "question": "What is the ratio of the red area to the blue area?",
       "options": ["a) 1:1", "b) 1:2", "c) 2:1", "d) 1:3"],
       "answer": "a",
       "explanation": "The total area of the SVG is 100 * 100 = 10,000 square units.  The red area is 50 * 50 = 2,500 square units, and the blue area is also 2,500 square units.  Therefore, the ratio of the red area to the blue area is 2,500 : 2,500 = 1 : 1.",
       "hint": "First find the total area of the SVG, then find the area of the red and blue rectangles, and finally divide the red area by the blue area to get the ratio.",
       "similar_question": {
           "question": "What is the ratio of the yellow area to the green area in the SVG below?",
           "solution": {
               "area_yellow": "75 * 100 = 7,500 square units",
               "area_green": "25 * 100 = 2,500 square units",
               "ratio": "7,500 : 2,500 = 3 : 1"
           }
       }
   },
   {
           "passage": "",
           "question": "What is the value of y?",
           "options": [
               "a) 8",
               "b) 10",
               "c) 12",
               "d) 14"
           ],
           "answer": "b",
           "explanation": "The ratio of x to y is 2 to 3, which can be written as x/y = 2/3. We can solve for y by cross-multiplying: x * 3 = y * 2. If x = 6, then y = 3 * x / 2 = 3 * 6 / 2 = 10.",
           "hint": "Remember that the ratio of two quantities is equal to the ratio of their corresponding terms.",
           "similar_question": {
               "question": "What is the ratio of 5 to 12?",
               "solution": "5/12"
           }
       },
   {
       "passage": "A store is selling a shirt for \\$20. If the store is offering a 20% discount, how much will be saved on the purchase of the shirt?",
       "question": "A store is selling a shirt for $\\$20. If the store is offering a 20% discount, how much will be saved on the purchase of the shirt?",
       "options": ["a) $4", "b) $16", "c) $20", "d) $10"],
       "answer": "a",
       "explanation": "The discount is 20% of the original price, which is 0.20 * $20 = $4. Therefore, you will save $4 on the purchase of the shirt.",
       "hint": "To find the amount saved, multiply the original price by the discount percentage.",
       "similar_question": {
           "question": "A store is selling a pair of shoes for $\\$50. If the store is offering a 15% discount, how much will be saved on the purchase of the shoes?",
           "solution": "$7.50"
       }
   },
   {
       "passage": "<svg width='354px' height='150px' viewBox='0 0 354 150' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='Canvas' transform='translate(0.000000,150.000000) scale(1,-1)'><g id='Layer_1' transform='translate(0.000000,0.000000)'><g id='y_axis' fill='#000000' stroke='#000000' transform='translate(40.000000,110.000000)'><path d='M98 0L98 100' stroke-width='2' /><path d='M94 0L102 0' stroke-width='2' /><path d='M94 100L102 100' stroke-width='2' /><g id='y_axis_ticks' transform='translate(106.000000, 0.000000)' stroke-width='2' ><path d='M0 96L0 98' /><path d='M0 84L0 86' /><path d='M0 72L0 74' /><path d='M0 60L0 62' /><path d='M0 48L0 50' /><path d='M0 36L0 38' /><path d='M0 24L0 26' /><path d='M0 12L0 14' /><path d='M0 0L0 2' /></g></g><g id='x_axis' transform='translate(40.000000,110.000000)'><line x1='56' y1='0' x2='276' y2='0' stroke='#000000' stroke-width='2' /><g id='x_axis_major_ticks' transform='translate(56.000000, 0.000000)' stroke-width='2' ><path d='M122 0L130 0' /><path d='M148 0L156 0' /><path d='M174 0L182 0' /><path d='M200 0L208 0' /><path d='M226 0L234 0' /><path d='M252 0L260 0' /></g><g id='x_axis_minor_ticks' transform='translate(56.000000, 0.000000)' stroke-width='2' ><path d='M84 0L92 0' /><path d='M110 0L118 0' /><path d='M136 0L144 0' /><path d='M162 0L170 0' /><path d='M188 0L196 0' /><path d='M214 0L222 0' /><path d='M240 0L248 0' /><path d='M266 0L274 0' /></g></g><g id='function' stroke='#0000ff' stroke-width='2' ><path d='M276 100L274 96L272 92L270 88L268 84L266 80L264 76L262 72L260 68L258 64L256 60L254 56L252 52L250 48L248 44L246 40L244 36L242 32L240 28L238 24L236 20L234 16L232 12L230 8L228 4L226 0L224 4L222 8L220 12L218 16L216 20L214 24L212 28L210 32L208 36L206 40L204 44L202 48L200 52L198 56L196 60L194 64L192 68L190 72L188 76L186 80L184 84L182 88L180 92L178 96L176 100' /></g></g></g></svg>",
       "question": "What is the y-intercept of the function?",
       "options": [
           "a) (0, -2)",
           "b) (0, -1)",
           "c) (0, 0)",
           "d) (0, 1)"
       ],
       "answer": "c",
       "explanation": "The y-intercept of a function is the point where the function crosses the y-axis. In this case, the function crosses the y-axis at (0, 0).",
       "hint": "Look at the point where the function intersects the y-axis.",
       "similar_question": {
           "question": "What is the x-intercept of the function?",
           "solution": "The x-intercept of a function is the point where the function crosses the x-axis. In this case, the function crosses the x-axis at (10, 0)."
       }
   },
   {
           "passage": "The Amazon rainforest is the largest rainforest in the world, covering an area of over 5.5 million square kilometers. It is home to an estimated 10% of the world's known species, including many endangered species such as the jaguar, giant otter, and harpy eagle. The Amazon rainforest is also a vital carbon sink, absorbing an estimated 25% of the world's carbon dioxide emissions. \n\nHowever, the Amazon rainforest is facing a number of threats, including deforestation, climate change, and pollution. Deforestation is the clearing of forests for other uses, such as agriculture, logging, and mining. Climate change is causing the Amazon rainforest to become hotter and drier, which is making it more vulnerable to fire. Pollution from nearby industries and cities is also a major threat to the Amazon rainforest.",
           "question": "What is the main point of the passage?",
           "options": ["a) The Amazon rainforest is the largest rainforest in the world and is home to a wide variety of plant and animal life.", "b) The Amazon rainforest is facing a number of threats, including deforestation, climate change, and pollution.", "c) The Amazon rainforest is a vital carbon sink, absorbing an estimated 25% of the world's carbon dioxide emissions.", "d) The Amazon rainforest is home to many endangered species, such as the jaguar, giant otter, and harpy eagle."],
           "answer": "a",
           "explanation": "The passage is about the Amazon rainforest. The first sentence states that the Amazon rainforest is the largest rainforest in the world and is home to a wide variety of plant and animal life. This is the main point of the passage.",
           "hint": "The main point of a passage is the central idea that the author is trying to convey. It is usually stated in the first or last sentence of the passage.",
           "similar_question": {
               "question": "What is the main point of the passage about the Great Barrier Reef?",
               "solution": "The Great Barrier Reef is the largest coral reef system in the world and is home to a wide variety of marine life. However, the Great Barrier Reef is facing a number of threats, including climate change, pollution, and overfishing. The passage is about the Great Barrier Reef and its importance. The main point of the passage is that the Great Barrier Reef is a vital part of the world's ecosystem and is facing a number of threats."
           }
       },
   {
       "passage": "<p>The Great Fire of London was a major conflagration that swept through the central parts of London from September 2 to 5, 1666. The fire gutted the medieval City of London inside the old Roman city wall. It threatened but did not reach the aristocratic Westminster or the wealthy East End.</p><p>The fire started in a baker's shop on Pudding Lane shortly after midnight on Sunday, September 2nd. Strong winds fanned the flames, which quickly spread to neighboring buildings. By daybreak, the fire had reached London Bridge, and by nightfall, it had crossed the bridge and was raging in the City of London.</p><p>The fire destroyed over 13,200 houses, 87 churches, and many other buildings. It left over 100,000 people homeless and caused an estimated £10 million in damage (equivalent to about £1.5 billion in 2021). The fire also destroyed many important historical buildings, including St. Paul's Cathedral.</p><p>The cause of the fire is unknown, but several theories have been proposed. One theory is that it was started by a careless baker who left his oven unattended. Another theory is that it was started by arsonists. A third theory is that it was started by sparks from a nearby fireworks display.</p>",
       "question": "What is the approximate equivalent value of the damage caused by the fire in 2021?",
       "options": ["a) £10 million", "b) £150 million", "c) £1.5 billion", "d) £15 billion"],
       "answer": "c",
       "explanation": "The passage states that the damage caused by the fire was estimated at £10 million, which is equivalent to about £1.5 billion in 2021.",
       "hint": "Look for the sentence that mentions the equivalent value of the damage in 2021.",
       "similar_question": {
           "question": "What was the approximate number of houses destroyed in the fire?",
           "solution": "13,200"
       }
   },
   {
       "passage": "<p>The <a href=\"https://en.wikipedia.org/wiki/Maya_civilization\">Maya</a> civilization flourished in the <a href=\"https://en.wikipedia.org/wiki/Mesoamerica\">Mesoamerican</a> region from the pre-Columbian era to the <a href=\"https://en.wikipedia.org/wiki/Spanish_colonization_of_the_Americas\">Spanish conquest</a> of the 16th century. The Maya are best known for their <a href=\"https://en.wikipedia.org/wiki/Maya_script\">writing system</a>, their <a href=\"https://en.wikipedia.org/wiki/Maya_calendar\">calendar</a>, and their <a href=\"https://en.wikipedia.org/wiki/Maya_architecture\">architecture</a>. The Maya also developed a complex system of <a href=\"https://en.wikipedia.org/wiki/Maya_religion\">religion</a> and a sophisticated system of <a href=\"https://en.wikipedia.org/wiki/Maya_mathematics\">mathematics</a>.</p>\n\n<p>The Maya civilization reached its peak during the <a href=\"https://en.wikipedia.org/wiki/Classic_period_Maya_civilization\">Classic period</a> (250–900 CE). During this time, the Maya built many of their most famous cities, including <a href=\"https://en.wikipedia.org/wiki/Tikal\">Tikal</a> and <a href=\"https://en.wikipedia.org/wiki/Palenque\">Palenque</a>. The Maya also developed their writing system and calendar during this time. However, the Classic period also saw the rise of a number of <a href=\"https://en.wikipedia.org/wiki/Maya_collapse\">political</a> and <a href=\"https://en.wikipedia.org/wiki/Maya_collapse\">environmental</a> problems that led to the eventual collapse of the Maya civilization.</p>",
       "question": "Which of the following is NOT a characteristic of the Maya civilization?",
       "options": ["a) Writing system", "b) Calendar", "c) Religion", "d) Monotheistic"],
       "answer": "d",
       "explanation": "The Maya civilization is known for its writing system, calendar, architecture, religion, and mathematics. Monotheism is not a characteristic of the Maya civilization.",
       "hint": "You can infer from the passage that the Maya civilization developed a complex religion, not a monotheistic religion.",
       "similar_question": {
           "question": "Which of the following is NOT a characteristic of the Ancient Egyptian civilization?",
           "solution": "The Ancient Egyptian civilization is known for its pyramids, hieroglyphics, mummification, and religion. Democracy is not a characteristic of the Ancient Egyptian civilization."
       }
   },
   {
       "passage": "**Passage:**\n\nAs the world becomes increasingly interconnected, it is more important than ever to understand and appreciate other cultures. By embracing cultural diversity, we can build bridges between people and create a more tolerant and inclusive society. Cultural exchange allows us to learn from and share ideas, customs, and traditions, enriching our own lives and broadening our perspectives. It fosters empathy, promotes cross-cultural understanding, and breaks down stereotypes. Moreover, cultural diversity stimulates creativity and innovation, leading to new products, services, and artistic expressions that reflect the richness and diversity of our global community.",
       "question": "Which of the following best describes the author's tone in this passage?",
       "options": [
           "a) Optimistic and celebratory",
           "b) Skeptical and judgmental",
           "c) Alarmed and concerned",
           "d) Indifferent and uninterested"
       ],
       "answer": "a",
       "explanation": "The author's tone is optimistic and celebratory because they emphasize the benefits of cultural diversity, such as building bridges between people, creating a more tolerant and inclusive society, fostering empathy, promoting cross-cultural understanding, breaking down stereotypes, and stimulating creativity and innovation.",
       "hint": "Consider the positive language and examples the author uses to describe the benefits of cultural diversity.",
       "similar_question": {
           "question": "Which of the following best describes the author's tone in the passage below?",
           "solution": "In this passage, the author adopts a tone of frustration and disapproval. They criticize the current state of affairs and express their dissatisfaction with the lack of progress and the persistence of problems."
       }
   },
   {
           "passage": "The purpose of this passage is to explain the importance of sleep for overall health and well-being. The passage discusses the various stages of sleep, the benefits of getting enough sleep, and the consequences of sleep deprivation.",
           "question": "What is the author's purpose in writing this passage?",
           "options": ["a) To inform the reader about the importance of sleep", "b) To persuade the reader to get more sleep", "c) To entertain the reader with stories about sleep", "d) To argue that sleep is not important"],
           "answer": "a",
           "explanation": "The passage is primarily informative, as it provides the reader with information about the importance of sleep and the consequences of sleep deprivation.",
           "hint": "",
           "similar_question": {
               "question": "What is the author's purpose in writing this passage about the history of the United States?",
               "solution": "a) To inform the reader about the history of the United States"
           }
       }]
       /*
   {
    "passage": "Author's conclusion: The new link between exercise and health is an important reminder that we all need to exercise regularly<br>   <br>      Exercise helps to improve our health in many ways. For example, exercise can help to reduce the risk of heart disease, stroke, and type 2 diabetes. It can also help to improve our balance and coordination, and can reduce our risk of falls.<br>   <br>      In addition, exercise can help to improve our mental health. For example, exercise can help to reduce stress and anxiety, and can improve our mood. It can also help to improve our sleep quality.<br>   <br>      Based on this evidence, it is clear that exercise is an important part of a healthy lifestyle. We all need to make sure that we are getting enough exercise each week.",<br>   "question": "Which of the following pieces of evidence supports the author's conclusion that exercise is an important part of a healthy lifestyle?",
    "options": ["a) Exercise can help to reduce the risk of heart disease, stroke, and type 2 diabetes.", "b) Exercise can help to improve our balance and coordination.", "c) Exercise can help to improve our mental health.", "d) All of the above"],
   "answer": "d",
   "explanation": "All of the evidence provided in the passage supports the author's conclusion that exercise is an important part of a healthy lifestyle. Evidence a) shows that exercise can help to reduce the risk of heart disease, stroke, and type 2 diabetes. Evidence b) shows that exercise can help to improve our balance and coordination. Evidence c) shows that exercise can help to improve our mental health. Therefore, the answer is d.",
   "hint": "Consider each piece of evidence provided in the passage and how it relates to the author's conclusion.",
   "similar_question": {
   "question": "Which of the following pieces of evidence supports the author's conclusion that climate change is real?",
   "solution": "Evidence that supports the author's conclusion that climate change is real includes rising global temperatures, melting glaciers, and increasingly extreme weather events."
}
   },
   {
       "passage": "<svg width=\"250\" height=\"250\" xmlns=\"http://www.w3.org/2000/svg\">\n<circle cx=\"125\" cy=\"125\" r=\"125\" fill=\"red\" />\n<text x=\"125\" y=\"125\" font-size=\"50\" text-anchor=\"middle\" dominant-baseline=\"central\">1</text>\n</svg>",
       "question": "What is the color of the circle?",
       "options": ["a) Green", "b) Blue", "c) Red", "d) Yellow"],
       "answer": "c",
       "explanation": "The circle is filled with red color.",
       "hint": "Examine the attributes of the circle element.",
       "similar_question": {
           "question": "What is the radius of the circle?",
           "solution": "The radius of the circle is 125."
       }
   },
   {
     "passage": "The following graph shows the number of students who enrolled in a particular college over a 5-year period.[Insert SVG of line graph] X-axis: Year Y-axis: Number of StudentsThe graph shows that the number of students who enrolled in the college increased from 2017 to 2020, then decreased from 2020 to 2022.",
     "question": "What is the approximate number of students who enrolled in the college in 2021?",
     "options": ["a) 3,000", "b) 3,500", "c) 4,000", "d) 4,500"],
     "answer": "b",
     "explanation": "Draw a horizontal line from the 2021 mark on the x-axis to the graph. Then read the number from the y-axis where the line intersects the graph. The approximate number of students who enrolled in the college in 2021 is 3,500.",
     "hint": "",
     "similar_question": {
       "question": "What is the approximate number of students who enrolled in the college in 2018?",
       "solution": "a)"
     }
   },
   {
       "passage": "Bill Gates helped to raise millions for the relief effort.  Bill Gates designed the software to make this possible.",
       "question": "Which of the following is the best way to rewrite the underlined portion of the sentence?",
       "options": [
           "a)  by designing the software to make it possible", 
           "b)  to design the software that made this possible", 
           "c) designing  the software so that this possible",  
           "d)  designed the software to make this possible"
       ],
       "answer": "a",
       "explanation": "The best way to rewrite the underlined portion of the sentence is to use a prepositional phrase beginning with by. This will make the sentence more concise and clear.",
       "hint": "Look for a preposition that can be used to replace the underlined portion of the sentence.",
       "similar_question": {
           "question": "Which of the following is the best way to rewrite the underlined portion of the sentence? The students were excited about the trip.  They had been planning the trip for months.",
           "solution": "a)  by planning the trip for months"
       }
   },
   {
           "passage": "The scientist describes his findings to the audience.",
           "question": "Which of the following sentences corrects the tense of the underlined verb?",
           "options": [
               "a) The scientist described his findings to the audience.",
               "b) The scientist have described his findings to the audience.",
               "c) The scientist had described his findings to the audience.",
               "d) The scientist will have described his findings to the audience."
           ],
           "answer": "a",
           "explanation": "The sentence is in present tense, and the verb tense of the underlined verb should be in past tense to match the tense of the passage. Therefore, the correct sentence is: The scientist described his findings to the audience.",
           "hint": "Identify the tense of the passage and make sure the verb tense of the underlined verb matches it.",
           "similar_question": {
               "question": "The students take a test every Friday.",
               "solution": "a) The students took a test every Friday."
           }
       },
   {
           "passage": "Although I was happy to see my friend, I couldn't help but notice he had gained some weight since I had last seen him.",
           "question": "Which of the following is the best way to revise the underlined portion of the sentence?",
           "options": ["a) he'd", "b) he had;", "c) he has", "d) he is"],
           "answer": "a",
           "explanation": "The underlined portion of the sentence is a subordinate clause that describes the friend's weight gain. The correct verb tense for a subordinate clause is the past perfect tense, which is formed by using the helping verb \"had\" followed by the past participle of the main verb. In this case, the main verb is \"gain,\" so the correct answer is \"he'd.\"",
           "hint": "Consider the tense of the main clause and the relationship between the two clauses.",
           "similar_question": {
               "question": "Which of the following is the best way to revise the underlined portion of the sentence? Although I was happy to see my friend, I couldn't help but notice he ____ some weight since I had last seen him.",
               "solution": "a) had gained"
           }
       },
   {
       "passage": null,
       "question": "Which of the following choices provides the most logical conclusion for the argument below?\n\nThe cost of gasoline is a major concern for many people. Recent increases in the price of gasoline have made it difficult for people to travel and get to work. To address this concern, the government should increase the taxes on gasoline. The increased taxes would create more revenue that could be used to reduce the cost of gasoline, making it more affordable for people to travel and get to work.",
       "options": ["a) Increased taxes on gasoline would lead to lower prices for gasoline.", "b) The government should not increase taxes on gasoline.", "c) The cost of gasoline is not a major concern for most people.", "d) The government should reduce the taxes on gasoline."],
       "answer": "a",
       "explanation": "The argument states that increasing the taxes on gasoline would create more revenue that could be used to reduce the cost of gasoline. Therefore, the only logical conclusion is that increased taxes on gasoline would lead to lower prices for gasoline.",
       "hint": "Consider the purpose of the argument and how the proposed solution would address the problem.",
       "similar_question": {
           "question": "Which of the following choices provides the most logical conclusion for the argument below?\n\nThe number of people using public transportation has declined in recent years. This has led to increased traffic congestion and pollution. To address this problem, the government should invest in more public transportation options. The increased investment would improve the quality and reliability of public transportation, making it more appealing to people.",
           "solution": "d) Increased investment in public transportation would lead to more people using public transportation."
       }
   },
   {
           "passage": "<p>The ancient Egyptians were known for their impressive architectural achievements, including the construction of massive pyramids and temples. These structures were built using large blocks of stone, which were often carved and decorated with intricate designs.</p>\n<p>One of the most famous examples of Egyptian architecture is the Great Pyramid of Giza, which is the largest of the three pyramids built at the Giza necropolis. The pyramid is composed of over 2 million blocks of limestone, each weighing an average of 2.5 tons. The blocks were quarried from a nearby limestone quarry and then transported to the Giza plateau, where they were assembled using a system of ramps and levers.</p>\n<p>The interior of the Great Pyramid is also impressive, with a series of chambers and passages leading to the burial chamber of the pharaoh Khufu. The burial chamber is lined with red granite and contains a large sarcophagus made of the same material. The walls of the burial chamber are also decorated with hieroglyphics and paintings depicting scenes from the life of Khufu.</p>\n<p>The Great Pyramid of Giza is just one example of the many impressive architectural achievements of the ancient Egyptians. These structures are a testament to the skill and ingenuity of the ancient Egyptian people, and they continue to fascinate and inspire people today.</p>",
           "question": "Which of the following words in the passage is used in a negative sense?",
           "options": ["a) Impressive ", "b) Ancient ", "c) Massive ", "d) intricate"],
           "answer": "a",
           "explanation": "The word \"impressive\" is used in a positive sense to describe the architectural achievements of the ancient Egyptians. The other words are all used in a neutral or positive sense.",
           "hint": "Think about the connotation of each word.",
           "similar_question": {
               "question": "Which of the following words in the passage is used in a positive sense?",
               "solution": "a) Skillful"
           }
       },
   {
           "passage": "<svg viewBox='0 0 100 100' preserveAspectRatio='xMidYMid meet'><path d='M 0 0 l 100 50 l 100 100 l 0 -100 Z' stroke='#000000' fill='#000000'/></svg>",
           "question": "Identify the shape represented by the SVG",
           "options": ["a) trapezium", "b) parallelogram", "c) triangle", "d) quadrilateral"],
           "answer": "b",
           "explanation": "A parallelogram is a quadrilateral with two pairs of parallel sides.",
           "hint": " Look at the diagram carefully and match it with the properties of different shapes.",
           "similar_question": {
               "question": "What shape is represented by the following SVG?",
               "solution": "<svg viewBox='0 0 100 100' preserveAspectRatio='xMidYMid meet'><path d='M 0 0 l 50 50 l 100 0 l 0 -100 Z' stroke='#000000' fill='#000000'/></svg>"
           }
       },
   {
       "passage": "With emissions from all sectors falling, passenger road transportation was the only sector that saw a small increase in emissions, from 38% in 2005 to 39% in 2019.. A number of factors contributed to this increase, including the rising popularity of SUVs, pickup trucks, and other light-duty vehicles, as well as the increasing number of vehicle miles traveled.",
       "question": "Which choice most effectively combines the two sentences below to improve the flow of the paragraph without changing its meaning?The use of larger vehicles, like SUVs and pickup trucks, has increased their popularity. This increase in popularity contributed to the slight rise in emissions from passenger road transportation.",
       "options": ["a) The increasing popularity of larger vehicles like SUVs and pickup trucks has also contributed to the slight rise in emissions.","b) The slight rise in emissions has also been contributed to by the increasing popularity of larger vehicles like SUVs and pickup trucks.","c) The slight rise in emissions also contributed to the increasing popularity of larger vehicles like SUVs and pickup trucks.","d) The increasing popularity of larger vehicles like SUVs and pickup trucks has also contributed to the slight rise in emissions from passenger road transportation."],
       "answer": "a",
       "explanation": "Choice (a) is the most effective because it combines the two sentences into a single, cohesive sentence that flows smoothly with the rest of the paragraph. The revised sentence clearly states that the increasing popularity of SUVs and pickup trucks has contributed to the slight rise in emissions from passenger road transportation.",
       "hint": "Identifying the main idea of the original paragraph and how the two sentences fit into it can help you determine which choice is most effective.",
       "similar_question": {
           "question": "Which choice most effectively combines the two sentences below to improve the flow of the paragraph without changing its meaning?The increasing popularity of online shopping has made it easier for people to buy products from all over the world. This has led to a decrease in the number of people visiting brick-and-mortar stores.",
           "solution": "The increasing popularity of online shopping has made it easier for people to buy products from all over the world, leading to a decrease in the number of people visiting brick-and-mortar stores."
       }
   },
   {
           "passage": null,
           "question": "Which of the following sentences is written correctly?a) I think it's a a very bad movie.b) Either you or I am going to the store.c) The children, along with their teacher, was excited about the field trip.d) The committee, which was made up of several members, has reached a decision.",
           "options": ["a) ", "b) ", "c) ", "d)"],
           "answer": "d",
           "explanation": "The correct answer is **d) The committee, which was made up of several members, has reached a decision.**",
           "hint": "",
           "similar_question": {
               "question": "Which of the following sentences is written correctly?
   a) I think it's a very good movie.
   b) Either you or I is going to the store.
   c) The children, along with their teacher, were excited about the field trip.
   d) The committee, which was made up of several members, has reached a consensus.",
               "solution": "d"
           }
       },
   {
           "passage": "<p><b>Passage Title:</b> The Importance of Education</p><p>Education is crucial for the progress of a society. It empowers individuals with the knowledge, skills, and values necessary to make informed decisions and navigate the complexities of life. By providing access to quality education, we can unlock human potential and create a more just and equitable world. Furthermore, education fosters innovation, drives economic growth, and promotes social mobility. In today's rapidly changing world, it is more important than ever to invest in education to ensure that our future generations have the tools they need to thrive.</p><p>Education plays a vital role in shaping the minds and characters of young people. Through educational experiences, students learn critical thinking skills, problem-solving abilities, and effective communication. They develop a sense of curiosity, creativity, and resilience. A well-rounded education exposes students to a diverse range of subjects, including the humanities, sciences, arts, and social sciences. This broad exposure helps them understand the interconnectedness of knowledge and the complex nature of the world around them.</p>",
           "question": "If the writer were to add a paragraph to the passage, which of the following would be the most logical transition to use at the beginning of the new paragraph?<br>",
           "options": ["a) In addition, education promotes global understanding and cooperation."],
           "answer": "a",
           "explanation": "The transition \"In addition\" is a logical way to connect the new paragraph to the previous one, as it suggests that the new paragraph will provide an additional point supporting the writer's main argument about the importance of education.",
           "hint": "Consider the topic sentence of the passage and the main ideas presented in the previous paragraph. The new paragraph should add to or support the main argument and flow smoothly from the previous ideas.",
           "similar_question": {
               "question": "Which of the following would be the most effective way to combine the following two sentences? - Education is essential for personal growth. - It allows individuals to reach their full potential.<br>",
               "solution": "Education is essential for personal growth, as it allows individuals to reach their full potential."
           }
       },
   {
           "passage": "The following appeared in a company newsletter:\n\n\"Last summer, our company's fundraising drive was an inspiring success, raising $500,000 to fund our community garden project. A team of 25 volunteers worked tirelessly to organize the drive, and over 1,000 members of our community participated. It is clear that our company is committed to giving back to the community, and we are proud of the positive impact that this project will have on the community garden project. The community garden will provide fresh produce to our low-income neighbors, and it will also serve as a gathering place for our community.\" \n\nWhich of the following is the main idea of the passage?",
           "question": "Which of the following is the main idea of the passage?",
           "options": ["a) The fundraising drive was a major success, and the community garden project will have a positive impact on the community.", "b) Our company is committed to giving back to the community.", "c) The 25 volunteers worked tirelessly to organize the fundraising drive.", "d) Fresh produce will be provided to our low income neighbors"],
           "answer": "a",
           "explanation": "The main idea of the passage is to highlight the success of the fundraising drive and its positive impact on the community garden project.",
           "hint": "The passage emphasizes the success of the fundraising drive and the positive impact of the community garden project on the community.",
           "similar_question": {
               "question": "The following appeared in a university newspaper article:\n\n\"Last year, our university's research team made a groundbreaking discovery in cancer research. The team of scientists worked tirelessly to develop a new treatment that has the potential to save millions of lives. It is clear that our university is committed to cutting-edge research, and we are proud of the positive impact that this discovery will have on the fight against cancer.\"  \n\nWhich of the following is the main idea of the passage?",
               "solution": "a) The university's research team made a groundbreaking discovery in cancer research, and the new treatment has the potential to save millions of lives."
           }
       },
   {
       "passage": "<p>The use of social media has become increasingly prevalent in recent years, with people of all ages using platforms such as Facebook, Instagram, and Twitter to connect with others, share information, and stay up-to-date on current events.</p>\n\n<p>However, there is a growing concern that social media may have a negative impact on our mental health. Studies have shown that people who spend a lot of time on social media are more likely to experience symptoms of depression, anxiety, and loneliness than those who use it less frequently.</p>\n\n<p>There are a number of factors that may contribute to the negative effects of social media on mental health. One factor is the constant comparison that people make between themselves and others. Social media platforms are full of images of people who seem to be living perfect lives, which can lead to feelings of inadequacy and low self-esteem.</p>\n\n<p>Another factor is the fear of missing out (FOMO) that many people experience when they see their friends and acquaintances posting about their exciting lives on social media.</p>\n\n<p>Social media can also be a source of cyberbullying and harassment, which can have a devastating impact on mental health.</p>\n\n<p>While social media can have some positive effects on mental health, such as providing a sense of community and support, the negative effects are more likely to outweigh the positive ones.</p>\n\n<p>There are a number of things that can be done to reduce the negative effects of social media on mental health. One important step is to limit the amount of time spent on social media platforms. Another helpful strategy is to focus on using social media for positive purposes, such as connecting with friends and family, sharing information, and learning new things.</p>",
       "question": "<h3>In the passage, the author takes a position on the effect of social media on mental health. Write an essay that agrees or disagrees with the author's position. The essay should contain an introduction, two points in support of the position, and a conclusion.</h3>",
       "options": [],
       "answer": null,
       "explanation": "The author's position on the effect of social media on mental health is that it is negative. The author cites several studies that have shown that people who spend a lot of time on social media are more likely to experience symptoms of depression, anxiety, and loneliness than those who use it less frequently. The author also discusses several factors that may contribute to the negative effects of social media on mental health, including the constant comparison that people make between themselves and others, the fear of missing out, and cyberbullying.\n\nIn order to write an essay that agrees or disagrees with the author's position, you will need to take a position on the issue. You can agree with the author and provide your own evidence to support the claim that social media has a negative effect on mental health. Alternatively, you can disagree with the author and argue that social media has a positive effect on mental health. You will need to provide evidence to support your position.\n\nOnce you have taken a position, you will need to develop two points that support your position. For example, if you agree with the author, you could argue that the constant comparison that people make between themselves and others on social media can lead to feelings of inadequacy and low self-esteem. You could also argue that the fear of missing out can lead to anxiety and depression.\n\nFinally, you will need to write a conclusion that restates your position and summarizes the main points of your essay.",
       "hint": null,
       "similar_question": {
           "question": "What is the main idea of the passage?",
           "solution": "The main idea of the passage is that social media can have a negative impact on mental health."
       }
   },
   {
    "passage": "Smoking has become a major public health concern, and many arguments have been made for and against stricter smoking regulations. One argument against stricter regulations is that they infringe on personal freedoms and choice. However, this argument is flawed because the government has a responsibility to protect its citizens from harm, even if that means restricting individual liberties.",
    "question": "In the paragraph, the author discusses opposing arguments regarding stricter smoking regulations. Which choice below most accurately reflects the main idea of the paragraph?",
    "options": ["a) Personal freedoms should never be restricted, even if it means harming others.",
   "b) Smoking regulations are necessary to protect public health.",
   "c) The government should not interfere in personal decisions, such as smoking.",
   "d) The debate over smoking regulations is complex and there are valid arguments on both sides."
   ],
    "answer": "b",
    "explanation": "The paragraph argues that stricter smoking regulations are necessary to protect public health, even if they infringe on personal freedoms and choice. This is because the government has a responsibility to protect its citizens from harm.",
    "hint": "Consider the author's main point and how the arguments presented relate to that point.",
    "similar_question": {
     "question": "Which of the following is the best summary of the passage?",
     "solution": "The passage argues that stricter smoking regulations are necessary to protect public health, even if they infringe on personal freedoms and choice."
    }
   },
   {
           "passage": "",
           "question": "Which of the following is the most effective way to introduce an essay about the importance of voting?",
           "options": [
               "a) Voting is a fundamental right that all citizens should exercise."
             , "b) In a democracy, voting is essential for ensuring that the government represents the will of the people."
             , "c) The future of our country depends on the active participation of all citizens in the electoral process."
             , "d) Voting is a privilege that should not be taken for granted."
           ],
           "answer": "a",
           "explanation": "The most effective way to introduce an essay about the importance of voting is to make a strong and clear statement about the significance of voting. Option (a) does this by stating that voting is a "fundamental right" that all citizens should exercise. This statement immediately grabs the reader's attention and sets the stage for the rest of the essay.",
           "hint": "",
           "similar_question": {
               "question": "",
               "solution": ""
           }
       },
   {
           "passage": "<p>The use of plastic bags has a detrimental impact on the environment. Firstly, plastic bags take a long time to decompose. It can take up to 500 years for a single plastic bag to break down completely. This means that plastic bags can accumulate in the environment, creating a serious waste problem. Secondly, plastic bags are a major source of pollution. They can easily be blown away by the wind, and they often end up in our oceans and waterways. Plastic bags can harm marine life, and they can also contaminate our drinking water. Thirdly, plastic bags are a waste of resources. They are made from non-renewable fossil fuels, and the process of manufacturing them releases harmful chemicals into the environment.</p>",
           "question": "Which of the following is the main idea of the passage?",
           "options": ["a) Plastic bags take a long time to decompose and are a major source of pollution.", "b) Plastic bags are a waste of resources.", "c) Plastic bags can harm marine life.", "d) Plastic bags should be banned."],
           "answer": "a",
           "explanation": "The main idea of the passage is that plastic bags have a detrimental impact on the environment. The passage provides three specific examples of how plastic bags are harmful: they take a long time to decompose, they are a major source of pollution, and they are a waste of resources.",
           "hint": "The main idea of a passage is usually stated in the first or second sentence.",
           "similar_question": {
               "question": "Which of the following is the main idea of the passage?",
               "solution": "The main idea of the passage is that renewable energy sources are becoming increasingly important."
           }
       },
   {
       "passage": "The pristine wilderness of the Amazon rainforest, home to an astonishing diversity of life, is facing unprecedented threats. Rampant deforestation, driven by insatiable consumer demand for timber and agricultural products, is encroaching upon this vital ecosystem.\nHowever, it is crucial to recognize that the preservation of the Amazon rainforest extends far beyond its intrinsic ecological value. Its vast carbon sinks play a pivotal role in regulating global climate patterns, while its indigenous communities hold a wealth of traditional knowledge that has the potential to enrich our understanding of sustainable living.\nTo effectively address these threats, a multifaceted approach is required. Governments must implement stringent environmental regulations, enforce sustainable land-use practices, and invest in alternative livelihoods for local communities. International cooperation is also essential to combat transnational crime syndicates involved in illegal logging and wildlife trafficking.\nFurthermore, as consumers, we must make conscious choices about the products we purchase, favoring those that are sustainably sourced and produced with minimal environmental impact. By reducing our collective demand for deforestation-driven goods, we can create a significant shift towards a more sustainable future for the Amazon rainforest and the countless lives it sustains.",
       "question": "Which of the following would be the most effective concluding sentence for this essay?",
       "options": [
           "a) The Amazon rainforest is a precious gift that must be protected for generations to come.",
           "b) Only through concerted efforts can we ensure the preservation of this irreplaceable natural treasure.",
           "c) The fate of the Amazon rainforest lies in our hands; it is up to us to make the right choices.",
           "d) The preservation of the Amazon rainforest is an investment in our collective future."
       ],
       "answer": "b",
       "explanation": "Option b is the most effective concluding sentence because it summarizes the main point of the essay and calls for collective action to preserve the Amazon rainforest. It reinforces the idea that the preservation of the rainforest requires a collaborative effort from governments, international organizations, and consumers.",
       "hint": "Consider which sentence best encapsulates the overall message of the essay and effectively ties together the points made throughout.",
       "similar_question": {
           "question": "Which of the following would be the most effective concluding sentence for an essay arguing for increased government funding for renewable energy research?",
           "solution": "c) Only through sustained investment can we accelerate the development and deployment of these clean and sustainable energy sources."
       }
   },
   {
           "passage": "This is the legend of King Arthur. King Arthur was a great and noble king who ruled England in the 6th century. He was brave and just, and he always fought for what was right. One day, King Arthur was hunting in the forest when he came across a magical sword in a stone. The sword was called Excalibur, and it was said to be the best sword in the world. King Arthur pulled the sword from the stone, and he became the rightful king of England.",
           "question": "Which of the following sentences contains a grammatical error?",
           "options": ["a) King Arthur was a great and noble king who ruled England in the 6th century.", "b) He was brave and just, and he always fought for what was right.", "c) King Arthur pulled the sword from the stone, and he became the rightful king of England.", "d) One day, King Arthur was hunting in the forest when he came across a magical sword in a stone."],
           "answer": "b",
           "explanation": "The sentence "He was brave and just, and he always fought for what was right." contains a grammatical error. The correct sentence should be "He was brave, just, and he always fought for what was right."",
           "hint": "Look for sentences that contain comma splices or fragments.",
           "similar_question": {
               "question": "Which of the following sentences contains a grammatical error?",
               "solution": "The sentence "I went to the store, and I bought some milk." contains a comma splice. The correct sentence should be "I went to the store, and I bought some milk."."
           }
   },
   {
       "passage": "The mandatory minimum sentence for drug offenses is a harsh and ineffective policy that should be abolished. This policy has led to the mass incarceration of nonviolent drug offenders, disproportionately affecting Black and Latino communities. The war on drugs has failed to reduce drug use or drug-related crime, and it has wasted billions of taxpayer dollars.",
   
     "Question":"Which of the following would strengthen the argument in the passage?",
   
     "Options":"['a) Citing statistics that show the high recidivism rate among drug offenders.','b) Describing the personal stories of individuals who have been harmed by the mandatory minimum sentence.','c) Arguing that the mandatory minimum sentence is a violation of the Eighth Amendment's prohibition on cruel and unusual punishment.','d) Proposing an alternative approach to drug policy that focuses on treatment and prevention.']",
     "Answer":"b",
   
     "Explanation","The passage argues that the mandatory minimum sentence is a harsh and ineffective policy. Providing personal stories of individuals who have been harmed by this policy would support this argument by providing concrete evidence of the negative consequences of the policy.",
   
      "Hint":"Consider which option provides the most specific and compelling support for the argument in the passage.",
      "Similar Question":{
   
      "Question"," Which of the following would strengthen the argument that climate change is a serious threat to the planet?",
      "Solution"," Citing scientific research that shows the rising sea levels and increasing frequency of extreme weather events."
      }
   },
   {
           "passage": "<p>Despite popular belief, immigrants do not cause higher crime rates.</p><p>In fact, a study by the National Academy of Sciences found that immigrants are less likely to commit crimes than native-born Americans.</p><p>The study also found that immigrants are less likely to be arrested or incarcerated than native-born Americans.</p><p>In fact, immigrants are more likely to report crimes than native-born Americans.</p>",
           "question": "Which of the following would be the most effective way to combine the third and fourth sentences in the passage?",
           "options": ["a) The study also found that immigrants are less likely to be arrested or incarcerated, and they are more likely to report crimes than native-born Americans.", "b) Although immigrants are less likely to be arrested or incarcerated, they are more likely to report crimes than native-born Americans.", "c) Not only are immigrants less likely to be arrested or incarcerated, but they are also more likely to report crimes than native-born Americans.", "d) Immigrants are less likely to be arrested or incarcerated and are also more likely to report crimes than native-born Americans."],
           "answer": "c",
           "explanation": "Choice c is the most effective way to combine the third and fourth sentences in the passage because it uses a coordinating conjunction (but) to connect the two sentences and a semicolon to separate the two independent clauses.",
           "hint": "Look for a way to connect the two sentences that is grammatically correct and that makes sense in the context of the passage.",
           "similar_question": {
               "question": "Which of the following would be the most effective way to combine the first and second sentences in the passage?",
               "solution": "a) Despite popular belief that immigrants cause higher crime rates, a study by the National Academy of Sciences found that immigrants are less likely to commit crimes than native-born Americans."
           }
       }
    ]*/