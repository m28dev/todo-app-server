import express from 'express';

// Todoデータ
const todoDb = {
    "todos": [
        {
            "id": "1",
            "content": "Create React app をインストールする",
            "done": true
        },
        {
            "id": "2",
            "content": "JSON Server仮のAPIを作成する",
            "done": false
        },
        {
            "id": "3",
            "content": "Chakra UIをインストールする",
            "done": false
        }
    ]
};

const router = express.Router();

// 一覧取得
router.get('/', (req, res) => {
    res.json(todoDb.todos);
});

// 登録
router.post('/', (req, res) => {
    const todoItem = req.body;

    todoDb.todos.push(todoItem);
    res.json(todoItem);
});

// 更新
router.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId;
    const todoItem = req.body;

    // Todoデータを更新
    const newTodos = todoDb.todos.map(item => item.id === todoId ? req.body : item);
    todoDb.todos = newTodos;

    res.json(todoItem);
});

// 削除
router.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId;

    // Todoデータから指定IDの登録を削除
    const newTodos = todoDb.todos.filter(item => item.id !== todoId);
    todoDb.todos = newTodos;

    res.json({});
});

export { router as default }
