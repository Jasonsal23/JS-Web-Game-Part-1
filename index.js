function newImage(img, left, bottom){

    let image = document.createElement('img')
    image.src = img
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
    return image

}

function newItem(img, left, bottom){
let image = newImage(img, left, bottom)

image.addEventListener('dblclick', function(){
image.remove()
}) 
}

function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}

newInventory()
newImage('assets/green-character.gif', '100px', '250px')
newImage('assets/pine-tree.png', '450px', '350px')
newImage('assets/tree.png', '200px', '450px')
newImage('assets/pillar.png', '350px', '200px')
newImage('assets/crate.png', '150px', '350px')
newImage('assets/well.png', '500px', '575px')

newItem('assets/sword.png', '500px', '555px')
newItem('assets/shield.png', '165px', '335px')
newItem('assets/staff.png', '600px', '250px')