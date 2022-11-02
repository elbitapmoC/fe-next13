async function getPatient(patientId: string) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/cvs/records/${patientId}`, {
    next: { revalidate: 10 }
  })
  const data = await res.json();
  return data;
}

export default async function PatientPage({ params }: any) {
  const patient = await getPatient(params.id)

  return (
    <>
      <h1>Patient</h1>
    </>
  )
}