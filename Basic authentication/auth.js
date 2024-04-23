const base64 = require('base-64');

function decideCredentials(authHeader) {

    const encodedCredentials = authHeader.trim().replace('Basic','');
    console.log("EncodedCredentials ",encodedCredentials);
    const decodedCredentials = base64.decode(encodedCredentials);
    console.log("decodedCredentials ",decodedCredentials);
    const [username , password] =decodedCredentials.split(':');
    
    return [username,password];
}


module.exports = function (req,res,next){
    
    const [username,password] = decideCredentials(
        req.headers.authorization || ''
    );
    console.log(username, " ",password);
    
    if(username === 'admin' && password === '123'){
        return next();
    }

    res.set('www-Authenticate','Basic realm="user_pages"');
    res.status(401).send('Authentication failed');
}