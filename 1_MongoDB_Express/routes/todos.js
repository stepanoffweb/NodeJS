const {Router} = require('express');
const Todo = require('../models/Todo');

const router = Router();

router.get('/', async (req, res) => {
  const todos = await Todo.find({}).lean(); //Метод find возвращает объект MongoDB, c которого шаблонизатор не может считать свойства. Метод lean возвращает простой  JS объект
  res.render('index', {
    title: 'Todos List',
    isIndex: true,
    todos
  }); // index.hbs
});

router.get('/create',  (req, res) => {
  res.render('create', {
    title: 'Create todo',
    isCreate: true
  });
});

router.post('/create', async (req, res) => {
  const todo = new Todo({
    title: req.body.title //'title' == значение name поля ввода формы на клиенте
    // 'body' - необходимо определить для Express в корневом index.js (express.urlencoded)
  });
  await todo.save();
  res.redirect('/');//???
});

router.post('/complete', async (req, res) => {
  const todo = await Todo.findById(req.body.id);
  if(!todo.completed) {
    todo.completed = true;
  } else {
    todo.completed = false;

  }

  await todo.save();
  res.redirect('/');
});

module.exports = router;










