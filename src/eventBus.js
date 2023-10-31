const subsrcibers = {};

function subscribe(eventName, callback) {
  if (!subsrcibers[eventName]) {
    subsrcibers[eventName] = [];
  }

  subsrcibers[eventName].push(callback);
}

function publish(eventName, data) {
  if (subsrcibers[eventName]) {
    subsrcibers[eventName].forEach((callback) => {
      callback(data);
    });
  }
}

export { subscribe, publish }