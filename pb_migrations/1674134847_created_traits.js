migrate((db) => {
  const collection = new Collection({
    "id": "2z134vv4yuk75d8",
    "created": "2023-01-19 13:27:27.401Z",
    "updated": "2023-01-19 13:27:27.401Z",
    "name": "traits",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "n5njbgsu",
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
        "id": "labk8auw",
        "name": "negative",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("2z134vv4yuk75d8");

  return dao.deleteCollection(collection);
})
