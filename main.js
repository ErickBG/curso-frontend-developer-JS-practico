const productList = [];
const imgButtonAddToCart = './icons/bt_add_to_cart.svg';
// productList.push({
//     name: 'Bike',
//     price: 120,
//     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// });

for(i=0;i<10;i++){
    productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });
}

const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carMenuIcon = document.querySelector('.navbar-shopping-cart');
const carMenu = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const asideProductDetail = document.querySelector('#productDetail');
const closeButtonAsideProduct = document.querySelector('.product-detail-close');

navBarEmail.addEventListener('click',toggleDesktopMenu);
iconMenu.addEventListener('click',toggleMobileMenu);
carMenuIcon.addEventListener('click',toggleShoppingCarMenu);
closeButtonAsideProduct.addEventListener('click',function(){
    openOrCloseProductDetail("close");
},false);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');

    if(!mobileMenu.classList.contains('inactive'))
        mobileMenu.classList.add('inactive');
    if(!carMenu.classList.contains('inactive'))
        carMenu.classList.add('inactive');
    
    openOrCloseProductDetail();
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    
    if(!desktopMenu.classList.contains('inactive'))
        desktopMenu.classList.add('inactive');
    if(!carMenu.classList.contains('inactive'))
        carMenu.classList.add('inactive');
    
    openOrCloseProductDetail();
}
function toggleShoppingCarMenu(){
    carMenu.classList.toggle('inactive');

    if(!desktopMenu.classList.contains('inactive'))
        desktopMenu.classList.add('inactive');
    if(!mobileMenu.classList.contains('inactive'))
        mobileMenu.classList.add('inactive');
    
    openOrCloseProductDetail();
}
function openOrCloseProductDetail(action='close',closeAllMenus=false){
    if(action==='open')
        asideProductDetail.classList.remove('inactive');
    else
        asideProductDetail.classList.add('inactive');

    if(closeAllMenus){
        if(!desktopMenu.classList.contains('inactive'))
            desktopMenu.classList.add('inactive');
        if(!mobileMenu.classList.contains('inactive'))
            mobileMenu.classList.add('inactive');
        if(!carMenu.classList.contains('inactive'))
            carMenu.classList.add('inactive');
    }
}
function renderProducts(products){
    for(product of products){
        const divProductCard = document.createElement('div');
        divProductCard.classList.add('product-card');
        
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src',product.image);
        imgProduct.addEventListener('click',function(){
            openOrCloseProductDetail("open",true);
        },false);
        
        const divProductInfo = document.createElement('div');
        divProductInfo.classList.add('product-info');
        
        const divProductDetail = document.createElement('div');
        
        const pProductPrice = document.createElement('p');
        pProductPrice.innerText = `$${product.price}`;
        
        const pProductDsc = document.createElement('p');
        pProductDsc.innerText = `${product.name}`;
    
        divProductDetail.appendChild(pProductPrice);
        divProductDetail.appendChild(pProductDsc);
        
        const figureImage = document.createElement('figure');
        const imgShoppingCar = document.createElement('img');
        imgShoppingCar.setAttribute('src',imgButtonAddToCart);
    
        figureImage.appendChild(imgShoppingCar);
    
        divProductInfo.appendChild(divProductDetail);
        divProductInfo.appendChild(figureImage);
    
        divProductCard.appendChild(imgProduct);
        divProductCard.appendChild(divProductInfo);
    
        cardsContainer.appendChild(divProductCard);
    }
}

renderProducts(productList);