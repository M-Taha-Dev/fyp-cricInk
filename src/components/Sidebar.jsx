import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const sidebarButtons = [
           {
            label: 'Dashboard',
            icon: DashboardIcon,
            link: ''
           },
           {
            label: 'Article Generation',
            icon: ArticleIcon,
            link: 'article'

           },
           {
            label: 'Image Generation',
            icon: AddPhotoAlternateIcon,
            link: 'image'

           },
           {
            label: 'Settings',
            icon: SettingsIcon,
            link: 'settings'

           },
           {
            label: 'User Profile',
            icon: PersonIcon,
            link: 'user'

           },
    ]

  return (
    <div className='w-full bg-black h-screen flex flex-col  text-white mr-2'>
        <div className='w-full h-1/6 mt-8 flex items-start justify-center'>
            <h1 className='text-3xl font-bold'>CricInk</h1>
        </div>
        <div>
            {sidebarButtons.map((btn) => (
                <Link to={btn.link} id={btn.label} className='flex cursor-pointer items-center justify-start w-auto p-3 m-1  rounded-lg  shadow-sm hover:bg-gray-800'>
                    <span className='mx-2'> {<btn.icon/>}</span>
                    <span className='mx-2'> {btn.label}</span>
                </Link>
            ))}
                


        </div>
    </div>
  )
}

export default Sidebar