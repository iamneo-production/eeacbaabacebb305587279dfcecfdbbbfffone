function cal() {
    const userInput = document.getElementById("text").value

    if (userInput.trim() === '') {
        document.getElementById("ans").innerText = "Error";
    }

    const words = userInput.split(/\s+/)

    const filterWords = words.filter(word => /[a-zA-Z]+/.test(word))
    const wordCount = filterWords.length
    
    document.getElementById("ans").innerHTML = "Word count: " + wordCount;
}