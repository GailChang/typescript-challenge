/**
 * 任務：實作一個函式 `parseUrl`，嘗試用 URL 方法，解析網址並 return 其組成部分。
 *
 * 範例：
 * parseUrl('https://www.example.com/path') 應該回傳 
 * {
 *   protocol: 'https:',
 *   hostname: 'www.example.com',
 *   path: '/path'
 * }
 *
 * @param url - 一個需要被解析的 URL
 * @returns - 回傳一個物件，包含 protocol、hostname 和 path
 */
interface UrlParts {
  protocol: string;
  hostname: string;
  path: string;
}

export function parseUrl(url: string): UrlParts {
   // 請在此處寫下你的程式碼
   let hname = url.substring(url.indexOf("//") + 2);
   hname = hname.substring(0, hname.indexOf("/"));
   let rtn: UrlParts = {
       protocol: url.substring(0, url.indexOf("//")),
       hostname: hname,
       path: url.substring(url.indexOf(hname) + hname.length),
   };
   return rtn;
}