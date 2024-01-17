let votes = [];
let chart;





// Funksjon for å registrere stemme

function vote() {
     // Henter elementet for partivalg fra HTML
    const partySelect = document.getElementById("partySelect");
    const selectedParty = partySelect.value;



 // Legger til valgt parti i stemme-arrayet
    votes.push(selectedParty);


     // Oppdaterer resultatene og diagrammet
    updateResults();
}




// Funksjon for å oppdatere resultatene og diagrammet
function updateResults() {
    const voteResults = document.getElementById("voteResults");

    if (chart) {
        chart.destroy();
    }


    // Oppretter et objekt for å telle antall stemmer for hvert parti
    const partyCounts = {};
    votes.forEach(party => {
        if (!partyCounts[party]) {
            partyCounts[party] = 1
        } else {
            partyCounts[party] ++;
        }
    });





     // Henter konteksten for canvas-elementet fra HTML
const ctx = document.getElementById("chart").getContext("2d");
    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: Object.keys(partyCounts),
            datasets: [{
                label: "Antall stemmer",
                data: Object.values(partyCounts),
                 // Definerer farger for stolpene
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',  
                    'rgba(49, 233, 129, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(5, 59, 6, 0.2)',
                ],
                // Definerer farger for stolpeområdene
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(49, 233, 129, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(5, 59, 6, 1)',
                ],
                borderWidth: 3
                
                
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
     // Legger til diagrammet i HTML-dokumentet
    voteResults.appendChild(ctx.canvas);
}