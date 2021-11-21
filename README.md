# Red_Coding_Challenge


This challenge had the following requirements for the frontend:

-	Create a view of order entities in-memory on the page
-	Implement a feature where users can create new order entities
-	Implement simple dropdown filters to limit the order view to certain customers and order types
-	Implement a simple textbox search to lookup an order by id
-	Implement a delete feature by which a user can remove one to many orders at once


The challenge also had the following requirements for the backend:

-	Upgrade the in-memory (hardcoded) data dictionary to any kind of external store. Files, normalized/non-normalized databases, caching etc are acceptable. Preference will be given to normalized database implementations (SQL scripts are an ok deliverable).
-	Implement 3 new APIs:
o	A search API that searches on Customer and OrderType
o	A create API that creates a new Order given all the fields an Order object has
o	A delete API that removes a list of orders by id
-	Create and implement at least a repository layer using Dependency Injection (DI). Feel free to use .NET Core’s native features or a 3rd party package if preferred.
-	Implement unit tests using the platform of your choice for the CRUD operations that validate that the data (or service layer) is called with the expected values from the API

I was able to create a database for some sample data within Microsoft SQL Server. Using the PNG provide as well as the API, I based the schema on the two for the table. However, I was unable to create an api to connect the front to the backend. Below is a screenshot of what my example database looks like in SQL:

![image](https://user-images.githubusercontent.com/80648971/142740457-b3992288-a184-482d-9007-0b7e8b438cec.png)

As you can see, Here is what the frontend currently looks like. I experimeted with material UI, however I ended up sticking with a bootstrap interface. Speaking of Interfaces, implementing both
component props and user state interfaces was interesting. **To see the frontend on the localhost, run npm run start on the frontend folder.**

![image](https://user-images.githubusercontent.com/80648971/142740530-d263e546-5e93-4992-9276-7c5710a0cc46.png)

Tools used throughout the challenge: VS Studio, VS Studio Code, Microsoft SQL Server, Swagger, and several NPM packages/modules.
Languages touched: React.js, JavaScript, TypeScript, Node, C#, and HTML

The next steps would be to have the application deployed on Heroku or Netlify.

