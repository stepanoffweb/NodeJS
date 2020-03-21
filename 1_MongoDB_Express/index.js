const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const todoRoutes = require('./routes/todos');
const path = require('path');


const PORT = process.env.PORT || 3000;
const app = express();
const hbs = exphbs.create({
  defaultLaypout: 'main',
  extname: 'hbs'
});// у объекта hbs есть параметр engine

app.engine('hbs', hbs.engine);// пошла жара - регистрация движка д/рендеринга страниц по произвольному ключу 'hbs'
app.set('view engine', 'hbs');// установим движок по умолчанию handlebars по ключу hbs
app.set('views', 'views');// папка по умолчанию со всеми views сайта - одноименная
app.use(express.urlencoded({ extended: true }));//для хз...("считывать 'body' клиентского запроса ")
app.use(express.static(path.join(__dirname, 'public')));

app.use(todoRoutes);

// app.listen(PORT, () => {
//   console.log('Server has been started...');
// });
// Cannot GET / - express doesn't take GETs

async function start() {
  try {
    await mongoose.connect('mongodb+srv://hugomailru:2A6UtkuHeq^Tca3@cluster0-q2h5r.mongodb.net/todos', {
      useNewUrlParser: true,
      useFindAndModify: false
    });
    app.listen(PORT, () => {
      console.log('Server has been started...');
    });

  } catch(e) {
    console.log(e);
  }
}
start();
