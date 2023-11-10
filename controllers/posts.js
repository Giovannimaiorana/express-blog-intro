
const posts = require("../db/listaPost.json");


function index(req, res) {
    res.format({
        html: () => {
            const html = [`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
            <h1>Lista Post</h1>`];
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