const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// Primer 1:

const tempreture = (req, res) => {
  const temperatura = Number(req.body.temperatura);
  const c_f = req.body.c_f.toLowerCase();

  switch (c_f) {
    case "celzius":
      const fahrenheit = (temperatura * 9) / 5 + 32;

      res.send(`${temperatura} C e ${fahrenheit} F`);
      break;

    case "fahrenheit":
      const celzius = ((temperatura - 32) * 5) / 9;
      res.send(`${temperatura} F e ${celzius} C`);
      break;
    default:
      res.send("Ve molam vnesete validni podatoci za temperatura");
  }
};

app.post("/c2f", tempreture);

// Primer 2
const student = (req, res) => {
  const ime = req.body.ime;
  const prosek = Number(req.body.prosek);
  const grad = req.body.grad;

  if (prosek < 8) {
    res.send(
      `Studentot ${ime} od ${grad} ima prosek pomal od dozvoleniot za da dobie stipendija!`
    );
  } else if (prosek >= 8) {
    res.send(
      `Na studentot ${ime} od ${grad} so prosek ${prosek} mu sleduva stipendija!`
    );
  } else {
    res.send("Vnesete validni podatoci za studentot!");
  }
};
app.post("/studenti", student);

// Primer 3

const godisnoVreme = (req, res) => {
  const mesec = Number(req.body.mesec);
  const den = Number(req.body.den);

  let time;

  if (mesec === 12 || mesec === 1 || mesec ===2) 
    
      {
        time = "Zima";
        res.send(`Denes e ${den}.${mesec}.Godisnoto vreme e ${time}`);
      }
      
   else if (mesec === 3 || mesec === 4 || mesec === 5)
      {
        time = "Prolet";
        res.send(`Denes e ${den}.${mesec}.Godisnoto vreme e ${time}`);
      }
      
    else if (mesec === 6 || mesec === 7 || mesec === 8)
      {
        time = "Leto";
        res.send(`Denes e ${den}.${mesec}.Godisnoto vreme e ${time}`);
      }
      
    else if (mesec === 9 || mesec === 10 || mesec === 11)
      {
        time = "Esen";
        res.send(`Denes e ${den}.${mesec}.Godisnoto vreme e ${time}`);
      }
      

    else {
      res.send(`Vnesete tocni podatoci za mesec!`);
    }
  };

app.post("/godisnovreme", godisnoVreme);

// Primer 4

const merki = (req,res) => {
    const vrednost = Number(req.body.vrednost);
    const merka = req.body.merka.toLowerCase();
    if ( merka === 'metar') {
        const inch = vrednost * 39.26;
        res.send(`${vrednost} metri se ${inch} inch.`)
    } else if ( merka === 'inch'){
        const metar = vrednost / 39;
        res.send(`${vrednost} inch e ${metar}metri.`)
    }
    else {
        res.send('Vnesete validni podatoci!');
    }};
    app.post('/dolzina', merki);

// Primer 5

const temperatura = (req,res) => {
    const temp = Number(req.body.temperatura);
     if (temp <= 0){
        res.send(`Temperaturata e ${temp}. Nadvor e smrznuvacka!`);
     } else if ( temp > 0 && temp <= 15) {
        res.send(`Temperaturata e ${temp}, ako izleguvas zemi si jakna!`);
     } else if ( temp > 15 && temp <= 25) {
        res.send(`Temperaturata e ${temp}. Nadvor e ubavo vremeto!`);
    
     } else if (temp > 25) {
        res.send(`Temperaturata e ${temp}. Nadvor e toplo!`);
     } else {
        res.send (`Vnesi validni podatoci za temperatura!`);
     }};
     app.post('/temperatura' , temperatura);

    

app.listen(9001, (err) => {
  if (err) return console.log(err.message);
  console.log("Server started successfully on port 8000");
});
