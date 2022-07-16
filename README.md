# js-shop-frontend

Link to API: https://js-gunshop-back.herokuapp.com/,
Link to Frontend: https://cool-shortbread-f56f49.netlify.app/

Errors:
- I have an error with my API which I deploy on Heroku, when I am testing it on postman for example route: '/api/products' I get an error:
{
    "message": "connect ECONNREFUSED 127.0.0.1:3306",
    "stack": "SequelizeConnectionRefusedError: connect ECONNREFUSED 127.0.0.1:3306\n    at ConnectionManager.connect (/app/node_modules/sequelize/lib/dialects/mysql/connection-manager.js:92:17)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at async ConnectionManager._connect (/app/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:220:24)\n    at async /app/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:174:32\n    at async ConnectionManager.getConnection (/app/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:197:7)\n    at async /app/node_modules/sequelize/lib/sequelize.js:301:26\n    at async MySQLQueryInterface.select (/app/node_modules/sequelize/lib/dialects/abstract/query-interface.js:407:12)\n    at async Function.findAll (/app/node_modules/sequelize/lib/model.js:1134:21)\n    at async /app/controllers/productController.js:8:20"
}

I think it's a problem with Sequelize which I used the first time. I was searching for solution but I haven't found yet.

- I also have a problem with cors, I installed 'cors' package and added it to my server.js file with origin to my frontend deployed at netlify but I still got an error:
Access to XMLHttpRequest at 'https://js-gunshop-back.herokuapp.com/api/products' from origin 'https://cool-shortbread-f56f49.netlify.app' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://cool-shortbread-f56f49.netlify.app/' that is not equal to the supplied origin.

To finish:
I haven't finished the order process yet. I want to use PayPal or Stripe API for payments.
