const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors())

// Directorio Público
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth') );
app.use('/api/events', require('./routes/events') );


// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});


/* 

heart   hart
hand    hend
above   abov
place   pleis
case    keis

develop     divelop
decide      disaid
hope        houp
send        send
require     rikuaier

create      crieit
drawn       dron
remain      rimein
carry       keri
swear       swear

wind        wind
told        tould
early       erly
less        less
field       field

suggest sugchest
reach   ritch
wear    wear
manage  menech
forget     forget   

receibe risiv
fall    fol
agree   agri
wonder  wonder
creepy  cripi 

trough  trof
boil    boil
ride    braid
climb   klaim
fetch   fech

plug       plog
style       stail
jug        yog
among       amang
dig         dig

allow   alaou
believe beliv
borrow  barou
break   breik
buy     bai

seize       siz
allocate    alokeit
burst       burst
defeat      difit
double  dabol

increase       inkruis
cover           kaver
catch           katch
arrive          arraiv
refuse          rifius

summon         somon
stem            stem
tour        tur
weaken      wiken
bounce  bauns

flood   flad
grip    grep
regain  rigein
term    term
underline   anderlain

sigh        sai
stir        ster
compose     compous
grin        grin
remark      rimark

bind    baind
focus     foucus
hurt    jurt
fix
pursue  persu

drop        drap
laugh       laf
delay       diley
commit      komit
reject  riyect
business       biznes

president
spread      spred
undertake   ondertek
account     akaunt
recall      ricol
earn        ern

*/