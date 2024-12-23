# MongoDB Aggregation Pipeline Bug: Incorrect $sum Usage
This repository demonstrates a common error in MongoDB aggregation pipelines: using the `$sum` operator incorrectly within the `$group` stage. The error occurs when attempting to sum fields that are not numeric or might contain null values.

## Bug Description
The provided `bug.js` file contains an aggregation pipeline that aims to group documents, sum a field, sort the results, and limit the output to the top 10.  However, due to an error in how `$sum` handles non-numeric values, the results will be incorrect.

## Solution
The `bugSolution.js` file presents the corrected aggregation pipeline.  It uses `$ifNull` to handle potential null values and `$toDouble` to ensure that the fields being summed are numeric. This ensures that the `$sum` operator functions as expected, producing accurate results.
