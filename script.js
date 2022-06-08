

async function fetchData() {
    const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
    const record=await res.json();
    var archName, modelName, numOfProcessors;
    // document.getElementById("date").innerHTML=record.data[0].date;
    // document.getElementById("areaName").innerHTML=record.data[0].areaName;
    // document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
    // document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
    chrome.system.cpu.getInfo(function(info){
        console.log(info);
        archName = info.archName;
        console.log(archName);

        systemData=info;  
        document.getElementById("cpu").innerHTML=archName;

    });
    

}
fetchData();