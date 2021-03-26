import express from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json";

import * as dataService  from "./util/db";
import webinarRoutes from "./routes/webinar";
import authenticationRoutes from "./routes/auth";
import cartRoutes from "./routes/cart";
import categoriesRoutes from "./routes/category_routes";
import facultyRoutes from "./routes/faculty";
import orderRoutes from "./routes/order";
import countriesRoutes from "./routes/country";

const app= express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//  app.use('/api/v2',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use(webinarRoutes);
  app.use(facultyRoutes);
  app.use(cartRoutes);
  app.use(categoriesRoutes);
  app.use(countriesRoutes);
  app.use(orderRoutes);
  app.use(authenticationRoutes);
  app.use((req, res, next) => {
      console.log('started')
    res.status(404).send('<h1>Page not found</h1>');
  });
  

  dataService.mongoConnect(() => {
    app.listen(3000);
  })
 


