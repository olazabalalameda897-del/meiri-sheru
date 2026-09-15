export const foodKinds = ["nourishing", "regular", "treat"] as const;
export type FoodKind = typeof foodKinds[number];
export const foodKindInfo: Record<FoodKind, {label:string;short:string;hint:string;feedback:string}> = {
  nourishing: {label:"营养餐",short:"营养餐",hint:"蔬菜、全谷物、优质蛋白等",feedback:"好吃！我又有精神啦！"},
  regular: {label:"日常餐",short:"日常餐",hint:"普通正餐，或暂不分类",feedback:"和你一起吃饭，真好。"},
  treat: {label:"甜饮 / 油炸",short:"甜饮油炸",hint:"甜饮、甜点、油炸零食等",feedback:"肚肚圆了一点，下一餐清爽些吧～"},
};
export type PetState = {feedCount:number;xp:number;level:number;levelProgress:number;vitality:number;roundness:number;mood:"happy"|"calm"|"full";appearance:"idle"|"happy"|"round";nourishingCount:number;treatCount:number};
export type PetReaction = {id:string;kind:FoodKind|"water"};
export function derivePetState(events:{foodKind:string}[],feedCount:number):PetState {
  let roundness=0,nourishingCount=0,treatCount=0;
  for(const e of events){
    if(e.foodKind==="nourishing"){nourishingCount++;roundness=Math.max(0,roundness-12)}
    else if(e.foodKind==="treat"){treatCount++;roundness=Math.min(100,roundness+24)}
    else roundness=Math.max(0,roundness-2);
  }
  const last=events.at(-1)?.foodKind;
  const mood=last==="nourishing"?"happy":last==="treat"?"full":"calm";
  return {feedCount,xp:feedCount*10,level:1+Math.floor(feedCount/5),levelProgress:feedCount%5*20,vitality:Math.max(20,Math.min(100,70+nourishingCount*8-treatCount*12)),roundness,mood,appearance:roundness>=24?"round":mood==="happy"?"happy":"idle",nourishingCount,treatCount};
}
export const initialPet=derivePetState([],0);

export const petSpecies = ["capybara", "puppy", "kitten"] as const;
export type PetSpecies = typeof petSpecies[number];
export const pets: Record<PetSpecies,{name:string;label:string;image:string;greeting:string;pat:string}> = {
 capybara:{name:"糯米",label:"小水豚",image:"/pets/nuomi-states.png",greeting:"你好呀！我是糯米，今天吃什么？",pat:"嘿嘿，被你摸摸，开心加倍！"},
 puppy:{name:"豆包",label:"小狗",image:"/pets/doubao-states.png",greeting:"汪！我是豆包，陪你吃饭也陪你长大。",pat:"汪呜～最喜欢你摸摸头啦！"},
 kitten:{name:"布丁",label:"小猫",image:"/pets/pudding-states.png",greeting:"喵～我是布丁，今天的小碗装了什么？",pat:"呼噜呼噜…还要再摸摸～"},
};
