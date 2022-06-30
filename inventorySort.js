// import all the JSON files
const azureInv = require('./jsonFiles/azureInventory.json');
const googleInv = require('./jsonFiles/googleInventory.json')

// TEMP! delete after WS1 transition
const ws1Inv = require('./jsonFiles/ws1Inventory.json');

// vessel for truncated Azure objects array
let azObjList = [];
// array for holding array items that have been changed.
let changeList = [];

const printAzureDeviceAndOwner = (a) => {
    for (let i = 0; i < a.length; i++) {
       console.log(a[i].displayName);
       console.log(a[i].objectId);
       console.log(a[i].userNames);
    }
};


printAzureDeviceAndOwner(azureInv);
console.log(azObjList);

/*console.log('Azure Inventory: ' + azureInv)
console.log('WS1 Inventory: ' + ws1Inv);*/