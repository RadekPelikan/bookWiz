migrate((db) => {
  const collection = new Collection({
    "id": "kxib9vm2adl6la8",
    "created": "2023-01-19 13:23:40.369Z",
    "updated": "2023-01-19 13:23:40.369Z",
    "name": "literature_types",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dlxctvrw",
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
  const collection = dao.findCollectionByNameOrId("kxib9vm2adl6la8");

  return dao.deleteCollection(collection);
})
