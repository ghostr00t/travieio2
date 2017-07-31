var dollars = 0;

function dollarClick(number){
    dollars = dollars + number;
    document.getElementById("dollars").innerHTML = prettify(dollars);
};

var offshoreDev = 0;

function buyOffshoreDev(){
    var offshoreDevCost = Math.floor(10 * Math.pow(1.1,offshoreDev));
    if(dollars >= offshoreDevCost){
        offshoreDev = offshoreDev + 1;
        dollars = dollars - offshoreDevCost;
        document.getElementById('offshoreDev').innerHTML = offshoreDev;  
        document.getElementById('dollars').innerHTML = dollars;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,offshoreDev));       
    document.getElementById('offshoreDevCost').innerHTML = nextCost;  
};

var frontendDev = 0;

function buyFrontendDev(){
    var frontendDevCost = Math.floor(15 * Math.pow(1.1,frontendDev));
    if(dollars >= frontendDevCost){
        frontendDev = frontendDev + 1;
        dollars = dollars - frontendDevCost;
        document.getElementById('frontendDev').innerHTML = frontendDev;  
        document.getElementById('dollars').innerHTML = dollars;  
    };
    var nextCost = Math.floor(15 * Math.pow(1.1,frontendDev));       
    document.getElementById('frontendDevCost').innerHTML = nextCost;  
};

var backendDev = 0;

function buyBackendDev(){
    var backendDevCost = Math.floor(20 * Math.pow(1.1,backendDev));
    if(dollars >= backendDevCost){
        backendDev = backendDev + 1;
        dollars = dollars - backendDevCost;
        document.getElementById('backendDev').innerHTML = backendDev;  
        document.getElementById('dollars').innerHTML = dollars;  
    };
    var nextCost = Math.floor(20 * Math.pow(1.1,backendDev));       
    document.getElementById('backendDevCost').innerHTML = nextCost;  
};

var projectManager = 0;

function buyProjectManager(){
    var projectManagerCost = Math.floor(20 * Math.pow(1.1,projectManager));
    if(dollars >= projectManagerCost){
        projectManager = projectManager + 1;
        dollars = dollars - projectManagerCost;
        document.getElementById('projectManager').innerHTML = projectManager;  
        document.getElementById('dollars').innerHTML = dollars;  
    };
    var nextCost = Math.floor(50 * Math.pow(1.1,projectManager));       
    document.getElementById('projectManagerCost').innerHTML = nextCost;  
};

function save(){
    var save = {
    dollars: dollars,
    offshoreDev: offshoreDev,

    backendDev: backendDev,
    projectManager: projectManager,
    frontendDev: frontendDev,    
    prestige: prestige
}
    localStorage.setItem("save",JSON.stringify(save));
    ga('send', 'event', 'My Game', 'Save');
}

function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.dollars !== "undefined") dollars = savegame.dollars;
    if (typeof savegame.offshoreDev !== "undefined") offshoreDev = savegame.offshoreDev;
    if (typeof savegame.frontendDev !== "undefined") frontendDev = savegame.frontendDev;
    if (typeof savegame.backendDev !== "undefined") backendDev = savegame.backendDev;
    if (typeof savegame.projectManager !== "undefined") projectManager = savegame.projectManager;
}

function removeSave(){
    localStorage.removeItem("save")
}

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}


window.setInterval(function(){
	
    dollarClick(offshoreDev);
    dollarClick(frontendDev);
    dollarClick(backendDev);
    dollarClick(projectManager);
	
}, 1000);