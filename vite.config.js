import { defineConfig } from "vite"; //definir la configuración de vite
import react from "@vitejs/plugin-react";

//Configuración de vite para que soporte React, ya que no lo soporta por si solo
export default defineConfig({
    plugins: [react()],
    test: {
        //entorno en el que se va a ejecutar es happy-dom, que emula un DOM (navegador) y la interacción de un usuario
        environment: "happy-dom",
    },
});
