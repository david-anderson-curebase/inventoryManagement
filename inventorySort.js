// import all the JSON files
const azureInv = require('./jsonFiles/azureInventory.json');
const googleInv = require('./jsonFiles/googleInventory.json')

// TEMP! delete after WS1 transition
const ws1Inv = require('./jsonFiles/ws1Inventory.json');

// array for holding items that match.
let matchedList = [];

// array for holding items that don't match.
let unmatchedList = [];

// for holding all Windows devices on Google Sheets
let googleWindowsList = [];


// returns list of Windows devices logged on Google Sheets
const generateGoogleWinList = (a) => {
    for (let i=0; i < a.length; i++) {
        let device = a[i];
        if (device['Operating System'] == 'Windows') {
            googleWindowsList.push(device);
        };
    };
};

// compares Google Sheet Windows devices to Azure devices.
let compareAzureGoogle = (azList, sheetsList) => {
    for (let i=0; i < azList.length; i++) {
        let compArray = [];
        let azDevice = azureInv[i];
        for (let i=0; i < sheetsList.length; i++) {
            let sheetsDevice = sheetsList[i];
            if (sheetsDevice['Device Name'] == azDevice.displayName) {
                compArray.push(azDevice);
                compArray.push(sheetsDevice);
            }
        }
        if (compArray.length > 0) {
            matchedList.push(compArray[0]);
        } else {
            unmatchedList.push(azDevice);
        }
    }
}

generateGoogleWinList(googleInv);
compareAzureGoogle(azureInv, googleWindowsList);
console.log('Matched Items: ' + matchedList.length);
console.log('Unmatched Items: ' + unmatchedList.length);
console.log(unmatchedList)