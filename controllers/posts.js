const fs = require('fs');
const path = require('path');
const posts = require("../db/listaPost.json");


function index(req, res) {
    res.format({
        html: () => {
            const headerContent = fs.readFileSync('header.html', 'utf8');
            const html = [`${headerContent} <h3> I miei Post </h3>`];
            html.push("<ul>")
            for (const post of posts) {
                html.push(`<li>
                <h3>${post.titolo}</h3>
                <img src="/img/${post.immagine}" alt="${post.titolo}" style="width: 250px">
                <p>${post.contenuto}</p>
                <p>Tags: ${post.tags}</p>
                </li>`)
            }
            html.push("</ul>");
            res.send(html.join(""));

        },
        json: () => {
            res.type("json").send({
                allElements: posts.length,
                postList: posts
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