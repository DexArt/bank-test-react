import {ChunkSplit} from "vite-plugin-chunk-split/dist/types";


export const chunkSplitConfig: ChunkSplit = {
    strategy: "default",
    customSplitting: {
        // `react` and `react-dom` will be bundled together in the `react-vendor` chunk (with their dependencies, such as object-assign)
        'vendor': ['react', 'react-dom'],
        // Any file that includes `utils` in src dir will be bundled in the `components` chunk
        /*'app': [/src\/app/],
        'config': [/src\/config/],
        'entities': [/src\/entities/],
        'features': [/src\/features/],
        'pages': [/src\/pages/],
        'shared': [/src\/shared/],
        'widgets': [/src\/widgets/],*/
    },
};

