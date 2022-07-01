// import all the JSON files
const azureInv = require('./jsonFiles/azureInventory.json');
const googleInv = require('./jsonFiles/googleInventory.json')

// TEMP! delete after WS1 transition
const ws1Inv = require('./jsonFiles/ws1Inventory.json');

// vessel for comparing/dumping array items
let joinList = [];
// array for holding array items that have been changed.
let changeList = [];
let googleWindowsList = [];

const generateGoogleWinList = (a) => {
    for (i=0; i < a.length; i++) {
        let device = a[i];
        if (device['Operating System'] == 'Windows') {
            googleWindowsList.push(device);
        };
    };
};

const printAzureDeviceAndOwner = (a) => {
    for (let i = 0; i < a.length; i++) {
       console.log(a[i].displayName);
       console.log(a[i].objectId);
       console.log(a[i].userNames);
    }
};

generateGoogleWinList(googleInv);
console.log(googleWindowsList.length);
console.log(azureInv.length);


/*let firstGoogle = googleInv[0];
console.log(firstGoogle);
console.log(azureInv[0]);*/

/*console.log('Azure Inventory: ' + azureInv)
console.log('WS1 Inventory: ' + ws1Inv);*/