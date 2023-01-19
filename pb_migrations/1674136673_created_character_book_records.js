migrate((db) => {
  const collection = new Collection({
    "id": "5viodxnreri1d3i",
    "created": "2023-01-19 13:57:53.144Z",
    "updated": "2023-01-19 13:57:53.144Z",
    "name": "character_book_records",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z6rsjbab",
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
        "id": "tc967mbr",
        "name": "bookId",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "e34n0zr9gk8xpxn",
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
  const collection = dao.findCollectionByNameOrId("5viodxnreri1d3i");

  return dao.deleteCollection(collection);
})
