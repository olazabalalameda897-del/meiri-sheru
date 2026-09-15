import type {FoodKind,PetState,PetSpecies} from "./pet";
export const meals = ["早餐", "午餐", "晚餐", "加餐"] as const;
export type Meal = typeof meals[number];
export type Nutrients = {calories:number;protein:number;carbs:number;fat:number};
export type Entry = Nutrients & {id:string;date:string;meal:Meal;name:string;grams:number;source?:string;foodKind?:FoodKind};
export type Goals = Nutrients & {water:number;mode:string};
export type Journal = {entries:Entry[];waterEntries:{id:string;amount:number}[];goals:Goals;goalsSet:boolean;pet?:PetState;petSpecies?:PetSpecies};
export const defaultGoals:Goals={calories:2000,protein:120,carbs:245,fat:60,water:2000,mode:"保持状态"};
export const foods = [
 {name:"白米饭 · 熟",calories:130,protein:2.7,carbs:28.2,fat:0.28,source:"https://tools.myfooddata.com/recipe-nutrition-calculator/168878/100g/1/1",portion:150,hint:"约一小碗 · 150 g"},
 {name:"鸡胸肉 · 去皮烤熟",calories:165,protein:31,carbs:0,fat:3.55,source:"https://tools.myfooddata.com/recipe-nutrition-calculator/171477/100g/2/1",portion:100,hint:"按熟重记录"},
 {name:"鸡蛋 · 水煮去壳",calories:156,protein:12.6,carbs:1.12,fat:10.6,source:"https://tools.myfooddata.com/nutrition-facts/173424/wt3/1",portion:50,hint:"约一个大鸡蛋 · 50 g"},
 {name:"燕麦 · 干重",calories:389,protein:16.9,carbs:66.3,fat:6.9,source:"https://tools.myfooddata.com/nutrition-comparison/169705-169705/100g-wt1",portion:40,hint:"冲泡前称重"}
];
export function localDate(d=new Date()){return [d.getFullYear(),String(d.getMonth()+1).padStart(2,"0"),String(d.getDate()).padStart(2,"0")].join("-")}
export function shiftDate(date:string,offset:number){const d=new Date(date+"T12:00:00");d.setDate(d.getDate()+offset);return localDate(d)}
export function totalEntries(entries:Entry[]):Nutrients{return entries.reduce((a,e)=>({calories:a.calories+e.calories,protein:a.protein+e.protein,carbs:a.carbs+e.carbs,fat:a.fat+e.fat}),{calories:0,protein:0,carbs:0,fat:0})}
export function format(n:number,digits=0){return n.toLocaleString("zh-CN",{maximumFractionDigits:digits})}
export function scale(n:number,grams:number){return Math.round(n*grams)/100}
