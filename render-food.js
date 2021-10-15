export function renderFood(food){
    const li = document.createElement('li');
    li.classList.add('food-item');
    const foodImg = document.createElement('img');
    foodImg.src = food.img;
    const liName = document.createElement('span');
    liName.textContent = food.name;
    li.append(foodImg, liName,);
    return li;
    
}