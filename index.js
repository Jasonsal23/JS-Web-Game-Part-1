let inventory=document.createElement('div')

function newImage(url){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image
}

function move(image){
    image.style.position = 'fixed'

    function moveToCoordinates(left,bottom){
        image.style.left = left + 'px'
        image.style.bottom = bottom + 'px'
    }
    return{
        to: moveToCoordinates
    }
}

let greenCharacter = newImage('assets/green-character.gif')
move(greenCharacter).to (200, 250)

let tree= newImage('assets/tree.png')
move(tree).to (200,450)

let pillar= newImage('assets/pillar.png')
move(pillar).to (350,250)

let pineTree= newImage('assets/pine-tree.png')
move(pineTree).to (450,350)

let crate= newImage('assets/crate.png')
move(crate).to (150,350)

let well= newImage('assets/well.png')
move(well).to (500,575)


function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click',function(){
        item.remove()
        let inventoryItem=document.createElement('img')
        inventoryItem.src =url
        inventory.append(inventoryItem)
    })
}


function newInventory(){
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


//newImage('assets/pillar.png', 350, 250)
//newImage('assets/pine-tree.png', 450, 350)
//newImage('assets/crate.png', 150, 350)
//newImage('assets/well.png', 500, 575)

newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)