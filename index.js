import express from 'express';

import PgPromise from 'pg-promise';


const app = express();
const pgp = PgPromise();

// /api/energy_drinks

const DATABASE_URL= process.env.DATABASE_URL || "postgresql://energy:energy123@localhost:5432/energy_drinks";

const config = { 
	connectionString : DATABASE_URL
}

if (process.env.NODE_ENV == 'production') {
	config.ssl = { 
		rejectUnauthorized : false
	}
}

const db = pgp(config);

app.use(express.json());
app.use(express.static("public"));


app.get('/api/energy_drinks', async function(req, res){
    
    const drinks = await db.manyOrNone(`select * from energy_drink`);
    res.json(drinks);

});

app.get('/api/days', async function(req, res){

    const days = await db.manyOrNone(`select * from week_day`);
    res.json(days);

});

app.get('/api/energy_drinks/day', async function(req, res){
    const {week_day_id} = req.query;

    const sql = `select * from drinked 
        join week_day on week_day.id = week_day_id 
        join energy_drink on energy_drink.id = energy_drink_id 
        where week_day_id = $1`;

    
    const drinks = await db.manyOrNone(sql, [week_day_id]);

    res.json(drinks);

});

app.post('/api/energy_drink', async function(req, res) {

    try {
        const {day_id, drink_id} = req.body;
        const insertSQL = `insert into drinked (week_day_id, energy_drink_id) values ($1, $2)`;
        await db.none(insertSQL, [day_id, drink_id]);
    
        res.json({
            status: 'success'
        });
    } catch (err) {
        res.json({
            status : 'error',
            error : err.detail
        })
    }


});


const PORT = process.env.PORT || 3017;
app.listen(PORT, () => {
    console.log(`Energy drinks API started on port ${PORT}`)
});