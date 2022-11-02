import Link from "next/link";
async function getPatients() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/cvs/records?page=1&perPage=10',
    { cache: 'no-store' }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function ProvidersPage() {
  const patients = await getPatients();

  return (
    <>
      <h1>Provider Page</h1>
      {patients?.map((patient) => {
        return <Patient key={patient.uid} patient={patient} />
      })}
    </>
  )
}

function Patient({ patient }: any) {
  const { uid, firstName, lastName, prescripton, strength, frequency, route, progress, unit, img } = patient || {}
  return (
    <Link href={`/providers/${uid}`}>
      <p>User Information</p>
      <img src={img} alt="avatar" />
      <span>{firstName} {lastName}</span>

      <p>Medical Information</p>
      <aside>{progress}</aside>
      <span>{prescripton} {strength} {unit}</span>
      <p>Take: {frequency}, via {route}</p>
    </Link>
  )
}
