    async function formSend() {
    const formData = document.querySelector('form')
    formData.addEventListener ('submit', function formSend(InfosdeEvento){
        InfosdeEvento.preventDefault ();
     })
    const nameFull = document.getElementById("nameFull");
    const sexo = document.getElementById("sexo");
    const dateBirth = document.getElementById("dateBirth");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const estado = document.getElementById ("estado");
    try {
        const response = await fetch("https://nocodeform.io/f/652d8308f06cd8df6fd8238d", {
            method:"POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                nameFull: nameFull,
                sexo: sexo,
                dateBirth: dateBirth,
                email: email,
                phone: phone,
                estado: estado
            }),
        }) .then(result => {
            console.log("Sucess:", result);
            alert ('Parabéns seu intercâmbio já está próximo!')
        });
    } catch (error) {
        console.error("Error:", error)
    }
}