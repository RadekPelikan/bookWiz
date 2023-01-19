migrate((db) => {
  const collection = new Collection({
    "id": "zi3lylkta2g88fh",
    "created": "2023-01-19 13:29:29.624Z",
    "updated": "2023-01-19 13:29:29.624Z",
    "name": "character_trait_records",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6mirg3oj",
        "name": "characterId",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "te56po0gjv61o7s",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "awkcfzjf",
        "name": "traitId",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "2z134vv4yuk75d8",
          "cascadeDelete": false
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
  const collection = dao.findCollectionByNameOrId("zi3lylkta2g88fh");

  return dao.deleteCollection(collection);
})
