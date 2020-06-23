const fs = require('fs');
const csv = require('@fast-csv/parse');
const path = require('path');
const knex = require('../connection');

async function seed () {
  // Deletes ALL existing entries
  await knex('covid').del()
    .then(async function () {
      // Inserts seed entries
      
      fs.createReadStream(path.resolve(__dirname, '..', '..', 'assets', 'Brasil-covid.csv'))
        .pipe(csv.parse({ headers: true }))
        .on('error', (error) => console.error(error))
        .on('data', async (row) => {
            let date = row.data.split('/');
            date = `${date[2]}-${date[1].length === 1 ? `0${date[1]}`: `${date[1]}` }-${date[0].length === 1 ? `0${date[0]}`: `${date[0]}` }`;
            console.log(date);
            const country = "Brasil";
            const region = row.regiao;
            const state = row.estado;
            const city = row.municipio;
            const casesAcc = row.casosAcumulado;
            const casesNew = row.casosNovos < 0 ? 0 : row.casosNovos;
            const deathsAcc = row.obitosAcumulado;
            const deathsNew = row.obitosNovos < 0 ? 0 : row.obitosNovos;

            await knex('covid').insert({
              country,
              region,
              state,
              city,
              casesAcc, 
              casesNew, 
              deathsAcc, 
              deathsNew, 
              date
          })
        })
        .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`));
    });
};

seed();
