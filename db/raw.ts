import {env} from "cloudflare:workers";
export function database(){if(!env.DB)throw new Error("Nutrition storage unavailable");return env.DB;}
