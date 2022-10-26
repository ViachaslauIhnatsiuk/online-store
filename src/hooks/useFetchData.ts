import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { ICard } from '../types/Card';

function useFetchData() {
  const [catalog, setCatalog] = useState<ICard[]>([]);

  useEffect(() => {
    getDocs(collection(db, "database"))
      .then(response => {
        const watches = response.docs.map(doc => ({
          data: doc.data(),
          id: doc.id
        }))
        setCatalog(watches[0].data.watches)
      })
      .catch(error => console.log(error.message))
  }, []);

  return { catalog, setCatalog };
};


export { useFetchData };