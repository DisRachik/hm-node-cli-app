# CLI App (working with data in JSON)

## Commands:

- #### display all saved contacts in the console

  `node index.js --action="list"` OR `node index -a list`
  ![image](https://monosnap.com/file/YTeBrTz1BgvyJjd4doCHndeBzB9RGb)

- #### display contact by Id or null if the desired contact does not exist
  `node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6` OR
  `node index -a get -i 05olLMgyVQdWRwgKfg5J6`
  ![image](https://monosnap.com/file/l5MauUOjHVUTwHACobkb9n2I9it609)
- #### add the contact to saved and display this contact
  `node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22`
  OR `node index -a add -n Mango -e mango@gmail.com -p 322-22-22`
  ![image](https://monosnap.com/file/BtRlL7bpq2Xf3FOgplVN6LlbDrXxdN)
- #### delete the contact by Id and display deleted contact or null if a contact with such an id does not exist
  `node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH` OR
  `node index -a remove -i qdggE76Jtbfd9eWJHrssH`
  ![image](https://monosnap.com/file/F52iZ2LqZyQyNrkqxDiA5Bfo3eM9i1)
