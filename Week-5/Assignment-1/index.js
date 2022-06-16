async function asyncAwait() {
  const task1 = await dotask1AA();
  console.log(task1);
  const task2 = await doTask2AA();
  console.log(task2);
  const task3 = await doTask3AA();
  console.log(task3);
}

async function dotask1AA() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const task1AA = await response.json();
  return task1AA;
}

async function doTask2AA() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const task2AA = await response.json();
  return task2AA;
}

async function doTask3AA() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const task3AA = await response.json();
  return task3AA;
}

// Using Generators:

function generatorAsync() {
  const task1 = doTask1();
  task1.next().value.then((resp) => {
    const task2 = doTask2();
    task2.next().value.then((resp) => {
      const task3 = doTask3();
      task3.next().value.then((resp) => console.log(resp));
      console.log(resp);
    });
    console.log(resp);
  });
}

function* doTask1() {
  yield fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((resp) => resp)
    .catch((err) => {
      console.log(`${err} errored`);
    })
    .finally(() => {
      console.log("Finally task1 has been printed");
    });
}

function* doTask2() {
  yield fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((resp) => resp)
    .catch((err) => {
      console.log(`${err} errored`);
    })
    .finally(() => {
      console.log("Finally task2 has been printed");
    });
}

function* doTask3() {
  yield fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((resp) => resp)
    .catch((err) => {
      console.log(`${err} errored`);
    })
    .finally(() => {
      console.log("Finally task3 has been printed");
    });
}

generatorAsync();
