window.onhashchange = () => {
    console.log('hash')
    document.querySelector('#page').className = location.hash.replace('#', '')
}