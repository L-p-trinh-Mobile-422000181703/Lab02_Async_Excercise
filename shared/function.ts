export function simulateTask(
  time: number = 1000,
  message: string
): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}
