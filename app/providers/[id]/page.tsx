async function getPatient(patientId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/cvs/records/${patientId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function PatientPage({ patient }: any) {
  const note = await getPatient(patient.id);

  return (
    <div className="dark:hover:bg-gray-900 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-8">
      {/* <div className="flex flex-col items-center pb-10 pt-10">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={img}
          alt={`Picture of ${firstName} ${lastName}`}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {firstName} {lastName}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Prescripton Status: {progress}
        </span>
      </div> */}
      pppppp
    </div>
  );
}
