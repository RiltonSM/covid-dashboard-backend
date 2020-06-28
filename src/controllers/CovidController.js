const knex = require('../database/connection');
require('dotenv/config');

module.exports = {
    async showDay (request, response){
        const { date, region, state, city } = request.query;
        let data = [];
        
        if(region === "Brasil"){
            data = await knex('covid').where("region", region).andWhere('date', date).select('*');  
        } else if(state === 'CE' && city === undefined){
            data = await knex('covid').where("state", state).andWhere("city", "").andWhere('date', date).select('*');  
        } else{
            data = await knex('covid').where("state", "CE").andWhere("city", city).andWhere('date', date).select('*');
        }
        
        if(data.length === 0){
            let i = 0;
            while(data.length === 0){
                console.log(data);
                i++;
                let day = new Date;
                day = day.getDate() - i;
                newDate = date.split('-');
                newDate[2] = day.toString().length === 1 ? `0${day}` : `${day}`;
                newDate = newDate.join('-');
                if(region === "Brasil"){
                    data = await knex('covid').where("region", region).andWhere('date', newDate).select('*');  
                } else if(state === "CE" && city === undefined){
                    data = await knex('covid').where("state", state).andWhere("city", "").andWhere('date', newDate).select('*');  
                } else{
                    data = await knex('covid').where("state", "CE").andWhere("city", city).andWhere('date', newDate).select('*');
                }
            }
            
        }
        return response.json(data)
    },

    async showCasesNew(request, response){
        const {region, state, city} = request.query;
        let data = [];

        if(region === "Brasil"){
            data = await knex('covid').orderBy('date').where("region", region).select('date as x', 'casesNew as y');  
        } else if(state === 'CE' && city === undefined){
            data = await knex('covid').orderBy('date').where("state", state).andWhere("city", "").select('date as x', 'casesNew as y');  
        } else{
            data = await knex('covid').orderBy('date').where("state", "CE").andWhere("city", city).select('date as x', 'casesNew as y');
        }

        return response.json(data);
    },  

    async showCasesAcc(request, response){
        const {region, state, city} = request.query;
        let data = [];

        if(region === "Brasil"){
            data = await knex('covid').orderBy('date').where("region", region).select('date as x', 'casesAcc as y');  
        } else if(state === 'CE' && city === undefined){
            data = await knex('covid').orderBy('date').where("state", state).andWhere("city", "").select('date as x', 'casesAcc as y');  
        } else{
            data = await knex('covid').orderBy('date').where("state", "CE").andWhere("city", city).select('date as x', 'casesAcc as y');
        }

        return response.json(data);
    },  
    
    async showDeathsNew(request, response){
        const {region, state, city} = request.query;
        let data = [];

        if(region === "Brasil"){
            data = await knex('covid').orderBy('date').where("region", region).select('date as x', 'deathsNew as y');  
        } else if(state === 'CE' && city === undefined){
            data = await knex('covid').orderBy('date').where("state", state).andWhere("city", "").select('date as x', 'deathsNew as y');  
        } else{
            data = await knex('covid').orderBy('date').where("state", "CE").andWhere("city", city).select('date as x', 'deathsNew as y');
        }

        return response.json(data);
    },  

    async showDeathsAcc(request, response){
        const {region, state, city} = request.query;
        let data = [];

        if(region === "Brasil"){
            data = await knex('covid').orderBy('date').where("region", region).select('date as x', 'deathsAcc as y');  
        } else if(state === 'CE' && city === undefined){
            data = await knex('covid').orderBy('date').where("state", state).andWhere("city", "").select('date as x', 'deathsAcc as y');  
        } else{
            data = await knex('covid').orderBy('date').where("state", "CE").andWhere("city", city).select('date as x', 'deathsAcc as y');
        }

        return response.json(data);
    }
}