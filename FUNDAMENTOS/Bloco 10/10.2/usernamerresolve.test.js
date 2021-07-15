const users = {
  4 : { name: 'Mark' },
  5 : { name: 'Paul' }
   };
   
   const findUserById = (id) => {
     return new Promise((resolve, reject) => {
         if (users[id]) {
           return resolve(users[id]);
         };
   
         return reject({ error: 'User with ' + id + ' not found.' });
     });
   };
   
   const getUserName = (userID) => {
     return findUserById(userID).then(user => user.name);
   };
 
   describe('Testando username ', () => {// faz o texto e a funcao anonima
     it('usuario existe', () => { // texto e funcao anonima
       return expect (getUserName(4)).resolves.toEqual('Mark');
       });
     it('usuario id não existe', () => {// faz o texto e a funcao anonima
       return expect (getUserName(2)).rejects.toEqual({ error: `User with 2 not found.` });
     });  
   });
   