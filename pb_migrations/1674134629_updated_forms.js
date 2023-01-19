migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hp9xdtin610e1j3")

  collection.name = "literature_forms"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hp9xdtin610e1j3")

  collection.name = "forms"

  return dao.saveCollection(collection)
})
