const memeImage = document.getElementById("memeImage");
const generateBtn = document.getElementById("generateBtn");
const autherName = document.getElementById('autherName');
const title = document.getElementById('title');

const memeAPIURL = "https://meme-api.com/gimme";
const fetchRandomMeme = async () => {
    try {
        const response = await fetch(memeAPIURL);
        const data = await response.json();
        console.log(data)
        if (data && data.url) {
            memeImage.src = data.url;
            autherName.innerHTML = `  <h3>Auther Name : ${data.author}</h3>`
            title.innerHTML = `  <h4>Title  : ${data.title}</h4>`
        }
    } catch (error) {
        console.error("Error fetching meme:", error);
    }
};

generateBtn.addEventListener("click", fetchRandomMeme);

fetchRandomMeme();
