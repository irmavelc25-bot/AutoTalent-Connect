async function guardarCandidato(datos){

    try{

        await db.collection("candidatos").add(datos);

        console.log("Candidato guardado correctamente");

    }catch(error){

        console.log("Error al guardar candidato:", error);

    }

}