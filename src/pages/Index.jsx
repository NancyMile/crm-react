import { useLoaderData } from "react-router-dom";

export function loader() {
  const clients = [
    {
        id: 1,
        name: 'Jess',
        phone: 102013313,
        email: "Jess@sky.com",
        company: 'Sky Ltda'
    },
    {
        id: 2,
        name: 'Karen',
        phone: 138198313,
        email: "karen@sky.com",
        company: 'Sky Ltda'
    },
    {
        id: 3,
        name: 'Josue',
        phone: 31983913,
        email: "josue@sky.com",
        company: 'Sky Ltda'
    },
    {
        id: 4,
        name: 'Miguel',
        phone: 319381983,
        email: "miguel@sky.com",
        company: 'Sky Ltda'
    },
    {
        id: 5,
        name: 'Pedro',
        phone: 1398198938,
        email: "pedro@sky.com",
        company: 'Sky Ltda'
    },
];
  return  clients;
 }

const Index = () => {

  const clients = useLoaderData();
  //console.log(clients);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3 ">Manage Clients</p>
    </>
  )
}

export default Index