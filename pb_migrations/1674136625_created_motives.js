migrate((db) => {
  const collection = new Collection({
    "id": "m4jj003d1rqsge8",
    "created": "2023-01-19 13:57:05.167Z",
    "updated": "2023-01-19 13:57:05.167Z",
    "name": "motives",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kzbsqxww",
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
        "id": "6uw2booe",
        "name": "value",
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
  const collection = dao.findCollectionByNameOrId("m4jj003d1rqsge8");

  return dao.deleteCollection(collection);
})
