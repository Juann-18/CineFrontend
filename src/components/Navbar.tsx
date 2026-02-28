import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Film, LayoutDashboard, User, LogOut, Menu, X  } from 'lucide-react'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = false;
  const isAdmin = false;
  return (
    <>
      <nav className='sticky top-0 z-50 border-b border-gray-600 bg-regal-dark  backdrop-blur-xl'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 lg:px-12'>
          <Link to="/" className='flex items-center gap-2 '>
            <Film className=' h-7 w-7 text-regal-red' />
            <span className=' font-display 2xl text-2xl text-amber-50 tracking-wider'>CINEMAX</span>
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
              <button className='flex items-center gap-1 justify-center h-9 rounded-md px-4 bg-regal-red hover:bg-regal-red/80'>
                <span className='font-medium text-sm text-amber-50'>Iniciar Sesion</span>
              </button>
            )}
          </div>

          <button className='md:hidden text-amber-50' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className='h-6 w-6 '/> : <Menu className='h-6 w-6' />}
          </button>

        </div>
        {/*vista desde mobile */}
        {menuOpen && (
          <div className='border-t border-gray-600 bg-regal-dark gap-3 p-4 flex flex-col md:hidden text-sm text-amber-50 font-medium'>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Cartelera
            </Link>
              {user && (
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Mis Reservas
                </Link>
              )}
              {isAdmin && (
                <Link to='/' onClick={() => setMenuOpen(false)} className='hover:text-amber-50'>
                  <span className='flex items-center gap-1'>
                    <LayoutDashboard className='h-4 w-4' />Admin
                  </span>
                </Link>
              )}
              {user ? (
                <button className='h-9 rounded-md flex items-center justify-center px-3 hover:bg-amber-400 hover:text-gray-700  '>Cerrar Sesión</button>
              ): <button className='h-9 rounded-md flex items-center justify-center px-3 bg-regal-red hover:bg-regal-red/90'>Inicia Sesión</button>}
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
