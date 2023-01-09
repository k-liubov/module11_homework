//функция принимает адрес в виде строки и возвращает ту же строку, но со звёздочками вместо пароля. Пароль находится после password=

function hideDBPassword(jdbcAddr){
    let passReg = /password=(\S+)/g;
    let passMatch = passReg.exec(jdbcAddr);
    
    let pass = passMatch[1];
    let newPass = Array.from({length: pass.length}).fill('*').join('');
    let result = jdbcAddr.replace(pass, newPass);
    return result;
  } 
  
  
  hideDBPassword('jdbc:mysql://sdasdasdasd:szdasdasd:dfsdfsdfsdf/sdfsdfsdf?user=root&password=12345');

module.exports = hideDBPassword;