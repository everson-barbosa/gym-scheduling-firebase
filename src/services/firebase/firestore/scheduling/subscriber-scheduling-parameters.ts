import { doc, Firestore, onSnapshot } from "firebase/firestore";
import { Parameters } from "../../../../types/firebase/firestore/scheduling/Parameters";


interface SubscriberSchedulingParametersProps {
  db: Firestore
  onSnapshotData: (data: Parameters) => void
}

export function subscriberSchedulingParameters({ db, onSnapshotData }: SubscriberSchedulingParametersProps) {
  const docRef = doc(db, "scheduling", "parameters");

  const unsub = onSnapshot(docRef, (doc => {
    const data = doc.data() as Parameters

    onSnapshotData(data)
  }))
  
  return unsub
}