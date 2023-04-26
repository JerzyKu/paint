const body_ele = document.querySelector("body")

new_ele = document.createElement('div')
new_ele.classList.add('tool_box');
body_ele.append(new_ele)

new_ele = document.createElement('div')
new_ele.classList.add('canvas_area');
body_ele.append(new_ele)

const tools = document.querySelector(".tool_box")

// generate main canvas 
new_ele = document.createElement('canvas')
new_ele.id = 'main_canvas'
// new_ele.style.width = '800px'
// new_ele.style.height = '600px'
new_ele.style.border = '2px solid black'
new_ele.width="800" 
new_ele.height="600"
body_ele.append(new_ele)

//generate save button 
new_ele = document.createElement('button')
new_ele.id = 'save'
new_ele.innerText = 'Save Img'
new_ele.classList.add('big_button');
tools.append(new_ele)

//generate clear button 
new_ele = document.createElement('button')
new_ele.id = 'clear'
new_ele.innerText = 'clear Img'
new_ele.addEventListener('click', () =>{clear_canvas()})
new_ele.classList.add('big_button');
tools.append(new_ele)

//generate size button 
new_ele = document.createElement('select')
new_ele.id = 'marker_size'
// new_ele.addEventListener('change', () =>{clear_canvas()})
new_ele.classList.add('big_button');
new_ele.classList.add('size_selector');
new_ele.addEventListener('change',() => {
    LINE_WIDTH = document.querySelector('#marker_size').value
    new_ele.style.fontSize = document.querySelector('#marker_size').value
})
tools.append(new_ele)


//generate color button 
colors = ['red','orange','yellow','green','blue','purple','pink','white','gray','brown','black']
colors.forEach(element => {
    new_ele = document.createElement('button')
    new_ele.id = element
    new_ele.style.backgroundColor = element
    new_ele.innerText = 'x'
    new_ele.addEventListener('click', () => {
        COLOR =  element      
    })
    tools.append(new_ele)
});