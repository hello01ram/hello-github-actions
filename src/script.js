import axios from "axios";

const getDataButton = document.getElementById("get-data-button");
getDataButton.addEventListener("click", getData);

async function getData() {
    try {
        const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
        const posts = data.data;
    console.log(data);
    } catch (e) {
        console.error("Failed: " + e);
    }
}