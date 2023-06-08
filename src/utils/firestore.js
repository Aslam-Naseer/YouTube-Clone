import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

const subsCollection = collection(getFirestore(), "subscriptions");
const uid = () => (getAuth().currentUser ? getAuth().currentUser.uid : null);

let docObj = null;
onAuthStateChanged(
  getAuth(),
  () => (docObj = uid() ? doc(subsCollection, uid()) : null)
);

export const getSubscriptions = async () => {
  const docRef = await getDoc(docObj);
  console.log(docRef.data());
  const subList = [...docRef.data().subList];
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
  const subList = initSubList.filter((subId) => subId !== id);
  saveSubscription(subList);
};
