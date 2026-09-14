import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Fuel Daily · 每日健身营养", description:"记录每天的饮食、饮水与营养摄入，让健身目标清晰可见。",icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}