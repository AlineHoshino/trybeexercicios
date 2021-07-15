//exercicio 1
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it(`uppercase 'oi' será 'OI'`, (done) => { // quando é callback segundo parametro é done
  uppercase('oi', (callback) => { // chama a funcao 
    expect(callback).toBe('OI');// espera que a callback retorne a srting com nome maisuculo
    done();// usa o done
  });
});

