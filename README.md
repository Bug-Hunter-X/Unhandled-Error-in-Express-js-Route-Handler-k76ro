# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers: the lack of proper error handling for invalid or missing parameters.  The `bug.js` file shows the problematic code.  The `bugSolution.js` file provides a corrected version with improved error handling.

## Bug

The original code attempts to find a user based on an ID provided in the route parameters.  However, it lacks error handling for the scenarios:

1. **Invalid User ID:**  If the `userId` is not a valid number (e.g., a string), `parseInt(userId)` will return `NaN`, leading to the `find` method failing to locate the user.
2. **User Not Found:** If no user matches the provided ID, the code doesn't handle the case gracefully. This could lead to an unexpected response or, worse, a server-side crash if subsequent code assumes that `user` is defined.

## Solution

The solution implements more robust error handling:

- It checks if `parseInt(userId)` results in a valid number.
- It explicitly checks if a user is found and returns a 404 status code if not.
- It uses a try-catch block to handle potential errors during the user lookup process (although this may be less critical if the database is well designed and prevents that specific error)