

function App() {

  return (
    <section>
      <navbar className="flex justify-between px-28 w-screen items-center py-4 bg-neutral-400 shadow-md">
        <navbrand className="text-2xl flex items-center gap-3">
          <img src="/src/assets/logo.svg"/>DEV.</navbrand>
        <navmenu>
          <ul className='flex space-x-16'>
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
          </ul>
        </navmenu>
      </navbar>
    </section>
  )
}

export default App
