const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
app.get('/users', (req, res) => {
  res.send({
    recipeName: 'Chocolate Chip Cookies',
    author: 'Jane Doe',
    prepTime: '15 minutes',
    cookTime: '10 minutes',
    servings: 24,
    ingredients: [
      {
        name: 'all-purpose flour',
        quantity: 2.25,
        unit: 'cups',
      },
      {
        name: 'baking soda',
        quantity: 1,
        unit: 'teaspoon',
      },
      {
        name: 'salt',
        quantity: 1,
        unit: 'teaspoon',
      },
      {
        name: 'unsalted butter',
        quantity: 1,
        unit: 'cup',
      },
      {
        name: 'granulated sugar',
        quantity: 0.75,
        unit: 'cup',
      },
      {
        name: 'brown sugar',
        quantity: 0.75,
        unit: 'cup',
      },
      {
        name: 'vanilla extract',
        quantity: 1,
        unit: 'teaspoon',
      },
      {
        name: 'large eggs',
        quantity: 2,
        unit: '',
      },
      {
        name: 'semisweet chocolate chips',
        quantity: 2,
        unit: 'cups',
      },
    ],
    instructions: [
      {
        step: 1,
        description:
          'Preheat oven to 375°F (190°C). Line a baking sheet with parchment paper.',
      },
      {
        step: 2,
        description:
          'In a medium bowl, whisk together the flour, baking soda, and salt. Set aside.',
      },
      {
        step: 3,
        description:
          'In a large bowl, beat the butter, granulated sugar, brown sugar, and vanilla extract together until creamy. Add the eggs, one at a time, beating well after each addition.',
      },
      {
        step: 4,
        description:
          'Gradually mix in the flour mixture until just combined. Stir in the chocolate chips.',
      },
      {
        step: 5,
        description:
          'Drop rounded tablespoons of dough onto the prepared baking sheet.',
      },
      {
        step: 6,
        description:
          'Bake for 8-10 minutes, or until lightly golden brown. Cool on the baking sheet for 5 minutes before transferring to a wire rack to cool completely.',
      },
    ],
  });
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
