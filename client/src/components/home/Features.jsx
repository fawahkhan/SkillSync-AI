import { Zap } from 'lucide-react';
import React from 'react'
import Title from './Title';

const Features = () => {
    const [isHover, setIsHover] = React.useState(false);
    return (

        <div id='features' className='flex flex-col items-center my-10 scroll-mt-12'>
            
            
            <div className="flex items-center gap-2 text-sm text-teal-600 bg-teal-400/10 border border-teal-200 rounded-full px-6 py-1.5">
                <Zap width={14}/>
                <span>Simple Process</span>
            </div>  
            <Title title='Build your resume' description ='Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features.'/>

            <div className="flex flex-col md:flex-row items-center justify-center xl:-mt-10">
                <img className="max-w-2xl w-full xl:-ml-32" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" alt="" />
                <div className=" px-4 md:px-0 grid grid-cols-2 gap-2 md:gap-8" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    
                    {/* Feature 1 */}
                    <div className="flex items-center justify-start gap-6 max-w-md group cursor-pointer">
                        <div className={`p-4 md:p-5 group-hover:bg-violet-100 border border-transparent group-hover:border-violet-300 flex gap-4 rounded-xl transition-colors ${!isHover ? 'border-violet-300 bg-violet-100' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-violet-600 shrink-0"><path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"/><path d="m5 2 5 5"/><path d="M2 13h15"/><path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"/></svg>
                             <div className="space-y-1">
                                <h3 className="text-base font-semibold text-slate-700">AI-Powered Enhancement</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Let AI refine your experience into powerful, recruiter-ready descriptions.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex items-center justify-start gap-6 max-w-md group cursor-pointer">
                        <div className="p-4 md:p-5 group-hover:bg-teal-100 border border-transparent group-hover:border-teal-300 flex gap-4 rounded-xl transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-6 stroke-teal-600 shrink-0"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg>
                             <div className="space-y-1">
                                <h3 className="text-base font-semibold text-slate-700">Smart Resume Builder</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Fill out a simple guided form and instantly get a beautifully structured resume.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex items-center justify-start gap-6 max-w-md group cursor-pointer">
                        <div className="p-4 md:p-5 group-hover:bg-blue-100 border border-transparent group-hover:border-blue-300 flex gap-4 rounded-xl transition-colors">
                            <svg className="size-6 stroke-blue-600 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-slate-700">ATS-Friendly Templates</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Beat applicant tracking systems with professionally designed, optimized layouts.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex items-center justify-start gap-6 max-w-md group cursor-pointer">
                        <div className="p-4 md:p-5 group-hover:bg-orange-100 border border-transparent group-hover:border-orange-300 flex gap-4 rounded-xl transition-colors">
                            <svg className="size-6 stroke-orange-600 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-slate-700">Shareable Public Link</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Generate a custom link instantly to confidently share your resume with tracking.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 5 */}
                    <div className="flex items-center justify-start gap-6 max-w-md group cursor-pointer">
                        <div className="p-4 md:p-5 group-hover:bg-rose-100 border border-transparent group-hover:border-rose-300 flex gap-4 rounded-xl transition-colors">
                            <svg className="size-6 stroke-rose-600 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-slate-700">Download & Edit Anytime</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Export to PDF or update it anytime always keep it fresh for new opportunities.</p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Strategic Feature */}
                    <div className="flex items-center justify-start gap-6 max-w-md group cursor-pointer">
                        <div className="p-4 md:p-5 group-hover:bg-teal-100 border border-transparent group-hover:border-teal-300 flex gap-4 rounded-xl transition-colors">
                            <svg className="size-6 stroke-teal-600 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-slate-700">Real-Time Live Preview</h3>
                                <p className="text-sm text-slate-600 max-w-xs">Watch your resume update dynamically as you type your changes into the builder.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </div>
  )
}

export default Features
