sizes = [1,5,10,15,20,25,30,35,40,45,50,55,60]

select_marker_size = document.querySelector('#marker_size')

sizes.forEach(e => {
    n_ele = document.createElement('option')
    n_ele.value = e
    n_ele.innerText = '●'
    n_ele.style.fontSize = `${e}px`
    select_marker_size.append(n_ele)
});

