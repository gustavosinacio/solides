export function delay(delayInMS = 1000) {
  return new Promise((resolve) => setTimeout(resolve, delayInMS));
}
