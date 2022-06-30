var azureInv = require('./azureInventory.json');
var ws1Inv = require('./ws1Inventory.json');

azObjList = [];

//turn Azure inventory items into objects, insert into azObjList
const createAzObj = (device) => {
    const azObj = {
        deviceName: device.displayName,
        azureRegistration: device.profileType,
        id: device.objectId,
        owner: device.userNames
    }
    azObjList.push(azObj);
};

for (let i = 0; i < azureInv.length; i++) {
    createAzObj(azureInv[i]);
};

console.log(azObjList);

/*console.log('Azure Inventory: ' + azureInv)
console.log('WS1 Inventory: ' + ws1Inv);*/