migrate((db) => {
  const collection = new Collection({
    "id": "rczfd15vsy6t079",
    "created": "2023-01-19 13:58:57.830Z",
    "updated": "2023-01-19 13:58:57.830Z",
    "name": "language_devices",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ebykvu73",
        "name": "bookId",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "e34n0zr9gk8xpxn",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "ypurckqy",
        "name": "value",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "4xutslnq",
        "name": "example",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rczfd15vsy6t079");

  return dao.deleteCollection(collection);
})
