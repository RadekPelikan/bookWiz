migrate((db) => {
  const collection = new Collection({
    "id": "yytd4uhlul4mq5a",
    "created": "2023-01-19 13:24:12.008Z",
    "updated": "2023-01-19 13:24:12.008Z",
    "name": "literature_genres",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xzpco8dj",
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
  const collection = dao.findCollectionByNameOrId("yytd4uhlul4mq5a");

  return dao.deleteCollection(collection);
})
