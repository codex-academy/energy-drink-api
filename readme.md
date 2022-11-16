# Energy drink API

In this workshop we will be creating an API that keeps track of energy drink consumption.


<p float="left">
<img src="https://github.com/codex-academy/energy-drink-api/blob/3597b03eed8cea9d281b12f3a603b13c9dc2c877/images/monsters.png" width="300" style="display:'inline-block'">
<img src="https://github.com/codex-academy/energy-drink-api/blob/42c1ee765ce9a0bf455be1b5d7b9d111a107e3e8/images/switch.png" width="300" style="display:'inline-block'" >  
</p>


The API should be able to do a few things:

* return which energy drinks can be consumed
* return a list of all the days of the week - ordered by Monday to Sunday
* return which energy drinks are consumed for a given day of the week
* return which day of the week the most energy drinks are consumed
* return which energy drink is the most popular
* return a list of all the week days and how much energy drinks are consumed for each day
* return how many of a given energy drink were consumed on a given day
* return how many of a given energy drink were consumed for a selection of days
* return a list of all the enery drink consumed for a given day of the week
* return a list of all the enery drink and how many were consumed for a given day of the week
* record that a given energy drink was drank on a given week day
* create a new energy drink that can be consumed

> **Note:** The API can be extended to return nutritional information for a given drink. Can you go and find this information for us. This would supply very interesting information to our API users.



## API endpoints to start with

We will focus on these API endpoints initially:

* return which energy drinks can be consumed
* return a list of all the days of the week - ordered by Monday to Sunday
* return which energy drinks were consumed for a given day of the week
* record that a given energy drink was drank on a given week day


URL route | HTTP Type | Parameters
--------------|----------|
route | POST or GET | params needed


## Database setup

We will use the [CRUD app](http://crud.projectcodex.co/) to get going with the API.

We will need 3 tables. During the workshop we will discuss which fields each table will need.

```
create table energy_drink (

);

create table week_day (

);

create table drinked (

);
```

## Help me 

To find images for our energy drinks - 1 can images only.

## Tools & utilities we will use

* PostgreSQL
* REST Client
* [express.json](https://masteringjs.io/tutorials/express/express-json) - to make POST routes worko
* [CORS](https://www.npmjs.com/package/cors) - CORS to enable us to call the API from GitHub Pages and beyond


### REST Client

A VS Code plugin we can use to call API endpoints.
