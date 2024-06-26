# Problem 5

## Environment version
- **NodeJS**: v18.16.0
- **Yarn**: 1.22.19

### API details
1. Create a resource: POST http://localhost:3000/api/resources
   ``` 
   Content-Type: application/json
   
   Payload: {
   "name": "test123",
   "type": "test",
   "data": "test"
   }
   ```
2. List resource with basic filters: GET http://localhost:3000/api/resources?name=&type=&data=
3. Get details of a resource: GET http://localhost:3000/api/resources/:id
4. Update resource detail: PUT http://localhost:3000/api/resources/:id
   ```
   Content-Type: application/json
   
   Payload: {
   "name": "test123",
   "type": "test",
   "data": "test"
   }
   ```
5. Delete a resource: DELETE http://localhost:3000/api/resources/:id

## Start project
1. `yarn install` to download package node modules
2. `yarn run start` start server and implement features