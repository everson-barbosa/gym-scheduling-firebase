import { doc, Firestore, getDoc } from "firebase/firestore";
import { Parameters } from "../../../../types/firebase/firestore/scheduling/Parameters";

interface GetSchedulingParametersProps {
  db: Firestore
}

export async function getSchedulingParameters({ db }: GetSchedulingParametersProps): Promise<Parameters> 
  {
  const docRef = doc(db, "scheduling", "parameters");

  const docSnap = await getDoc(docRef)

  if (!docSnap.exists) {
    throw new Error('Doc not found')
  }

  return docSnap.data() as Parameters
}