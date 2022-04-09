module.exports = (req, res, next) => {
   if(req.method === 'POST' && req.path === '/login'){
      if(req.body.login === 'admin' && req.body.password === 'admin'){
         res.status(200).json({token: 'Bounty'})
      }else{
         res.status(400).json({message: "wrong password"})
      }
   } else if(req.method === 'POST' && req.path === '/logout') {
      res.status(204).json()
   } else {
      next()
   }
}