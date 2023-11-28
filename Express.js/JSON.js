const express = require('express');
const mysql = require('mysql');
const app = express();
const db = mysql.createConnection({
  host: 'your_mysql_host',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

// Define a route to retrieve a list of posts
app.get('/posts', (req, res) => {
  // Perform a SELECT query to get posts from the database
  const query = 'SELECT * FROM Post';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Send the retrieved posts as JSON
      res.json(results);
    }
  });
});
const port = 3000;
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
});
