exports.paginaInicial = (req,res) => {
    res.send(`<form action= "/"method="POST">
    Nome: <input type="text" name=nome> 
    <button> Click</button>
    </form>`);
}

exports.trataPost = (req,res)=>{
    res.send('sou sua nome rota de posta, ok')
}