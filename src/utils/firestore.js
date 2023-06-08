import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";

const subsCollection = collection(getFirestore(), "subscriptions");
const uid = () => (getAuth().currentUser ? getAuth().currentUser.uid : null);

let docObj = null;
let docRef = null;

onAuthStateChanged(getAuth(), async () => {
  docObj = uid() ? doc(subsCollection, uid()) : null;
  console.log("auth change: " + uid());
});

onSnapshot(subsCollection, async (data) => {
  docRef = uid() ? await getDoc(docObj) : null;
  const changes = data.docChanges();
  console.log(changes[0].doc.data()?.subList);
});

export const getSubscriptions = async () => {
  const subList = docRef.data() ? [...docRef.data()?.subList] : [];
  return subList;
};

const saveSubscription = async (subList) => {
  await setDoc(docObj, { subList });
};

export const addSubscription = async (id) => {
  if (uid() === null) console.log("Problem");
  const subList = await getSubscriptions();
  if (!subList.includes(id)) subList.push(id);
  saveSubscription(subList);
};

export const removeSubscription = async (id) => {
  const initSubList = await getSubscriptions();
  if (initSubList.includes(id)) {
    const subList = initSubList.filter((subId) => subId !== id);
    saveSubscription(subList);
  } else {
    console.log("Meh");
  }
};
