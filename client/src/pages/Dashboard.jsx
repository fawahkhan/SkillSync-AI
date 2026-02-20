import { FilePenLineIcon, PencilIcon, PlusIcon, TrashIcon, UploadCloudIcon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {dummyResumeData} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  // different colors for different resume items
  const colors = ['#9333ea', '#d97706', '#dc2626', '#0284c7', '#16a34a']
  //below the horizontal line we have to create a state for existing resumes
  
    const [allResumes, setAllResumes] = useState([])
    const [showCreateResumes, setShowCreateResumes] = useState(false) // to show the popup when we click on create resume button
    const [showUploadResumes, setShowUploadResumes] = useState(false)
    const [title, setTitle] = useState('')
    
    const [resume, setResume] = useState(null)
    // to store the id of resume which we want to edit
    const [editresumeId, seteditResumeId] = useState('')

    const navigate = useNavigate() // to navigate to resume builder page when we click on a resume item
    const loadAllResumes = async()=>{
      setAllResumes(dummyResumeData)  //loaded from assets folder
    }
      // here we will send a request to backend to create a resume and then update the allResumes state with the new resume

    const createResume = async(e)=>{
      e.preventDefault()
      // console.log(title)
      setShowCreateResumes(false) // to close the popup after creating a resume
      navigate(`/app/builder/res123`) // to navigate to resume builder page after creating a resume 
    }
    //to upload resume
    const uploadResume = async(event)=>{
      event.preventDefault()
      // console.log(title)
      setShowUploadResumes(false) // to close the popup after uploading a resume
      navigate(`/app/builder/res123`)
    }
    //to execute that data whenever the file gets loaded
    useEffect(()=>{
      loadAllResumes()
    },[])

  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden'>Welcome Fawah  </p>
        <div className='flex gap-4'>
          <button onClick={()=>{setShowCreateResumes(true)}} className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <PlusIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500 text-white rounded-full"/>
            <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
              Create Resume
            </p>
          </button>
            
          <button className="w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <UploadCloudIcon className="size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-purple-300 to-purple-500 text-white rounded-full"/>
            <p className="text-sm group-hover:text-purple-600 transition-all duration-300">
              Upload Existing
            </p>
          </button>

        </div>

        <hr className='border-slate-300 my-6 sm:w-[350px]'/>
        {/* this div has all resume  */}
        <div className='grid grid-cols-2 sm:flex flex-wrap gap-4'>
          {/* to map our data  */}
          {allResumes.map((resume , index)=>{
            const baseColor = colors[index % colors.length]
            return(
              <button key={index} className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer" style={{
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: baseColor + "40",
                }}>
                <FilePenLineIcon className="size-7 group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}/>
              
                <p className="text-sm group-hover:scale-105 transition-all px-2 text-center" style={{ color: baseColor }}>
                  {resume.title}
                </p>
              
                <p className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center"
                  style={{ color: baseColor + "90" }}>
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>
                <div className="absolute top-1 right-1 group-hover:flex items-center hidden">
                  <TrashIcon className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors" />
                  <PencilIcon className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors" />
                </div>

              </button>
            )
          })}
        </div>
        {/* now i want a popppup whenever show create resume becomes true */}
        {showCreateResumes && (
          <form onSubmit={createResume} onClick={()=>{setShowCreateResumes(false)}} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
            <div onClick={e=>{e.stopPropagation()}} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6 '> 
              <h2 className=' text-xl font-bold mb-4 '>Create a Resume</h2>
              <input onChange={(e)=>{setTitle(e.target.value)} } value = {title} type="text" placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600' required />
              <button className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors'>Create Resume </button>
              {/* icon to close popup */}
              <XIcon className=' absolute top-4 right-4 cursor-pointer text-slate-400 hover:text-slate-600 transition-colors' onClick={()=>{setShowCreateResumes(false); setTitle('')}}/>
            </div>
          </form>
        )}
        {showUploadResumes && (
          <form onSubmit={uploadResume} onClick={()=>{setShowUploadResumes(false)}} className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>
            <div onClick={e=>{e.stopPropagation()}} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6 '> 
              <h2 className=' text-xl font-bold mb-4 '>Upload an Existing Resume</h2>
              <input onChange={(e)=>{setTitle(e.target.value)} } value = {title} type="file" accept='.pdf,.doc,.docx' className='w-full px-4 py-2 mb-4 focus:border-green-600 ring-green-600' required />
              <div>
                <label htmlFor="resume-input" className='block text-sm text-slate-700'>
                  Select resume file
                  <div className='flex flex-col items-center justify-center gap-2 border group text-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-colors'>
                    {/* here in this div we will display upload resume name if any resume is uploaded. if not uploaded then we will display the upload icon and text */}
                    {resume?(
                      <p className='text:green-700'>{resume.name}</p>
                    ):(
                      <>
                        <UploadCloud className="size-14 stroke-1" />
                        <p>Upload Resume</p>
                      
                      </>
                    )}
                  </div>
                </label>
              </div>
              <button className='w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors'>Upload Resume </button>
              {/* icon to close popup */}
              <XIcon className=' absolute top-4 right-4 cursor-pointer text-slate-400 hover:text-slate-600 transition-colors' onClick={()=>{setShowUploadResumes(false); setTitle('')}}/>
            </div>
          </form>
        )}
      </div> 

    </div>
  )
}

export default Dashboard
