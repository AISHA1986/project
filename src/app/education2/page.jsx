import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className=' w-[70%] ml-[180px] h-4/5 mt-[40px] sm:grid-cols-1'>
        <div className='flex gap-6'>
        <p className='h-7 w-15 bg-red-300 font-bold'>education</p>
        <p>April 11, 2024</p>
        </div>
        <div>
            <h1 className='font-bold text-4xl mt-6'>discipline that is concerned with methods of teaching and learning  <br /> education</h1>
        </div>
        <div>
            <Image src='/puzzle.jpg' alt='art' width='800' height='400' className='w-[100%] ml-[7px] mt-24 h-[600px]'/>
        </div>
        <div>
            <h2 className='font-bold mt-10 mb-4'>key to success </h2>
            <p>
Education is the transmission of knowledge, skills, and character traits and manifests in various forms. Formal education occurs within a structured institutional framework, such as public schools, following a curriculum. Non-formal education also follows a structured approach but occurs outside the formal schooling system, while informal education entails unstructured learning through daily experiences. Formal and non-formal education are categorized into levels, including early childhood education, primary education, secondary education, and tertiary education. Other classifications focus on teaching methods, such as teacher-centered and student-centered education, and on subjects, such as science education, language education, and physical education. Additionally, the term education can denote the mental states and qualities of educated individuals and the academic field studying educational phenomena.</p>
        </div>
        <div className='mt-14'>
            <ol>
                <li><span className='font-bold'>.</span> benefits of education.</li>
                <li><span className='font-bold'>.</span>education was largely accessible to elites and religious groups .</li>
                <li><span className='font-bold'>.</span>it stimulates economic growth and raises awareness of local and global problems .</li>
                <li><span className='font-bold'>.</span> It delves into the nature of education</li>
            </ol>
            <p className='mt-16'>
The precise definition of education is disputed, and there are disagreements about the aims of education and the extent to which education differs from indoctrination by fostering critical thinking. These disagreements impact how to identify, measure, and enhance various forms of education. Essentially, education socializes children into society by instilling cultural values and norms, equipping them with the skills necessary to become productive members of society. In doing so, it stimulates economic growth and raises awareness of local and global problems. Organized institutions play a significant role in education. For instance, governments establish education policies to determine the timing of school classes, the curriculum, and attendance requirements. International organizations, such as UNESCO, have been influential in promoting primary education for all children.</p>
        </div>
        <div className='w-[100%] ml-[7px] mt-10 h-[600px]'>
        <iframe width="1100" height="600" src="https://www.youtube.com/embed/aXZPJ8yGbwU?si=VcSJCJRbBXMU7n46&amp;start=17" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        </div>
        <div className='mt-20'>
            <h2 className='font-bold'>10 tell-tale signs you need to get a educated</h2>
            <p className='mt-4'>Many factors influence the success of education. Psychological factors include motivation, intelligence, and personality. Social factors, such as socioeconomic status, ethnicity, and gender, are often associated with discrimination. Other factors encompass access to educational technology, teacher quality, and parental involvement.</p>
        </div>
        <div className='mt-14 bg-yellow-300 p-12'>
            <p>The primary academic field examining education is known as education studies. It delves into the nature of education, its objectives, impacts, and methods for enhancement. Education studies encompasses various subfields, including philosophy, psychology, sociology, and economics of education. Additionally, it explores topics such as comparative education, pedagogy, and the history of education.</p>
        </div>
        <div className='mt-16 mb-14'>
            <p>
In prehistory, education primarily occurred informally through oral communication and imitation. With the emergence of ancient civilizations, the invention of writing led to an expansion of knowledge, prompting a transition from informal to formal education. Initially, formal education was largely accessible to elites and religious groups. The advent of the printing press in the 15th century facilitated widespread access to books, thus increasing general literacy. In the 18th and 19th centuries, public education gained significance, paving the way for the global movement to provide primary education to all, free of charge, and compulsory up to a certain age. Presently, over 90% of primary-school-age children worldwide attend primary school..</p>
        </div>
</div>
)
}