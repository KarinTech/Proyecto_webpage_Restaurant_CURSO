import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
        const VINOS_URL = "https://sheetdb.io/api/v1/b8p9r56bjqs5y";
        //const JSON_LOCAL = "./json/comidas.json";
        /*INSTANCIAR EL CORE*/

        const CoreApp = {
            data: function () {
                return {
                    //data inicializacion
                    ListaVinos: null,
                    error: null,
                   }
                }
            },
methods: {
    vinosHandler:function()
    fetch(VINOS_URL)
    .then(res=res.json())
    .then()
}
        

        //PASARLO POR ARGUMENTO AL METODO createAPP --> <CORE></CORE>

        const app = createApp(CoreApp);

        /*MONTAR LA APP*/
        app.mount("#app");