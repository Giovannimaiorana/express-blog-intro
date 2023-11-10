const express = require("express");
const fs = require("fs");
const path = require("path");


function index(req, res) {
    res.format({
        text: () => {
            res.type("text").send("Benvenuto nel mio blog!");
        },
        html: () => {
            res.type("html").send("<h1>Benvenuto nel mio blog!</h1>")
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

module.exports = {
    index,
}