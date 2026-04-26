
export default function config() {
  const isHttps = typeof window !== 'undefined' ? (window.location.protocol === "https:") : true;
  const host = typeof window !== 'undefined' ? window.location.host : (process.env.HOST ?? "localhost:3000");
  const prefixHttp = (isHttps ? "https" : "http")+"://";
  const prefixWs = (isHttps ? "wss" : "ws")+"://";

  return {
    "apiUrl": prefixHttp+(process.env.NEXT_PUBLIC_API_URL ?? host),
    "websocketUrl": prefixWs+(process.env.NEXT_PUBLIC_WS_HOST ?? host)+'/wg',
  }
}