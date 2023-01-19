migrate((db) => {
  const collection = new Collection({
    "id": "e34n0zr9gk8xpxn",
    "created": "2023-01-19 13:56:17.958Z",
    "updated": "2023-01-19 13:56:17.958Z",
    "name": "books",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jntiyi1r",
        "name": "name",
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
        "id": "gdgughog",
        "name": "published",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "i9x1zqmt",
        "name": "theme",
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
        "id": "uagzjwfx",
        "name": "spacetime",
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
        "id": "sppgyjrz",
        "name": "composition_structure",
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
        "id": "dgesj2i6",
        "name": "formId",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "hp9xdtin610e1j3",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "q39nrgbn",
        "name": "typeId",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "kxib9vm2adl6la8",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "icvvgaj3",
        "name": "genreId",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "yytd4uhlul4mq5a",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "vsm4vjmo",
        "name": "narratorId",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "p0hybyp4qq9rtym",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "hxt3tzrq",
        "name": "narrator_description",
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
        "id": "c3bwtgfn",
        "name": "speak_types",
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
        "id": "sdlecwbf",
        "name": "literature_context",
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
        "id": "r4gvlcqv",
        "name": "culture_context",
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
  const collection = dao.findCollectionByNameOrId("e34n0zr9gk8xpxn");

  return dao.deleteCollection(collection);
})
