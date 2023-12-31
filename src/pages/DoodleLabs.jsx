import React from 'react'

import BackIcon  from './../assets/images/BackIcon.png'
import LandingPage from '../assets/images/dl-landing-page.png'
import GIF from '../assets/images/GIF.mp4'
import Neogen from '../assets/images/Neogen.mp4'
import Gif1 from '../assets/images/Gif1.gif'
import Gif2 from '../assets/images/Gif2.gif'
import Gif3 from '../assets/images/Gif3.gif'
import Deciphers from '../assets/images/4000944.png'
import Vistas from '../assets/images/6000024.png'

import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function DoodleLabs() {
  return (
    <div className='flex'>
        <CustomLink to='/'>
            <div className='fixed mr-4 px-4 bg-gray-300 h-screen w-8 hover:bg-gray-500 duration-300'></div>
        </CustomLink>
    <div className='w-full max-w-[1240px] mx-auto ml-4 px-12 md:px-16 lg:px-20 py-16'>
        {/* <CustomLink to='/' className='text-xl font-normal'><img className='w-10' src={BackIcon} alt='' /></CustomLink> */}
        <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 text-justify'>
                <h2 className='pt-4 text-3xl lg:text-4xl font-semibold'>Doodle Labs</h2>
                <p className='py-4 pt-8 text-sm lg:text-xl'>Doodle Labs is an NFT platfrom that set out to provide a platform that brands and artists could use to enter the generative art market.</p>
                <p className='text-sm lg:text-xl'>I initially joined Doodle Labs as a designer focused on brand, marketing, and product. As the platform was in its early stages and continuously evolving, my role quickly transformed into a versatile position that demanded adaptability, efficient research, and rapid learning. During the company's initial phase of discovering its niche, I had the opportunity to work on numerous pitch decks targeting diverse industries such as sports, hospitality, fine arts, and brands with a strong presence in popular culture. <strong className='font-bold'>After analysing our research and refining our vision, I focused on partnering with artists to bring their work into the generative art NFT space.</strong></p>
            </div>
        </div>

        <div className='py-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col w-full md:col-span-2'>
                <img className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' src={LandingPage} alt='Doodle Labs Home Page' />
            </div>
            <div className='flex flex-col mt-0 md:mt-24 text-sm lg:text-xl md:col-span-1'>
                {/* <p>My role at Doodle Labs began as a designer forcused on brand, marketing, and product (as the platform was very young and in continual development), but quickly evolved into a multifaceted position that required a high degree of adaptability, efficient research, and fast-paced learning. Early on as the company sought its niche, there were many pitch decks aimed at different industries: sports, hospitality, fine arts, brands with a presence in popular culture. as well as the actual coding for the projects. The NFT space is new and rapidly evolving, which requires a designer to keep a keen eye on trends that may have a short lifespan, but long-term effects on the medium as a whole. In a small company that is still determining its place in the industry, research and strategic thinking are a constant.</p> */}
                {/* <p className='pt-4'>Once we had established client relationships and our brand and website were ready to accommodate new users and projects, my responsibilities shifted to collaborating with artists who aimed to showcase their work through generative mediums as on-chain NFTs. Given the unique vision of each artist, a crucial aspect of my role was to faithfully translate their original work into the generative medium, while considering the constraints such as writing concise and efficient code (as uploading to the blockchain is costly) and appealing to our expanding collector base. In most cases, I wrote the generative scripts, and occasionally, I provided art direction and assistance to artists who coded their own work.</p>
                <p className='pt-4'>The NFT space is highly dynamic and constantly evolving, necessitating designers to stay vigilant and attuned to trends that might have short-term popularity but long-lasting effects on the medium as a whole. In a small company like ours, which is still forging its position in the industry, continuous research and strategic thinking remain imperative for success.</p> */}
                <h3 className='mt-4 text-xl lg:text-2xl font-semibold'>Our key goals were to:</h3>
                <div className='mt-4 rounded-md font-base'>
                    {/* <h3 className='mx-4 mt-4 lg:text-3xl font-bold'>THE GOAL</h3> */}
                    <p className='font-medium mb-4 lg:text-base'><strong>1 / Provide a platform that enables brands and artists to connect with new audiences</strong> in the generative art market, building a community of collectors.</p>
                </div>
                <div className='mt-4 rounded-md font-base'>
                    <p className='font-medium mb-4 lg:text-base'><strong>2 / Produce exceptional NFT projects that distinguish themselves in the industry</strong> and captivate the attention of prospective collectors through close collaboration with artists, effectively translating their artistic expressions into the generative medium.</p>
                </div>
            </div>
        </div>

        <div className='py-4'>
            <div className='rounded-md border-4 border-blue-100'></div>
        </div>

        <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 text-justify'>
                <p className='text-sm lg:text-xl'>As we were populating our platform with the first few projects, we had to review existing pages and develop new ones to accommodate user needs. A major hurdle was offering collectors various ways to view projects and collections, to sort through them, to edit their profile, order prints, etc. while keeping the site intuitively easy to use and visually uncluttered.</p>
            </div>
        </div>
        <div className='py-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col text-sm lg:text-xl md:col-span-2'>
                <video src={GIF} type="video/mp4" autoPlay loop className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' />
            </div>
            <div className='flex flex-col w-full mt-0 md:mt-24 md:col-span-1'>
                {/* <p className='text-sm lg:text-xl'>As we were populating our platform with the first few projects, we had to review existing pages and develop new ones to accommodate user needs. A major hurdle was offering collectors various ways to view projects and collections, to sort through them, to edit their profile, order prints, etc. while keeping the site intuitively easy to use and visually uncluttered.</p> */}
                <p className=' text-sm lg:text-xl'>We were designing around a young platfrom with only a couple of projects to present, but had to keep in mind future projects that may have different features.</p>
                <p className=' pt-4 text-sm lg:text-xl'>Another important consideration was accounting for users who collected one or two tokens as well as those who collected dozens. Some users would buy into every collection, while others might only be interested in one specific series. We had to find ways to universalize the experience.</p>
            </div>
        </div>

        <div className='py-4'>
            <div className='rounded-md border-4 border-blue-100'></div>
        </div>

        <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 text-justify'>
                <p className='text-sm lg:text-xl'>The role offered many opportunities for me to come up with solutions for prospective client's needs and to communicate them with sketches, rough drafts, or roadmaps.</p>
                <p className='pt-4 text-xs lg:text-sm text-zinc-600'><strong>Example:</strong> Concept sketches for an NFT series that takes a football team's recent performance and alters the artwork as the team gets on a hot streak or cools down throughout the season. Three states illustrated below, from default to 'on fire.'</p>
            </div>
        </div>
        <div className='py-8 pt-2 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col w-full'>
                <img className='rounded-md' src={Gif1} />
            </div>
            <div className='flex flex-col w-full'>
                <img className='rounded-md' src={Gif2} />
            </div>
            <div className='flex flex-col w-full'>
                <img className='rounded-md' src={Gif3} />
            </div>
        </div>

        <div className='py-4'>
            <div className='rounded-md border-4 border-blue-100'></div>
        </div>

        <div className='py-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col text-sm lg:text-xl md:col-span-2'>
                <video src={Neogen} type="video/mp4" autoPlay loop muted className='drop-shadow-xl rounded-md hover:drop-shadow-2xl duration-300' />
            </div>
            <div className='flex flex-col w-full mt-0 md:mt-24 md:col-span-1'>
                <p className='text-sm lg:text-xl'>Certain projects also afforded opportunities for some fun video editing, meme-making, and other playful approaches to promoting the art. Some of this work was shown on screens at Times Square, on trucks that drove around the city during NFT NYC, and some became memes that were posted on Twitter and in the community discord.</p>
            </div>
        </div>

        <div className='py-4'>
            <div className='rounded-md border-4 border-blue-100'></div>
        </div>

        <div className='py-8 mx-auto grid md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 text-justify'>
                <p className='text-sm lg:text-xl'>My time at Doodle labs was a unique experience due to my immersion into generative art. I knew some basic Javascript going into the role, but working on NFT projects prompted me to learn p5.js and delve into the world of generative art. After collaborating with several artists to create generative series based on their work, I dropped my own project, an extension of my highly geometric landscape oil paintings.</p>
            </div>
        </div>
        <div className='py-8 pt-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col w-full'>
                <a href='https://deciphers.doodlelabs.io/'>
                <h4 className='py-4 font-medium'>Industrial Melanism</h4>
                {/* <img className='rounded-sm drop-shadow-md hover:drop-shadow-xl duration-300' src={Deciphers} /> */}
                <iframe className='aspect-square rounded-sm border drop-shadow-md hover:drop-shadow-xl duration-300' src='https://generator.artblocks.io/0x28f2d3805652fb5d359486dffb7d08320d403240/5000794' />
                <p className='py-4 text-sm lg:text-lg'>An extension of Neil Grayson's successful paintings done in oil and metals. Interactivity was introduced to simulate the physical properties of the art in the digital rendering.</p>
                </a>
            </div>
            <div className='flex flex-col w-full'>
                <a href='https://deciphers.doodlelabs.io/'>
                <h4 className='py-4 font-medium'>DeCiphers</h4>
                <img className='rounded-sm drop-shadow-md hover:drop-shadow-xl duration-300' src={Deciphers} />
                <p className='py-4 text-sm lg:text-lg'>Based on her 'Ciphers' series, Irene Mamiye's introduction into on-chain generative art was a work of layered transparency, pattern, and geometry.</p>
                </a>
            </div>
            <div className='flex flex-col w-full'>
                <a href='https://vistas.doodlelabs.io/'>
                <h4 className='py-4 font-medium'>Vistas</h4>
                <img className='rounded-sm border drop-shadow-md hover:drop-shadow-xl duration-300' src={Vistas} />
                <p className='py-4 text-sm lg:text-lg'>My own oil paintings translated into millions of simple shapes and lines that intersect and interact to create unique digital paintings.</p>
                </a>
            </div>
        </div>
        <div className='py-4 mx-auto grid md:grid-cols-3 gap-8'>
            <div className='md:col-span-2 text-justify'>
                <p className='text-sm lg:text-xl'>Putting together an NFT drop is a lengthy process and involves going through the whole product development cycle. Beginning with understanding the artist's vision and how it fits into the constraints of the generative medium, I try to identify viable product options and compare them with relevant existing projects and their market performance.</p>
            </div>
        </div>

    </div>
    </div>
  )
}

function CustomLink({to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default DoodleLabs