import { useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";



const UserProfile=()=>{
    const [isOpen, setIsOpen] = useState(false);
    const [userData,setUserData]=useState(null)
    const[showName,setshowname]=useState(false)
    let [accessToken,setAccesstoken]=useState(window.localStorage.getItem('token'))
    let [userImage,setuserImage]=useState()
   
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 
 
  
  const LogOut=()=>{
    alert("ok")
    window.localStorage.removeItem('token')
  }
  
    const fetchUserData = async () => {
     
      try {
        
        const response = await fetch('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
       // const data = await response.json();
        setUserData(await response.json());
        console.log(userData)
       
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    useEffect(()=>{
      if (accessToken) {
        fetchUserData();
      }
    },[])
    
 
   try{
    
    if(userData){
      var userName=userData.display_name
      sessionStorage.setItem('userInfo',JSON.stringify(userData))
       userImage =JSON.parse(sessionStorage.getItem('userInfo'))
       userImage=userImage.images[0].url
   }else{
       userImage='profile.png'
   }
   
  }
   catch(e){
  console.log(e)
   }
  
  
  
 
    return(<>

<div className="relative ">
      <button onClick={toggleDropdown} className=" focus:outline-none" onMouseEnter={()=>setshowname(true)}
          onMouseLeave={()=>setshowname(false)}>
        <span className="grid-flex flex">
          
      <img
          src={userImage}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
          onError={(e)=>e.target.src="profile.png"}
          />
       { showName?<label className="bg-stone-800 absolute right-0 z-10 pt-3 mt-10 pb-3 w-72"><h3>{userName}</h3></label>:null}
          </span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute bg-stone-800 right-0 mt-2 w-80 rounded z-10">
          <div className="absolute w-72 py-4 left-5 bg-stone-800 pb-4 space-y-10 space-x-2 p-3 text-2xl ">
            <button className="text-white ">Account</button> <Icon name='external alternate' className=" pl-28"/>  <br></br>
            <button className="text-white">Profile</button>   <br></br>
            <button className="text-white">Upgrade Premium</button> <Icon name='external alternate' className=" "/>  <br></br>
            <button className="text-white">Support</button><Icon name='external alternate' className=" pl-28"/>   <br></br>
            <button className="text-white">Download</button>  <Icon name='external alternate' className=" pl-20 ml-1"/> <br></br>
            <button className="text-white">Setting</button>  <br></br>
            <button className="text-white" onClick={LogOut}>Log Out</button>  
           
          </div>
        </div>
      )}
    </div>
    </>)
}

export default UserProfile;