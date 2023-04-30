function newImage(img, left, bottom){

    let image = document.createElement('img')
    image.src = img
    image.style.position = 'fixed'
    image.style.left = left +'px'
    image.style.bottom = bottom +'px'
    document.body.append(image)
    return image

}

function newItem(img, left, bottom){
let image = newImage(img, left, bottom)

image.addEventListener('click', function(){
image.remove()
}) 
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
