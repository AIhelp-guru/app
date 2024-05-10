var quizData = [
    {
        "question": "<p>1. What is the value of sin(30°)?</p>",
        "options": ["<p>a) 1/2</p>", "<p>b) 1/3</p>", "<p>c) 2/3</p>", "<p>d) 3/4</p>"],
        "answer": "a",
        "explanation": "<p>The value of sin(30°) is 1/2, since sin(30°) = opposite side / hypotenuse, and in a 30-60-90 triangle, the opposite side is half the length of the hypotenuse.</p>",
        "hint": "Use the definition of sine: sin(θ) = opposite side / hypotenuse.",
        "similar_question": {
            "question": "<p>What is the value of cos(60°)?</p>",
            "solution": "<p>The value of cos(60°) is 1/2, since cos(θ) = adjacent side / hypotenuse, and in a 30-60-90 triangle, the adjacent side is half the length of the hypotenuse.</p>"
        }
    },
    {
        "question": "<p>2. What is the value of tan(45°)?</p>",
        "options": ["<p>a) 1/2</p>", "<p>b) 1</p>", "<p>c) 2</p>", "<p>d) 3</p>"],
        "answer": "b",
        "explanation": "<p>The value of tan(45°) is 1, since tan(θ) = opposite side / adjacent side, and in a 45-45-90 triangle, the opposite side and adjacent side are equal.</p>",
        "hint": "Use the definition of tangent: tan(θ) = opposite side / adjacent side.",
        "similar_question": {
            "question": "<p>What is the value of cot(45°)?</p>",
            "solution": "<p>The value of cot(45°) is 1, since cot(θ) = adjacent side / opposite side, and in a 45-45-90 triangle, the adjacent side and opposite side are equal.</p>"
        }
    },
    {
        "question": "<p>3. If sin(θ) = 3/5, what is the value of cos(θ)?</p>",
        "options": ["<p>a) 2/5</p>", "<p>b) 3/5</p>", "<p>c) 4/5</p>", "<p>d) 5/5</p>"],
        "answer": "c",
        "explanation": "<p>Since sin(θ) = 3/5, we can use the Pythagorean identity sin^2(θ) + cos^2(θ) = 1 to find the value of cos(θ). Substituting sin(θ) = 3/5, we get cos(θ) = √(1 - 9/25) = 4/5.</p>",
        "hint": "Use the Pythagorean identity: sin^2(θ) + cos^2(θ) = 1.",
        "similar_question": {
            "question": "<p>If cos(θ) = 2/3, what is the value of tan(θ)?</p>",
            "solution": "<p>Since cos(θ) = 2/3, we can use the definition of tangent: tan(θ) = sin(θ) / cos(θ). Substituting sin(θ) = √(1 - 4/9) = √5/3, we get tan(θ) = √5/3 / 2/3 = √5/2.</p>"
        }
    },
    {
        "question": "<p>4. If a right triangle has an angle of 30°, and the length of the hypotenuse is 10, what is the length of the opposite side?</p>",
        "options": ["<p>a) 3</p>", "<p>b) 4</p>", "<p>c) 5</p>", "<p>d) 6</p>"],
        "answer": "c",
        "explanation": "<p>Since the angle is 30°, and the length of the hypotenuse is 10, we can use the definition of sine: sin(30°) = opposite side / hypotenuse. Substituting sin(30°) = 1/2, we get opposite side = 1/2 × 10 = 5.</p>",
        "hint": "Use the definition of sine: sin(θ) = opposite side / hypotenuse.",
        "similar_question": {
            "question": "<p>If a right triangle has an angle of 60°, and the length of the hypotenuse is 12, what is the length of the adjacent side?</p>",
            "solution": "<p>Since the angle is 60°, and the length of the hypotenuse is 12, we can use the definition of cosine: cos(60°) = adjacent side / hypotenuse. Substituting cos(60°) = 1/2, we get adjacent side = 1/2 × 12 = 6.</p>"
        }
    },
    {
        "question": "<p>5. If a right triangle has an angle of 45°, and the length of the adjacent side is 3, what is the length of the hypotenuse?</p>",
        "options": ["<p>a) 3√2</p>", "<p>b) 3√3</p>", "<p>c) 4</p>", "<p>d) 5</p>"],
        "answer": "a",
        "explanation": "<p>Since the angle is 45°, and the length of the adjacent side is 3, we can use the definition of cosine: cos(45°) = adjacent side / hypotenuse. Substituting cos(45°) = 1/√2, we get hypotenuse = 3√2.</p>",
        "hint": "Use the definition of cosine: cos(θ) = adjacent side / hypotenuse.",
        "similar_question": {
            "question": "<p>If a right triangle has an angle of 60°, and the length of the opposite side is 4, what is the length of the hypotenuse?</p>",
            "solution": "<p>Since the angle is 60°, and the length of the opposite side is 4, we can use the definition of sine: sin(60°) = opposite side / hypotenuse. Substituting sin(60°) = √3/2, we get hypotenuse = 4 × 2 / √3 = 8/√3.</p>"
        }
    },
    {
        "question": "<p>6. If sin(θ) = 2/3, what is the value of cot(θ)?</p>",
        "options": ["<p>a) 1/2</p>", "<p>b) 1/3</p>", "<p>c) √5/2</p>", "<p>d) √5/3</p>"],
        "answer": "d",
        "explanation": "<p>Since sin(θ) = 2/3, we can use the Pythagorean identity sin^2(θ) + cos^2(θ) = 1 to find the value of cos(θ). Substituting sin(θ) = 2/3, we get cos(θ) = √(1 - 4/9) = √5/3. Then, cot(θ) = cos(θ) / sin(θ) = √5/3 / 2/3 = √5/2.</p>",
        "hint": "Use the Pythagorean identity: sin^2(θ) + cos^2(θ) = 1.",
        "similar_question": {
            "question": "<p>If cos(θ) = 3/5, what is the value of tan(θ)?</p>",
            "solution": "<p>Since cos(θ) = 3/5, we can use the Pythagorean identity sin^2(θ) + cos^2(θ) = 1 to find the value of sin(θ). Substituting cos(θ) = 3/5, we get sin(θ) = √(1 - 9/25) = 4/5. Then, tan(θ) = sin(θ) / cos(θ) = 4/5 / 3/5 = 4/3.</p>"
        }
    },
    {
        "question": "<p>7. If a right triangle has an angle of 30°, and the length of the hypotenuse is 8, what is the length of the adjacent side?</p>",
        "options": ["<p>a) 4</p>", "<p>b) 4√3</p>", "<p>c) 6</p>", "<p>d) 8</p>"],
        "answer": "a",
        "explanation": "<p>Since the angle is 30°, and the length of the hypotenuse is 8, we can use the definition of cosine: cos(30°) = adjacent side / hypotenuse. Substituting cos(30°) = √3/2, we get adjacent side = 8 × √3/2 = 4.</p>",
        "hint": "Use the definition of cosine: cos(θ) = adjacent side / hypotenuse.",
        "similar_question": {
            "question": "<p>If a right triangle has an angle of 45°, and the length of the hypotenuse is 10, what is the length of the opposite side?</p>",
            "solution": "<p>Since the angle is 45°, and the length of the hypotenuse is 10, we can use the definition of sine: sin(45°) = opposite side / hypotenuse. Substituting sin(45°) = 1/√2, we get opposite side = 10 × 1/√2 = 5√2.</p>"
        }
    },
    {
        "question": "<p>8. If tan(θ) = 3/4, what is the value of sin(θ)?</p>",
        "options": ["<p>a) 1/2</p>", "<p>b) 1/3</p>", "<p>c) 3/5</p>", "<p>d) 4/5</p>"],
        "answer": "c",
        "explanation": "<p>Since tan(θ) = 3/4, we can use the definition of tangent: tan(θ) = sin(θ) / cos(θ). Substituting tan(θ) = 3/4, we get sin(θ) / cos(θ) = 3/4. Then, we can use the Pythagorean identity sin^2(θ) + cos^2(θ) = 1 to find the value of sin(θ). Solving, we get sin(θ) = 3/5.</p>",
        "hint": "Use the definition of tangent: tan(θ) = sin(θ) / cos(θ).",
        "similar_question": {
            "question": "<p>If cot(θ) = 2/3, what is the value of cos(θ)?</p>",
            "solution": "<p>Since cot(θ) = 2/3, we can use the definition of cotangent: cot(θ) = cos(θ) / sin(θ). Substituting cot(θ) = 2/3, we get cos(θ) / sin(θ) = 2/3. Then, we can use the Pythagorean identity sin^2(θ) + cos^2(θ) = 1 to find the value of cos(θ). Solving, we get cos(θ) = 2/√5.</p>"
        }
    }
];