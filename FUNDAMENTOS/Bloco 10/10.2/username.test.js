// ex 2
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
      return getUserName(4).then( user => expect(user).toEqual('Mark'));// coloca o return jogou o id, usou o then porque é a resposta para a promise ve se o id bate com o nome do usuario
      });
    it('usuario id não existe', () => {// faz o texto e a funcao anonima
      return getUserName(2).catch(error => // enquanto o then traz um usuario o catch traz um erro 
        expect(error).toEqual({ error: `User with 2 not found.` }));
    });  
  });
  
