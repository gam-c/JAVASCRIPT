// What are greeting and name? parame
// What are "Howdy" and "James"? argume
// What are num1 and num2? parame
// What are 3 and 4? argume


//.                parameters
function greetUser(greeting, name) { 
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}

//.        arguments
let hi = "Howdy"
greetUser(hi, "James")


function add(num1, num2) {
    return num1 + num2
}

add(3, 4)