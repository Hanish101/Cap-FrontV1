
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PolylineIcon from '@mui/icons-material/Polyline';

export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-5xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Create your best projects, together</h2>
            <p className="text-xl font-semibold text-gray-600"> Collaborate and innovate : Unleash your creative potential with collective project creation.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col h-full items-center p-6 bg-white rounded shadow-xl">
            <div className='mr-5 flex items-center justify-center bg-blue-700 p-4 rounded-full'><BorderColorIcon style={{ color: 'white' }}/></div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Create projects</h4>
              <p className="text-gray-600 text-center">by providing comprehensive details about the project, including project description, required skills, budget, timeline, and any specific requirements.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col h-full items-center p-6 bg-white rounded shadow-xl">
              <div className='mr-5 flex items-center justify-center bg-blue-700 p-4 rounded-full'><RecentActorsIcon style={{ color: 'white' }}/></div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Review and Initiate</h4>
              <p className="text-gray-600 text-center">Communication with developer directly.</p>
            </div>


            {/* 3rd item */}
            <div className="relative flex flex-col h-full items-center p-6 bg-white rounded shadow-xl">
              <div className='mr-5 flex items-center justify-center bg-blue-700 p-4 rounded-full'><PolylineIcon style={{ color: 'white' }}/></div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">View List</h4>
              <p className="text-gray-600 text-center">of web developers who have shown interest in their projects and analyze their profiles and skills.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}