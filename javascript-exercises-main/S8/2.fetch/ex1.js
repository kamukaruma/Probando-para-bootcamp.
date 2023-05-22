fetch ('https://api.agify.io?name=michael')

.then((response ) => {
    return response.json();
})
.then ((myJson) => {
    console.log(myJson);
});

const div$$ = document.createELment("div");
document.body.appendChild(div$$);

