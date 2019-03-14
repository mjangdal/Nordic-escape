



let images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
let counter = 0;
/* spin image cykle bakwards */
function back(counter){
    counter = counter - 1;
    if(counter < 0){
        counter = 2;
    }
    document.getElementById('image').src = images[counter];
    return counter;
}
/* spins image cykel forward */
function forward(){
    counter++;
    if(counter > 2){
        counter = 0;
    }
    document.getElementById('image').src = images[counter];
    return counter;
}