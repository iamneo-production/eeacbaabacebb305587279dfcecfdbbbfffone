function cal() {
    const userInput = document.getElementById("text-area").value

    if (userInput.trim() === '') {
        document.getElementById("word-count").innerText = "Error";
    }

    const words = userInput.split(/\s+/)

    const filterWords = words.filter(word => /[a-zA-Z]+/.test(word))
    const wordCount = filterWords.length
    
    document.getElementById("word-count").innerHTML = "Word count: " + wordCount;
}