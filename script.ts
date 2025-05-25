function task1(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve("Task 1 completed"), 1000);
  });
}

function task2(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve("Task 2 completed"), 1500);
  });
}

function task3(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve("Task 3 completed"), 500);
  });
}

async function runTasksSequentially() {
  const result1 = await task1();
  console.log(result1);

  const result2 = await task2();
  console.log(result2);

  const result3 = await task3();
  console.log(result3);
}

runTasksSequentially();

function processString(str: string): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(str.toUpperCase()), 1000);
  });
}

async function processAllStrings(arr: string[]) {
  const promises = arr.map(processString);
  const results = await Promise.all(promises);
  console.log(results);
}

processAllStrings(["hello", "world", "typescript"]);

function successTask(name: string): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${name} completed`), 1000);
  });
}

function failedTask(): Promise<string> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Error in the task")), 800);
  });
}

async function runWithErrorHandling() {
  try {
    const results = await Promise.all([
      successTask("Task 1"),
      failedTask(),
      successTask("Task 3")
    ]);
    console.log(results);
  } catch (error) {
    console.error("Error:", (error as Error).message);
  }
}

runWithErrorHandling();

function delay(ms: number): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => resolve(ms), ms);
  });
}

async function waitForAllDelays(times: number[]) {
  const promises = times.map(delay);
  const results = await Promise.all(promises);
  console.log("Completed:", results);
}

waitForAllDelays([1000, 500, 2000]); 
