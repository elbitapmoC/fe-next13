import Link from "next/link";

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
  const {
    firstName,
    frequency,
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
          <div className="flex flex-col items-center pt-10 pb-10 pl-16 pr-16">
            <img
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              src={img}
              alt={`Picture of ${firstName} ${lastName}`}
            />
            <h5 className="mb-1 text-xl font-medium text-white">
              {firstName} {lastName}
            </h5>
            {progress}
            <span className="text-sm text-gray-400 mt-4">
              <ul>
                <li><span>{strength} {unit} of {prescription}</span></li>
                <li><span>{frequency}</span></li>
                <li><span>{route}</span></li>
              </ul>
            </span>
          </div>
        </div>
      </div>
      <Link href="/providers" className="mt-8"><button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Go back</button>
      </Link>
    </div>
  );
}

