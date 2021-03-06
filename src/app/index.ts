import * as services from './services';
import * as uiComponents from './ui';
import * as containers from './containers';
import { App } from './app';
export { App } from './app';
export { routes } from './routes'

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

// export all services, simplifies use in main.ts
export const providers = [
    ...mapValuesToArray(services)
]

// export all components, simplifies use in main.ts
export const allComponents = [
        ...mapValuesToArray(uiComponents)
    ]
    .concat([...mapValuesToArray(containers)])
    .concat([App])
