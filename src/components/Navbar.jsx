import React from 'react'
import { Bars3Icon} from '@heroicons/react/24/outline'


const navigation = [
    { name: 'Barış Özcan', href: '#' },
    { name: 'Gelecek Bilimde', href: '#' },
    { name: 'AkademikLink', href: '#' },
    { name: 'Evrim Ağacı', href: '#' },
    { name: 'Mesut Çevik', href: '#' },
    { name: 'Bebar Bilim', href: '#' },
    { name: 'Açık Beyin', href: '#' },
  ]

export default function Navbar() {

  return (
    <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-8" src="https://cdn-icons-png.flaticon.com/512/3728/3728434.png" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-indigo-600">
              Yayın Şeması <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
  )
}
