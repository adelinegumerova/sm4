let count = Number(prompt('Введите стоимость товара'));
let money = Number(prompt('Введите кол-во средств клиента'));

if(count == money){
    let done = document.querySelector('.done')
    done.textContent = 'Покупка совершена'
}else{
    if(count > money){
    let a = count - money;
    let aa = document.querySelector('.a')
    aa.textContent = 'Покупка не совершена. Для покупки не хватает: ' + a + ' р.'
    }else{
    let b = money - count;
    let bb = document.querySelector('.b')
    bb.textContent = 'Покупка совершена. Ваша сдача: ' + b + ' р.'
    }
}

let css = document.querySelector('.block');
css.style.background = '#000000';
css.style.height = '80px';
css.style.width = '200px';
css.style.textAlign = 'center';
css.style.position = 'absolute';
css.style.right = '40%';
css.style.color = 'orange'
css.style.fontWeight = 'bold'


css.style.JustifyContent = 'center';
css.style.padding = '20px';