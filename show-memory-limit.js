'use strict'

const v8 = require('v8')

console.log(v8.getHeapStatistics())

const totalHeapSize = v8.getHeapStatistics().total_available_size

const totalHeapSizeInGb = (totalHeapSize / 1024 / 1024 / 1024).toFixed(2)

console.log(`Total heap size: ${totalHeapSizeInGb} GB`)