import { useLoaderData } from "react-router-dom";
import Client from "../components/Client";
import { getClients } from '../data/clients';

export function loader() {
  const clients = getClients()
  return clients
 }

const Index = () => {

  const clients = useLoaderData();
  //console.log(clients);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3 ">Manage Clients</p>

      {clients.length ? (
        //has clients
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white ">
            <tr>
              <th className="p-2">Client</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <Client
                key={client.id}
                client={client}
              />
            ))}
          </tbody>
        </table>

      ) : (
          <p>No clients</p>
      )}
    </>
  )
}

export default Index