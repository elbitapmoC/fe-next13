import Link from "next/link";

async function getPatients() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/cvs/records?page=1&perPage=10',
    { cache: 'no-store' }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function PharmacistsPage() {
  const patients = await getPatients();

  return (
    <div className="main">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-400">
          <thead className="text-xs uppercase bg-gray-900">
            <tr>
              <th scope="col" className="py-3 px-6">
                Prescription Name
              </th>
              <th scope="col" className="py-3 px-6">
                Prescription Progress
              </th>
              <th scope="col" className="py-3 px-6">
                Patient Profile
              </th>
            </tr>
          </thead>
          <tbody>
            {patients?.map(({ id, prescription, progress }) => {
              return (
                <tr key={id} className="border-b bg-gray-900 border-gray-700 hover:bg-gray-800">
                  <th scope="row" className="py-6 px-6 font-medium whitespace-nowrap text-white">
                    {prescription}
                  </th>
                  <td className="py-6 px-6 text-center">
                    {progress.toLowerCase() !== 'fulfilled' ?
                      <select className="bg-transparent">
                        <option value="pending">Pending</option>
                        <option value="wip">WIP (work in progress)</option>
                        <option value="fulfilled">Fulfilled</option>
                      </select> :
                      <p>{progress}</p>}
                  </td>
                  <td className="py-6 px-6 text-right">
                    <Link href={`/providers/${id}`} className="font-medium text-blue-500 hover:underline">see profile &#9432;</Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-8">Provider Page</p>
    </div>
  )
}