
ALTER TABLE drinked
    ADD CONSTRAINT fk_drinks_drinked FOREIGN KEY (energy_drink_id) REFERENCES energy_drink (id);

ALTER TABLE drinked
    ADD CONSTRAINT fk_weekday_drinked FOREIGN KEY (week_day_id) REFERENCES week_day (id);