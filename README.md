# CLI App (working with data in JSON)

## Commands:

- #### display all saved contacts in the console
  `node index.js --action="list"` OR `node index -a list`
  ![image](https://i.ibb.co/WGbjfH7/Screenshot-1.png)
- #### display contact by Id or null if the desired contact does not exist
  `node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6` OR
  `node index -a get -i 05olLMgyVQdWRwgKfg5J6`
  ![image](https://i.ibb.co/162zJN1/Screenshot-2.png)
- #### add the contact to saved and display this contact
  `node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22`
  OR `node index -a add -n Mango -e mango@gmail.com -p 322-22-22`
  ![image](https://i.ibb.co/7k823N7/Screenshot-3.png)
- #### delete the contact by Id and display deleted contact or null if a contact with such an id does not exist
  `node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH` OR
  `node index -a remove -i qdggE76Jtbfd9eWJHrssH`
  ![image](https://i.ibb.co/5xmyjL4/Screenshot-4.png)
