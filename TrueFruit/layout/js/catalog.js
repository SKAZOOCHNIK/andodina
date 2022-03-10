function app() {
    let buttons = document.querySelectorAll('.cot_button')
    let cards = document.querySelectorAll('.prodyct_g')
    function filter (category, items){
        items.forEach((item) =>{
            let isItemFiltered = !item.classList.contains(category)
            let isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll){
                item.classList.add('hide')
            } else {
                item.classList.remove ('hide')
            }
        })
    }

    buttons.forEach((button) => { 
        button.addEventListener('click', () => {
            let currentCategory = button.dataset.filter
            filter(currentCategory, cards)
            console.log(button.dataset.filter)
        })
    })
}
app()