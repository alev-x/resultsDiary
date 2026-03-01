// Ищем кнопки на странице
const tabsBtns = document.querySelectorAll(".tabs__button");
// Ищем елементы на странице, которые будем переключать
const tabsItems = document.querySelectorAll(".tabs__item");
console.log(tabsItems);
//Функция, которая будет скрывать табы и убирать класс active у кнопки
function hideTabs() {
    tabsItems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(btn => btn.classList.remove("active"));
}
//Функция, которая показывает переданый номер таба и делает соответвующую кнопку активной
function showTabs(index) {
    tabsItems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}
hideTabs();
showTabs(0);
//Перебор кнопок с навешиваниям на них слушателя событий
tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTabs(index);
}));