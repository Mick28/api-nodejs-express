import { db } from '../providers/firebase.js';
import { collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const COLLECTION = 'products';

export async function getAll() {
  const snap = await getDocs(collection(db, COLLECTION));
  const items = [];
  snap.forEach(d => items.push({ id: d.id, ...d.data() }));
  return items;
}

export async function getById(id) {
  const ref = doc(db, COLLECTION, id);
  const d = await getDoc(ref);
  return d.exists() ? { id: d.id, ...d.data() } : null;
}

export async function create(data) {
  const ref = await addDoc(collection(db, COLLECTION), {
    title: data.title,
    price: Number(data.price),
    category: data.category,
    description: data.description || '',
    image: data.image || '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });
  return { id: ref.id, ...(await getById(ref.id)) };
}

export async function update(id, data) {
  const ref = doc(db, COLLECTION, id);
  const current = await getById(id);
  if (!current) return null;
  await updateDoc(ref, {
    ...data,
    updatedAt: new Date().toISOString()
  });
  return getById(id);
}

export async function remove(id) {
  const current = await getById(id);
  if (!current) return null;
  await deleteDoc(doc(db, COLLECTION, id));
  return true;
}
