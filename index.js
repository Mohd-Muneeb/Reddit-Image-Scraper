const cheerio = require("cheerio");
const express = require("express");
const axios = require("axios");
const fs = require("fs");
const app = express();
const PORT = 8000;

async function main() {
    const url = "https://www.reddit.com/r/Animewallpaper/new/";

    console.log("you are ready");

    const images = [];

    axios(url)
        .then((response) => {
            const html = response.data;
            const $ = cheerio.load(html);

            $(".ImageBox-image", html).each(function () {
                const image = $(this).attr("src");
                images.push({
                    image,
                });
            });
            console.log(images);

            var file = fs.createWriteStream("imgsrc.txt");
            for (let i = 0; i <= images.length; i++) {
                fs.writeFile(
                    "imgsrc.txt",
                    images[0].image + "\n",
                    { "flags ": "a+" },
                    (err) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                    }
                );
            }
            console.log("end of script 1");
        })
        .catch((err) => console.error(err));

    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

    return;
}

main();