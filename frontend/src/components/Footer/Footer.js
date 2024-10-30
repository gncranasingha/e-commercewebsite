import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { IconButton } from '@mui/material';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const Footer = () => {
  return (
    <footer className=" fixed bottom-0 left-0 z-[100] shadow-md w-full px-5 py-2 bg-my-background flex items-center justify-between" >
      <FooterIcon Icon={HomeOutlinedIcon} name="Home"/>
      <FooterIcon Icon={AppsOutlinedIcon} name="Category" />
      <FooterIcon Icon={AccountCircleOutlinedIcon} name="Profile" />
      {/* <IconButton>
        <div>
          <AccountCircleOutlinedIcon/>
          <p>Profile</p>
        </div>
      </IconButton> */}
    </footer>
  )
}

export default Footer


const FooterIcon = ({Icon,name}) => (
  <IconButton sx={{padding:"4px",borderRadius:"5px"}} >
    <div className=' text-gray-700 hover:text-[#c82196] transition-all duration-300 ' >

    <Icon/>
    <p className='text-xs' >{name}</p>
    </div>
  </IconButton>
)