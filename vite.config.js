import {resolve} from 'node:path'

// console.log(resolve('pages'))

export default {
    server: {
        port: "2222",
    },
    css: {
        devSourcemap: true,
    },

    build: {
        emptyOutdir: true,
        rollupOptions: {
            input: {
                carrito: resolve ('pages/carrito.html'),
                nosotros: resolve ('pages/nosotros.html'),
                inicio: resolve ('index.html'),
                cds: resolve ('cds.html'),
                vinilos: resolve ('vinilos.html'),
                cassettes: resolve ('cassettes.html'),
                outlet: resolve ('outlet.html')
            }

        }
    }
}