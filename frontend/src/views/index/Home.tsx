import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1 className="block font-bold text-3xl mb-5">Main Page</h1>
        <button className="block w-1/3 mx-auto my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => navigate('/employees')}>Employee List</button>
        <button className="block w-1/3 mx-auto my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => navigate('/projects')}>Project List</button>
        <button className="block w-1/3 mx-auto my-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={() => navigate('/companies')}>Company List</button>
      </div>
    </>
  )
}

export default Home
