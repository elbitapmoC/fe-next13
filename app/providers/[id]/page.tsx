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

export default async function PatientPage({ params }: any) {
  const patient = await getPatient(params.id);
  const { dob,
    firstName,
    frequency,
    id,
    img,
    lastName,
    prescription,
    progress,
    route,
    strength,
    unit } = patient;

  return (
    <div className="main">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="hover:bg-gray-900 w-full max-w-sm bg-white rounded-lg border shadow-md bg-gray-800 border-gray-700">
          <div className="flex flex-col items-center p-10">
            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              src={img}
              alt={`Picture of ${firstName} ${lastName}`}
            />
            <h5 className="mb-1 text-xl font-medium text-white">
              {firstName} {lastName}
            </h5>
            <span className="text-sm text-gray-400">
              Prescripton Details: {progress}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

