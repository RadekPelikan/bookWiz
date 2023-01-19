migrate((db) => {
  const collection = new Collection({
    "id": "hp9xdtin610e1j3",
    "created": "2023-01-19 13:23:24.941Z",
    "updated": "2023-01-19 13:23:24.941Z",
    "name": "forms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "urlanhlb",
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
  const collection = dao.findCollectionByNameOrId("hp9xdtin610e1j3");

  return dao.deleteCollection(collection);
})
