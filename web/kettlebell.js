function price() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            var valasz = JSON.parse(this.responseText);
            document.getElementById("tervar").innerText = valasz.edzoterv;
            document.getElementById("szazalek").innerText = valasz.kedvezmeny;
            document.getElementById("kiloar").innerText = valasz.kiloar;
    console.log(this.responseText);
  }
    });

    xhr.open("GET", "http://localhost:8080/api/arak");

    xhr.send();
}


function gyakorlatGeneralas() {
    var ismetles = Math.floor(Math.random() * 30)+1;
    gyakorlatok = ["Swing", "Magasra húzás", "Serleg guggolás", "Szélmalom", "Török felállás"];
    var gyakorlat_neve = gyakorlatok[Math.floor(Math.random() * gyakorlatok.length)];
    document.getElementById("generaltGyakorlat").innerText = ismetles + " db " + gyakorlat_neve; 
}

price();