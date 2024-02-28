const MusicCard=({musicImage,musicName,musicDescribe})=>{
    return(<>
     <div className="bg-neutral-900 w-1/6 rounded-2xl m-10">
   <span className="relative">
     <img src="https://www.trendingus.com/wp-content/uploads/2022/06/Trending-Group-Names-for-Friends-1280x768.jpg" alt="Your image" className="w-66 p-2 h-80 rounded-2xl p-5" />
     
      <p className="absolute bottom-14 left-5 m-3 text-lg font-bold bg-opacity-50">song name</p>   
    </span>
    
        <h2 className="m-4 pl-3">song name</h2>
        <p className="m-4 py-2 pb-4 pl-3">description</p>
   
  </div>
    </>)
}

export default MusicCard;