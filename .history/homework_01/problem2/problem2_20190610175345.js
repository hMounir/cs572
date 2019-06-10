const {from} = rxjs;
const {flatMap} = rxjs.operators;

function firstBtn() {
    fetch('https://randomuser.me/api/')
            .then(value => value.json()).then(data => {
                data.results.map(obj => {
                    document.getElementById('name').innerText = "Name: " + obj.name.title + " " + obj.name.first + " " + obj.name.last;
                    document.getElementById('location').innerText = "Location: " + obj.location.street;
                });
            });
}

async function secondBtn() {
    try {
         // await response of fetch call
        let response = await fetch(`https://randomuser.me/api/`);
        // only proceed once promise is resolved
        let data = await response.json();
        // only proceed once second promise is resolved
        return data;
        let data = await fetch(`https://randomuser.me/api/`).then(value => value.json());
        data.results.map(obj => {
            document.getElementById('name').innerText = "Name: " + obj.name.title + " " + obj.name.first + " " + obj.name.last;
            document.getElementById('location').innerText = "Location: " + obj.location.street;
        });
    } catch (error) {
        console.log(error);
    }
}


function thirdBtn() {
    let url = fetch('https://randomuser.me/api/');

    from(url)
    .pipe(flatMap(value => value.json()))
    .subscribe(data => {
        data.results.map(obj => {
            document.getElementById('name').innerText = "Name: " + obj.name.title + " " + obj.name.first + " " + obj.name.last;
            document.getElementById('location').innerText = "Location: " + obj.location.street;
        });
    });
}