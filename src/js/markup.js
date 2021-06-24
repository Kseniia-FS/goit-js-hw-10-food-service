import 'material-icons/iconfont/material-icons.css';
import foodListTmp from '../templates/template.hbs'
import foods from "../partials/menu.json"

const foodList = document.querySelector(".menu")
const foodListMarkup = createFoodListMarkup(foods)
foodList.insertAdjacentHTML('afterbegin', foodListMarkup)


function createFoodListMarkup (foods){
    return foods.map(foodListTmp).join('')
}