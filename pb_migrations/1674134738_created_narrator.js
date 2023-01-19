migrate((db) => {
  const collection = new Collection({
    "id": "p0hybyp4qq9rtym",
    "created": "2023-01-19 13:25:38.737Z",
    "updated": "2023-01-19 13:25:38.737Z",
    "name": "narrator",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "83ij1qs5",
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
  const collection = dao.findCollectionByNameOrId("p0hybyp4qq9rtym");

  return dao.deleteCollection(collection);
})
