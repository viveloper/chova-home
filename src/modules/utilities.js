function parseObjectId(objectId) {
  let ctr = 0;
  const epoch = parseInt(objectId.slice(ctr, (ctr += 8)), 16);
  const machine = parseInt(objectId.slice(ctr, (ctr += 6)), 16);
  const process = parseInt(objectId.slice(ctr, (ctr += 4)), 16);
  const counter = parseInt(objectId.slice(ctr, (ctr += 6)), 16);
  return {
    epoch: epoch,
    machine: machine,
    process: process,
    counter: counter
  };
}

export { parseObjectId };