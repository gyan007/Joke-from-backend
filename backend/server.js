import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'First joke',
            content: 'Why did the chicken cross the road? To get to the other side.'
        },
        {
            id: 2,
            title: 'Second joke',
            content: 'What do you call a bird that doesn\'t sing? A parrot.'
        },
        {
            id: 3,
            title: 'A third joke',
            content: 'Why did the scarecrow win an award? Because he was outstanding in his field.'
        },
        {
            id: 4,
            title: 'A fourth joke',
            content: 'Why did the tomato turn red? Because it saw the salad dressing.'
        },
        {
            id: 5,
            title: 'A fifth joke',
            content: 'What do you call a fish that can\'t climb? A guppy.'
        }
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});