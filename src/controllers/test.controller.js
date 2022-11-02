
const article = new Blog({
    titulo: "Inseringo titulo",
    subtitulo: "inserindo subtitulo"
});

await article.save();

const findItem = Blog.where({ titulo: "Inseringo titulo" });
findItem.findOne(function (err, iten) {
    if (err) { console.log(err) };
    if (iten) { console.log(iten) };
});