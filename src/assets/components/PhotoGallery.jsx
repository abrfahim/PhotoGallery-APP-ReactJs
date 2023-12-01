import { GalleryData } from "./data_center/GalleryData"
import { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react";

const PhotoGallery=()=> {
    const {isAuthenticated} = useAuth0();
    const [data,setData] = useState([]);
    const [collection,setCollection] = useState([]);

    useEffect(()=>{
        setData(GalleryData);
        setCollection([... new Set(GalleryData.map((item)=> item.title))])
    },[]) 

    const gallery_filter = (itemData) =>{
        const filterData = GalleryData.filter((item)=> item.title == itemData);
        setData(filterData);
    }

    return (
        <div>
            
            {isAuthenticated ? 
            <div className='App'>
            <div className="galleryWrapper">
                <div className="filterItem">
                <ul>
                    <li><button onClick={()=> setData(GalleryData)}>All</button></li>
                    {
                    collection.map((item)=> <li><button onClick={()=>{gallery_filter(item)}}>{item}</button></li>)
                    }
                </ul>
                </div>
                <div className="galleryContainer">
                {
                    data.map((item)=> <div  key={item.id} className="galleryItem"><img src={item.image  } /></div> )
                }
                </div>
            </div>
        </div>
            :
            <div className='App'>
                <h1 className="display-2"><b>You are not a verified user</b></h1>
                <h1 className="display-4">Please Login or Signup to continue</h1>
            </div>
            }

        </div>
    )
}

export default PhotoGallery;
