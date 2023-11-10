const express = require("express");
const fs = require("fs");
const path = require("path");

// index function 
function index(req, res) {
    res.format({
        text: () => {
            res.type("text").send("Benvenuto nel mio blog!");
        },
        html: () => {
            const htmlPage = fs.readFileSync(path.resolve(__dirname, "../index.html"))
            res.type("html").send(htmlPage)
        },
        json: () => {
            res.type("json").send({
                message: "Benvenuto nel mio blog!",
            });
        },
        default: () => {
            res.status(406).send("Not Acceptable");
        }
    })
}

// about function
function about(req, res) {
    const headerContent = fs.readFileSync(path.resolve(__dirname, "../header.html"), 'utf8');
    res.send(`${headerContent}<h1>About page</h1>`);
}

// contact function

function contacts(req, res) {
    const headerContent = fs.readFileSync(path.resolve(__dirname, "../header.html"), 'utf8');

    res.send(`${headerContent}<h1>Contacts page</h1>`);
}

module.exports = {
    index,
    about,
    contacts
}