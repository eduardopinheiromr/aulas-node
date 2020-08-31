const fetch = require("node-fetch");
const fs = require("fs");
const { clear } = require("console");
const nResultados = 500;

async function userGenerator() {
  let res = await fetch(`http://randomuser.me/api/?results=${nResultados}`);
  if (res.ok) {
    let user = await res.json();
    fs.writeFile(
      "users-dataset.csv",
      `first_name, last_name, email, age, gender, username, password\n`,
      (err) => {
        if (err) throw err;
      }
    );
    user.results.forEach((rUser) =>
      fs.appendFile(
        `users-dataset.csv`,
        `${rUser.name.first}, ${rUser.name.last}, ${rUser.email}, ${rUser.dob.age}, ${rUser.gender},${rUser.login.username},${rUser.login.password}\n`,
        (err) => {
          if (err) throw err;
        }
      )
    );
    console.log(nResultados + " usuários adicionados ao users-dataset.csv");
  }
}

userGenerator();
