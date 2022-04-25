var catalog = document.getElementById('catalog')
var cart = document.getElementById('cart-items')

cart.style.display = 'none'
catalog.style.display = 'none'
document.getElementById('menu').addEventListener('mouseover', (e) => {
    catalog.style.display = 'flex'
})

catalog.addEventListener('mouseover', (e) => {
    catalog.style.display = 'flex'
})

catalog.addEventListener('mouseout', (e) => {
    catalog.style.display = 'none'
})

document.getElementById('menu').addEventListener('mouseout', (e) => {
    catalog.style.display = 'none'
})

document.getElementById('cart').addEventListener('mouseover', (e) => {
    cart.style.display = 'block'
    fetch('/cart',{
        method: 'GET'
    }).then(res => res.json())
    .then(json => {
        if(json.items){
            json.items.forEach(item => {

                let itemHTML = document.createElement('tr')
                itemHTML.innerHTML = `
                        <td>${item.tensanpham}</td>
                        <td>${item.giasanpham}</td>
                        <td>${item.soluong || 1}</td>
                `

                document.getElementById('cart-display').appendChild(itemHTML)
            })
        }
        else{
            cart.innerText('Your cart is empty')
        }
    })
})
document.getElementById('cart').addEventListener('mouseout', (e) => {

    cart.style.display = 'none'
    document.getElementById('cart-display').innerHTML = ''
})

function addToCart(id, tensanpham, giasanpham){
    let soluong = document.getElementById('soluong-'+id)
    fetch('/cart', {
        method: 'POST',
        body: new URLSearchParams({
            id: id,
            tensanpham: tensanpham,
            giasanpham: giasanpham,
            soluong: soluong.value
        })
    }).then(res => res.json())
    .then(json => console.log(json))
}