import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { setSubbedChannels } from "../redux/actions/channel.action";
import store from "../redux/store";

const subsCollection = collection(getFirestore(), "subscriptions");
const uid = () => (getAuth().currentUser ? getAuth().currentUser.uid : null);

let docObj = null;
let docRef = null;

onAuthStateChanged(getAuth(), async () => {
  docObj = uid() ? doc(subsCollection, uid()) : null;
  docRef = uid() ? await getDoc(docObj) : null;
  store.dispatch(setSubbedChannels());
});

onSnapshot(subsCollection, async (data) => {
  try {
    docRef = uid() ? await getDoc(docObj) : null;
    store.dispatch(setSubbedChannels());
  } catch (error) {
    console.error(error);
  }
});

export const getSubscriptions = async () => {
  const subList = docRef.data() ? [...docRef.data()?.subList] : [];
  return subList;
};

const saveSubscription = async (subList) => {
  await setDoc(docObj, { subList });
};

export const addSubscription = async (id) => {
  if (uid() === null) return [];
  const subList = await getSubscriptions();
  if (!subList.includes(id)) {
    subList.push(id);
    await saveSubscription(subList);
  }
};

export const removeSubscription = async (id) => {
  const initSubList = await getSubscriptions();
  if (initSubList.includes(id)) {
    const subList = initSubList.filter((subId) => subId !== id);
    await saveSubscription(subList);
  }
};
