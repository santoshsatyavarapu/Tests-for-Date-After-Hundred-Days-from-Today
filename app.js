const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const getDaysAfterXDays = (days) => {
    const newDate = addDays(new Date(), days);
    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
  };
  response.send(getDaysAfterXDays(100));
});
app.listen(3000);
module.exports = app;
