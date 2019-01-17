module.exports = (app) => {

    app.get('/', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>RestAPI Node</h1><br/><p>Sistema de controle de usuários rodando!</p>');
       
    });
    
};