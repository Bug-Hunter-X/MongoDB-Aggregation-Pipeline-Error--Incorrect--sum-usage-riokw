```javascript
// Corrected aggregation pipeline handling null values and ensuring numeric fields
db.collection.aggregate([
  {
    $match: { /* ... */ }
  },
  {
    $group: {
      _id: "$fieldName",
      total: { $sum: { $toDouble: { $ifNull: ["$anotherField", 0] } } }
    }
  },
  {
    $sort: { total: -1 }
  },
  {
    $limit: 10 }
])
```