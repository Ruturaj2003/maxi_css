var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var no__button = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');




var n = selectPlanButtons.length;

function eventos ()
{
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    // modal.className = 'open';//This will actually overtite modal completelty
    modal.classList.add('open');//due to specifity it wont work so we will ad improtatnt tag to open
    backdrop.classList.add('open');
}

function removeModal ()
{
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if(modal)
    {
        modal.classList.remove('open');
    }
    mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
}

for(var i = 0; i < n; i++) {
    selectPlanButtons[i].addEventListener('click',eventos);
}
if(no__button)
{
    no__button.addEventListener('click',removeModal);
}
    backdrop.addEventListener('click',removeModal);

toggleButton.addEventListener('click',function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');

});

// console.log('toggleButton')