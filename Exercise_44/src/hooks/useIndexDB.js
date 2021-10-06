import { useEffect, useState } from "react";
require("fake-indexeddb/auto");

const useIndexDB = (key, defaultValue = "") => {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    let request = indexedDB.open("newDB", 1);

    request.onupgradeneeded = () => {
      let db = request.result;
      db.createObjectStore("items");
    };

    request.onerror = () => {
      console.log("Error");
    };

    request.onsuccess = () => {
      let db = request.result;
      let tx = db.transaction(["items"], "readwrite");
      let store = tx.objectStore("items");
      store.put(state, key);

      tx.oncomplete = () => {
        db.close();
      };
    };
  }, [key, state]);

  return [state, setState];
};

export default useIndexDB;
