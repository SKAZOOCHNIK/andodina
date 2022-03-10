




;(function(){
    var body = document.querySelector('body');

    var closestItemByClass = function(item, className) {
        var node = item;
        while(node){
            if (node.classList.contains(className)) {
                return node;
            }
            node = node.parentElement;
        }
        return null;
    };

    var closestAttr = function(item, attr) {
        var node = item;
        while(node){
            var attrValue = node.getAttribute(attr);
            if (attrValue) {
                return attrValue;
            }
            node = node.parentElement;
        }
        return null;
    };


    var showPopup = function (target) {
        target.classList.add('active');
    };
    var closePopup = function (target) {
        target.classList.remove('active');
    };
    var toggleScroll = function() {
        body.classList.toggle ('no-scroll');
    };

    body.addEventListener('click', function(e){
        var target = e.target;
        var popupClass = closestAttr (target, 'data-popup');

        
        if (popupClass === null) {
            return;
        }
        e.preventDefault();
        var popup = document.querySelector('.' + popupClass);
        if (popup) {
            showPopup(popup);
            toggleScroll();
        }
        console.log(popup)
        
    });
    body.addEventListener('click', function(e) {
        var target = e.target;

        if (target.classList.contains('pop_up_close') || target.classList.contains('pop_up_container'))
        {
            var popup = closestItemByClass(target, 'pop_up');
            closePopup (popup);
            toggleScroll();
        }
    });
})();







window.onscroll = function showHeader() 
{
    let header = document.querySelector(".header");
    if(window.pageYOffset > 0)
    {
        header.classList.add('header_fixed');
    }
    else
    {
        header.classList.remove('header_fixed');
    }
}