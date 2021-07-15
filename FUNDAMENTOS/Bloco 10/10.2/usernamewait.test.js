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
     it('usuario existe', async () => { // texto e escreve async
       const user = await getUserName(4);// pondo o resultado numa const 
        expect(user).toEqual('Mark');// a constante traz o resultado, por isso só jogar a constante e comparar 
       });
     it('usuario id não existe', async () => { // faz o texto e escreve async
      try {
         await getUserName(2); // esperar a resposta , mas nao precisa por na constante porque queremos o erro
       }
       catch(error){
          expect(error).toEqual({ error: `User with 2 not found.` });
       } 
     });  
   });
   
 