// Part 1: Callbacks - 10
// Create a JavaScript function that takes an argument and a callback function.
// for example: function can be getUserData and argument can be userId  or getDogBreedInfromation and argument can be dogBreed
// Inside the function, simulate fetching user data asynchronously (you can use a setTimeout to simulate a delay).
// If the data  is found, call the callback with the user's data (an object with name, email, etc.- for userData function).
// If the user is not found, call the callback with an error message.
// Create a callback function that handles the user data or error and prints the result.

// Sample user data
const userData = {
  111: {
    name: 'Habeeb',
    email: 'hk123@gmail.com',
    age: '25',
  },
  121: {
    name: 'Steve',
    email: 'st123@gmail.com',
    age: '29',
  },
};

/**
 * Fetches user data based on the provided userId.
 * @param {number} userId - The ID of the user.
 * @param {Function} callback - The callback to handle the result.
 */
function getUserData(userId, callback) {
  // Check if callback is a function
  if (typeof callback !== 'function') {
    console.error('Callback must be a function');
    return;
  }

  // Simulate asynchronous operation with setTimeout
  setTimeout(() => {
    if (userId in userData) {
      const { name, email, age } = userData[userId];
      callback(null, { name, email, age });
    } else {
      callback(new Error('User not found'), null);
    }
  }, 1000); // 1-second delay
}

// Callback function to handle user data or error
getUserData(121, (err, payload) => {
  if (err) {
    console.error(err.message);
  } else if (payload) {
    const { name, email, age } = payload;
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
  }
});

// Part 2: Promises - 20
// Refactor the function function to use Promises instead of callbacks.
// Create a Promise that resolves with the user data when found and rejects with an error message when not found.
// Use the .then() and .catch() methods to handle the resolved data or errors.

/**
 * Fetches user data based on the provided userId using Promises.
 * @param {number} userId - The ID of the user.
 * @returns {Promise} - Resolves with user data if found, rejects with an error otherwise.
 */
function getUserData(userId) {
  return new Promise((resolve, reject) => {
    // Simulate asynchronous operation with setTimeout
    setTimeout(() => {
      if (userId in userData) {
        const { name, email, age } = userData[userId];
        resolve({ name, email, age });
      } else {
        reject(new Error('User not found'));
      }
    }, 1000); // 1-second delay
  });
}

// Using .then() and .catch() to handle the Promise
getUserData(121)
  .then(({ name, email, age }) => {
    console.log('Using Promise');
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
  })
  .catch((err) => {
    console.error(err.message);
  });

// Part 3: Error Handling - 20
// Modify your Promise-based  function to intentionally throw an error (e.g., if the user ID is negative).
// Implement error handling in the .catch() block to gracefully handle this error and print a custom error message.

/**
 * Fetches user data based on the provided userId using Promises.
 * Intentionally throws an error for negative userId.
 * @param {number} userId - The ID of the user.
 * @returns {Promise} - Resolves with user data if found, rejects with an error otherwise.
 */
function getUserData(userId) {
  return new Promise((resolve, reject) => {
    // Simulate asynchronous operation with setTimeout
    setTimeout(() => {
      if (userId < 0) {
        reject(new Error('User ID cannot be negative'));
      } else if (userId in userData) {
        const { name, email, age } = userData[userId];
        resolve({ name, email, age });
      } else {
        reject(new Error('User not found'));
      }
    }, 1000); // 1-second delay
  });
}

// Using .then() and .catch() to handle the Promise
getUserData(-1) // Intentionally using a negative userId to trigger the error
  .then(({ name, email, age }) => {
    console.log('Using Promise');
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
  })
  .catch((err) => {
    // Graceful error handling with a custom message
    console.error(`An error occurred: ${err.message}`);
  });

// Async/Await  - (do this for extra 50 points)
// Rewrite the Promise-based functions using async/await syntax.
// Demonstrate how to use try/catch blocks for error handling with async/await.

/**
 * Fetches user data based on the provided userId using async/await.
 * Intentionally throws an error for negative userId.
 * @param {number} userId - The ID of the user.
 * @returns {Promise} - Resolves with user data if found, rejects with an error otherwise.
 */
async function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId < 0) {
        reject(new Error('User ID cannot be negative'));
      } else if (userId in userData) {
        const { name, email, age } = userData[userId];
        resolve({ name, email, age });
      } else {
        reject(new Error('User not found'));
      }
    }, 1000); // 1-second delay
  });
}

(async () => {
  try {
    const userId = 131;
    const { name, email, age } = await getUserData(userId);
    console.log('Using async/await');
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
  } catch (err) {
    console.error(`An error occurred: ${err.message}`);
  }
})();
