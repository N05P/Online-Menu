import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Center, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Pizza from '../3d Model/Pizza.jsx'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='h-screen w-full px-10 py-20'>
      <h1 className='text-center text-6xl mb-8 underline decoration-yellow-500 decoration-wavy underline-offset-4'>About Us</h1>

      <div className='flex justify-between items-start h-[80%]'>
        <div className='w-1/2 p-4 flex flex-col gap-5 mt-10'>
          <h1 className='text-5xl leading-snug'>
            All in good taste food in <br /> catering
          </h1>
          <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga <br />
            illo nihil doloribus, voluptatibus reprehenderit quo vel atque <br />
            officiis est? Fuga aut animi temporibus necessitatibus commodi?
          </p>
          <p className='text-xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur <br />
            nesciunt error voluptatibus odio ad a nisi quos odit. Natus.
          </p>
          <Link to={'/menu'}><button className='bg-green-500 w-fit px-6 py-2 cursor-pointer hover:bg-green-600 text-white rounded-md'>
            Learn More
          </button></Link>
        </div>

        <div className='w-1/2 h-[70vh]'>
          <Canvas>
            <PerspectiveCamera makeDefault position={[1, 3, 1]} />
            <ambientLight intensity={3} />
            <directionalLight position={[10, 70, 10]} intensity={0.5} />
            <Center>
              <Suspense fallback={null}>
                <Pizza scale={[0.6, 0.6, 0.6]} />
              </Suspense>
            </Center>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default About
