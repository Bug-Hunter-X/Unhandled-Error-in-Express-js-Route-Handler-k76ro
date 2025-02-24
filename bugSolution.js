const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Improved error handling
  let parsedUserId;
  if (isNaN(parsedUserId = parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  const user = users.find(user => user.id === parsedUserId);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});
// ... rest of the code