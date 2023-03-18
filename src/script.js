import axios from 'axios';
import './style.css';

const getDataButton = document.getElementById('get-data-button');
getDataButton.addEventListener('click', getData);

async function getData() {
    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = data.data;
        console.log(posts);
    } catch (e) {
        console.error('Failed: ' + e);
    }
}