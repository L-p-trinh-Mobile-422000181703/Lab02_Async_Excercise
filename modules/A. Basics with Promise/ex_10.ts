// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).

import { simulateTask } from "../../shared/function";

simulateTask(1000, "Hello")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done");
  });
