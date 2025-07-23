const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// GET login page
app.get("/login", (req, res) => {
    res.render("login"); // pass error as null on first load
});

// POST login logic
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Dummy login check (replace with DB logic later)
    const correctUsername = "ashish";
    const correctPassword = "ashish123";

    if (username === correctUsername && password === correctPassword) {
        // res.render("home.ejs", { username }); // pass username to home.ejs
        res.redirect("/home");
    } else {
        res.render("login.ejs");
    }
});

app.get("/home", (req, res) => {
    res.render("home.ejs"); 
});


// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/login`);
});
