document.querySelectorAll('.btn').forEach(button => button.addEventListener('click', e => {
    if(!btn.classList.contains('delete')) {

        btn.classList.add('delete');

        setTimeout(() => btn.classList.remove('delete'), 2200);

    }
    e.preventDefault();
}));
