//Etsa función de extrajo de GifGrid
//Se encarga de hacer la petición http y devolver el contenido.
export const getGifs = async (category)=>
    {
        const url=`http://api.giphy.com/v1/gifs/search?api_key=QaYllLgOhjES5eWjofPuHqhKiEaAbhGu&q=${encodeURI(category)}&limit=10`;
        const resp = await fetch(url);
        const {data}= await resp.json();
        //console.log(data);
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        });
        
        //El signo de interrogación sirve para que consulte la url solo si vienen imagenes
        //setImages(gifs); Esto establecia los datos el useState para renderizar pero como
        //se separo entonces solo se devolerá el gifs
        return gifs;
    }
