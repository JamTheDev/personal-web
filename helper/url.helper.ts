import { env } from "process";

const productionUrl = env.CMS_URL!;
const developmentUrl = env.DEV_CMS_URL!

const cmsUrl = env.NODE_ENV == 'production' ? productionUrl : developmentUrl;

export default cmsUrl