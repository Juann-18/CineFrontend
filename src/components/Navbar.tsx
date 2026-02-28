import { Link } from 'react-router-dom'
import { Film, LayoutDashboard, User, LogOut  } from 'lucide-react'


const Navbar = () => {
  const user = true;
  const isAdmin = false;
  return (
    <>
      <nav className='sticky top-0 z-50 border-b border-gray-50 bg-regal-dark  backdrop-blur-xl'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 lg:px-12'>
          <Link to="/" className='flex items-center gap-2 '>
            <Film className=' h-7 w-7 text-regal-red' />
            <span className=' font-display 2xl text-amber-50 tracking-wider'>CINEMAX</span>
          </Link>

          {/*vista desde Desktop  */}
          <div className='hidden items-center gap-6 md:flex font-medium text-sm text-gray-500'>
            <Link to="/" className='hover:text-amber-50'>
              Cartelera
            </Link>

            {user && (
              <Link to="/" className='hover:text-amber-50'>
                Mis Reservas
              </Link>
            )}
            {isAdmin && (
              <Link to='/' className='hover:text-amber-50'>
                <span className='flex items-center gap-1'> <LayoutDashboard className='h-4 w-4' />Admin</span>
              </Link>
            )}

            {user?  (
              <div className='flex items-center gap-2'>
                <span className='flex items-center gap-1 text-amber-400'><User className='h-4 w-4'/>Carlos lopez</span>
                <button className='h-9 rounded-md px-3 text-amber-50 hover:text-gray-700 hover:bg-amber-400  ' >
                  <LogOut className='w-4 h-4'/>
                </button>
              </div>
            ) : (
              <div>hola</div>
            )}

          </div>

        </div>
      </nav>
    </>
  )
}

export default Navbar
