import Image from 'next/image';

import '../app/styles/pages.css';
import Button from './components/Button';
import Iphone from '../app/assets/iphone.png';
import Minimo from '../app/assets/mini-mobile.png';
import Minip from '../app/assets/mini-pc.png';
import MiniCards from './components/MiniCards';
import BgCode from '../app/assets/bg-mini-code.png';
import BgPhone from '../app/assets/bg-mini-phone.png';
import People from '../app/assets/people.png';
import Cube from '../app/assets/cube.png';

const data = {
  result: [
    {
      id: 1,
      name: 'Ahmad Prasetyo',
      description: 'Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave'
    },
    {
      id: 2,
      name: 'Laras Ratnadewi',
      description: 'Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.'
    },
    {
      id: 3,
      name: 'Yusuf Uwais',
      description: 'Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!'
    },
    {
      id: 4,
      name: 'Ahmad Prasetyo',
      description: 'Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave'
    },
    {
      id: 5,
      name: 'Laras Ratnadewi',
      description: 'Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.'
    },
    {
      id: 6,
      name: 'Yusuf Uwais',
      description: 'Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!'
    },
  ]
}

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-black">

      {/* //section-1// */}
      <div className='bg-top'>
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
          <g clip-path="url(#clip0_0_27)">
            <path d="M12.7583 13.1223L7.66914 15.5411L10.9665 20.1103C11.0763 20.2599 11.1555 20.4298 11.1993 20.6102C11.2432 20.7905 11.2509 20.9778 11.2221 21.1611C11.1932 21.3445 11.1283 21.5203 11.0312 21.6785C10.934 21.8367 10.8065 21.974 10.656 22.0827C10.5055 22.1913 10.335 22.2691 10.1543 22.3115C9.97359 22.3539 9.78628 22.3602 9.60316 22.3298C9.42003 22.2995 9.24473 22.2332 9.08734 22.1348C8.92996 22.0364 8.79362 21.9078 8.68618 21.7564L4.4017 15.8187C4.28102 15.6515 4.19858 15.4599 4.16022 15.2573C4.12187 15.0547 4.12853 14.8461 4.17974 14.6464C4.23096 14.4467 4.32546 14.2606 4.45657 14.1015C4.58768 13.9423 4.75218 13.814 4.93842 13.7255L11.5514 10.582C11.8878 10.4255 12.2724 10.4082 12.6214 10.534C12.9705 10.6598 13.2557 10.9184 13.4149 11.2535C13.5741 11.5886 13.5944 11.9731 13.4714 12.3231C13.3485 12.6731 13.0921 12.9604 12.7583 13.1223ZM32.1095 20.6924L27.825 14.7547C27.7175 14.6033 27.5812 14.4747 27.4238 14.3763C27.2664 14.2779 27.0911 14.2116 26.908 14.1813C26.7249 14.151 26.5376 14.1572 26.3569 14.1996C26.1762 14.242 26.0056 14.3198 25.8551 14.4284C25.7046 14.5371 25.5771 14.6744 25.48 14.8326C25.3828 14.9908 25.318 15.1666 25.2891 15.35C25.2602 15.5333 25.2679 15.7206 25.3118 15.9009C25.3557 16.0813 25.4348 16.2512 25.5447 16.4008L28.842 20.97L23.7529 23.3888C23.5846 23.4671 23.4335 23.578 23.3082 23.715C23.183 23.852 23.0861 24.0124 23.0232 24.1871C22.9603 24.3617 22.9325 24.547 22.9416 24.7324C22.9506 24.9178 22.9963 25.0996 23.076 25.2673C23.1556 25.4349 23.2677 25.5851 23.4057 25.7093C23.5437 25.8334 23.7049 25.929 23.88 25.9905C24.0551 26.0521 24.2407 26.0783 24.426 26.0678C24.6113 26.0572 24.7927 26.0101 24.9597 25.9291L31.5727 22.7856C31.759 22.6971 31.9235 22.5688 32.0546 22.4096C32.1857 22.2505 32.2802 22.0645 32.3314 21.8647C32.3826 21.665 32.3893 21.4564 32.3509 21.2538C32.3126 21.0513 32.2301 20.8596 32.1095 20.6924ZM25.2432 8.03649C25.0907 7.93222 24.9192 7.85902 24.7384 7.82105C24.5576 7.78309 24.3712 7.78111 24.1896 7.81522C24.0081 7.84934 23.8351 7.91888 23.6804 8.01989C23.5258 8.12089 23.3925 8.25137 23.2883 8.40387L10.9006 26.5198C10.6904 26.8276 10.6111 27.2064 10.68 27.5727C10.749 27.9391 10.9606 28.2631 11.2683 28.4735C11.4032 28.5667 11.5536 28.6352 11.7125 28.6757C11.9921 28.7474 12.2871 28.7314 12.5573 28.6297C12.8275 28.528 13.0599 28.3456 13.2228 28.1072L25.6105 9.99134C25.7148 9.83887 25.788 9.66735 25.826 9.48658C25.8639 9.30582 25.8659 9.11934 25.8318 8.93781C25.7977 8.75628 25.7281 8.58324 25.6271 8.42859C25.5261 8.27394 25.3957 8.1407 25.2432 8.03649Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_0_27">
              <rect width="30" height="30" fill="white" transform="translate(7.45123) rotate(14.3813)" />
            </clipPath>
          </defs>
        </svg>

        <p className='text-white text-left font-poppins text-5xl not-italic font-semibold leading-normal mb-2'>
          Make Your Own<br />
          Website and Mobile Application<br />
          With Nodewave
        </p>
        <Button
          label="Get Started Now"
          // loading={loading || disabled}
          className={'w-44 pr-5 pl-5 pt-3 pb-3 mt-2.5 mb-8 rounded-full bg-teal-400'}
        />
        <p className='text-white text-left font-poppins text-sm not-italic font-semibold leading-normal'>
          Create Mobile Applications and Websites for Companies or Your Business<br />
          Have a transparent pricing, easy and straightforward development process
        </p>
      </div>

      {/* //Our Product// */}
      <div className='mt-40'>
        <p className='text-white text-center font-poppins text-2xl not-italic font-semibold leading-normal mb-8'>Our Product</p>
        <div className='flex gap-4 m-auto'>
          <div className='grid gap-y-6'>
            <div className='bg-white w-1/2 flex gap-4 px-10 py-12 m-auto rounded-lg'>
              <Image src={Minimo} className='w-16 h-16'/>
              <div>
                <p className='text-black text-left font-poppins text-2xl not-italic font-semibold leading-normal'>Mobile Apps</p>
                <p className='text-black text-left font-poppins text-sm not-italic font-normal leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13.75 3.75L18.75 10M18.75 10L13.75 16.25M18.75 10H1.25" stroke="#FFB347" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </div>
            <div className='bg-black w-5/12 flex gap-4 px-5 py-12 m-auto border border-gray-400 rounded-lg'>
              <Image src={Minip} className='w-16 h-16' />
              <div>
                <p className='text-white text-left font-poppins text-2xl not-italic font-semibold leading-normal'>Website</p>
                <p className='text-white text-left font-poppins text-sm not-italic font-normal leading-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13.75 3.75L18.75 10M18.75 10L13.75 16.25M18.75 10H1.25" stroke="#FFB347" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </div>
            
          </div>
          <div className='bg-white w-1/2 rounded-lg'>
            <div className='flex gap-8 justify-center'>
              <Image src={Iphone} />
              <Image src={Iphone} />
              <Image src={Iphone} />
            </div>
            <div className='p-10'>
            <p className='text-black text-center font-poppins text-2xl not-italic font-semibold leading-normal mb-8'>Mobile Apps</p>
            <p className='textblack text-center font-poppins text-base not-italic font-normal leading-normal mb-8'>Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur sesuka anda.
              Bisa untuk aplikasi transaksi jual beli, Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.</p>
            <Button
              label="Pelajari Selengkapnya"
              // loading={loading || disabled}
              className={'w-1/2 px-4 pt-3 pb-3 mt-2.5 mb-8 rounded-full bg-teal-400 text-white font-normal m-auto'}
            />
            </div>
          </div>
        </div>
      </div>

      {/* //Testimony// */}
      <div className='m-auto'>
        <p className='text-white text-left font-poppins text-2xl not-italic font-semibold leading-normal mb-6'>Testimony</p>
        <div className="scroll-pad flex gap-8 mb-12 flex-nowrap overflow-scroll">
          {data.result.map((item) => {
            return <MiniCards
              id={item.id}
              description={item.description}
              name={item.name}
            />
          })}
        </div>
      </div>

      {/* //Our Work// */}
      <div className='mb-16'>
        <p className='text-white text-center font-poppins text-2xl not-italic font-semibold leading-normal mb-8'>Our Works</p>
        <div className='flex flex-nowrap gap-x-8 rounded-2xl ml-16'>
          <div className='our-blue'>
            <div className='flex gap-5 my-24'>
              <div className='img-tosca ml-4'></div>
              <div className='text-white font-poppins not-italic pr-5'>
                <p className='text-4xl text-center font-semibold leading-semibold pt-2'>Rayu Motor</p>
                <p className='text-xl text-left font-normal leading-normal pt-1'>AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales</p>
              </div>
            </div>
          </div>
          <div className='our-orange'>
            <div className='img-orange ml-4 my-16'></div>
          </div>
        </div>
      </div>

      {/* //How We Work// */}
      <div className='how-blue mb-11'>
        <p className='text-white text-center font-poppins text-2xl not-italic font-semibold leading-normal my-8'>How We Work</p>
        <div className='how-black flex gap-10 m-auto mt-9 mb-32'>
          <div className='bg-white my-7 ml-7 rounded-xl'>
            <div className='flex gap-x-3.5 gap-y-3 bg-grey m-auto my-6'>
              <Image src={People} className='w-9 h-9'/>
              <p className='bg-slate-200 py-1.5 px-2.5 text-black items-justify font-poppins text-xs not-italic font-normal leading-normal mr-4'>My name is Danny, I’m looking for profile website company</p>
            </div>
            <div className='flex gap-x-3.5 gap-y-3 bg-grey m-auto my-6'>
              <p className='bg-slate-200 py-1.5 px-2.5 text-black items-justify font-poppins text-xs not-italic font-normal leading-normal ml-4'>Hello Danny, thank to reaching out us. We are interested to your offer. Maybe we can set meeting</p>
              <Image src={Cube} className='w-9 h-9 mr-4'/>
            </div>
            <div className='flex gap-x-3.5 gap-y-3 bg-grey m-auto my-6'>
              <Image src={People} className='w-9 h-9 ml-4'/>
              <p className='bg-slate-200 py-1.5 px-2.5 text-black items-justify font-poppins text-xs not-italic font-normal leading-normal mr-4'>Sounds good, I have many desires to explain</p>
            </div>
            <div className='flex gap-x-3.5 gap-y-3 bg-grey m-auto my-6'>
              <p className='bg-slate-200 py-1.5 px-2.5 text-black items-justify font-poppins text-xs not-italic font-normal leading-normal ml-4'>How do I arrange our meeting on Monday at 10 WIB and my team will contact you again</p>
              <Image src={Cube} className='w-9 h-9  mr-4'/>
            </div>
          </div>
          <div className='text-white text-left font-poppins text-xl not-italic my-7 mr-7'>
            <p className='font-semibold leading-semibold mb-4'>Estimate</p>
            <p className='font-normal leading-normal'>Estimate the cost of creating your application with us. Pricing is transparent at the start with a gradual payment method.</p>
          </div>
        </div>
        <div>

        </div>
      </div>

      {/* //Application// */}
      <div className='mb-11'>
        <p className='text-white text-center font-poppins text-2xl not-italic font-semibold leading-normal mb-8'>Applications that can be made</p>
        <div className='flex justify-center gap-5'>
          <div>
            <div className='flex gap-5 items-center mb-2.5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M8.33334 35.4167C7.74306 35.4167 7.24792 35.2167 6.84792 34.8167C6.44792 34.4167 6.24862 33.9223 6.25001 33.3334C6.25001 32.7431 6.45001 32.248 6.85001 31.848C7.25001 31.448 7.74445 31.2487 8.33334 31.25C8.92362 31.25 9.41876 31.45 9.81876 31.85C10.2188 32.25 10.4181 32.7445 10.4167 33.3334C10.4167 33.9237 10.2167 34.4188 9.81667 34.8188C9.41667 35.2188 8.92223 35.4181 8.33334 35.4167ZM8.33334 27.0834C7.74306 27.0834 7.24792 26.8834 6.84792 26.4834C6.44792 26.0834 6.24862 25.5889 6.25001 25C6.25001 24.4098 6.45001 23.9146 6.85001 23.5146C7.25001 23.1146 7.74445 22.9153 8.33334 22.9167C8.92362 22.9167 9.41876 23.1167 9.81876 23.5167C10.2188 23.9167 10.4181 24.4112 10.4167 25C10.4167 25.5903 10.2167 26.0855 9.81667 26.4855C9.41667 26.8855 8.92223 27.0848 8.33334 27.0834ZM8.33334 18.75C7.74306 18.75 7.24792 18.55 6.84792 18.15C6.44792 17.75 6.24862 17.2556 6.25001 16.6667C6.25001 16.0764 6.45001 15.5813 6.85001 15.1813C7.25001 14.7813 7.74445 14.582 8.33334 14.5834C8.92362 14.5834 9.41876 14.7834 9.81876 15.1834C10.2188 15.5834 10.4181 16.0778 10.4167 16.6667C10.4167 17.257 10.2167 17.7521 9.81667 18.1521C9.41667 18.5521 8.92223 18.7514 8.33334 18.75ZM14.5833 35.4167V31.25H43.75V35.4167H14.5833ZM14.5833 27.0834V22.9167H43.75V27.0834H14.5833ZM14.5833 18.75V14.5834H43.75V18.75H14.5833Z" fill="white" />
              </svg>
              <p className='text-base text-white  text-center font-poppins not-italic font-semibold leading-normal'>Online Attendance</p>
            </div>
            <div className=''>
              <p className='text-base text-white  text-justify font-poppins not-italic font-normal leading-normal'>With the times, your team may be able to work in the office or outside the office. Get the accuracy of your team's work hours with your own company's special online attendance feature with features such as:</p>
              <div className='text-base text-white text-justify font-poppins not-italic font-normal leading-normal pl-6 mt-12'>
                <p className='list-item'> Clock in and Clock Out attendance </p>
                <p className='list-item'> Face Photo </p>
                <p className='list-item'> Face Recognition </p>
                <p className='list-item'> Accurate time stamp down to seconds </p>
                <p className='list-item'> GPS location of employees </p>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='flex gap-5 items-center mb-2.5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M25 23.2325L27.7075 20.525C26.61 19.135 25.745 17.41 25.0525 15.615C24.19 13.3725 23.5675 10.9225 23.1175 8.67253C23.0478 8.32311 22.9812 7.97309 22.9175 7.62253C19.4469 8.03382 16.1803 9.47983 13.5425 11.7725L25 23.2325ZM29.475 22.2925L26.7675 25L38.2275 36.46C40.5201 33.8222 41.9661 30.5556 42.3775 27.085C42.0286 27.0221 41.6803 26.9563 41.3325 26.8875C39.0825 26.4375 36.6325 25.8125 34.39 24.95C32.5925 24.26 30.865 23.3925 29.475 22.2925ZM42.495 24.5675C42.3997 20.5077 40.8904 16.6085 38.2275 13.5425L31.2575 20.51C32.3325 21.31 33.715 22.0125 35.2875 22.6175C37.3525 23.4125 39.655 24.0025 41.8225 24.4375L42.495 24.5675ZM29.49 18.7425L36.46 11.7725C33.394 9.10965 29.4948 7.60035 25.435 7.50503L25.5675 8.18003C26.0025 10.35 26.5925 12.6525 27.3875 14.7175C27.99 16.2875 28.69 17.6675 29.49 18.7425ZM25 26.765L22.2975 29.4675C23.3975 30.8575 24.2625 32.585 24.955 34.3825C25.8175 36.625 26.4425 39.075 26.8925 41.325C26.9625 41.68 27.03 42.03 27.0925 42.375C30.5605 41.9623 33.8243 40.5164 36.46 38.225L25 26.765ZM20.515 31.25L13.54 38.225C16.6073 40.889 20.5085 42.3984 24.57 42.4925C24.53 42.2675 24.485 42.0425 24.44 41.815C24.005 39.645 23.415 37.345 22.62 35.28C22.0175 33.7075 21.315 32.3275 20.515 31.2525V31.25ZM18.745 29.485C17.67 28.685 16.29 27.985 14.72 27.38C12.655 26.585 10.3525 25.9925 8.18501 25.56C7.9586 25.5145 7.73193 25.4704 7.50501 25.4275C7.59918 29.4891 9.10854 33.3902 11.7725 36.4575L18.7475 29.4825L18.745 29.485ZM20.5275 27.7L23.2325 25L11.7725 13.54C9.48072 16.1764 8.03476 19.4412 7.62251 22.91C7.97001 22.9725 8.32001 23.04 8.67501 23.11C10.925 23.56 13.375 24.185 15.6175 25.0475C17.4125 25.7375 19.14 26.605 20.5275 27.7025V27.7ZM39.1425 39.14C37.2895 41.0158 35.084 42.5067 32.6527 43.5268C30.2214 44.547 27.6124 45.0764 24.9757 45.0845C22.3391 45.0927 19.7269 44.5794 17.2894 43.5742C14.8518 42.569 12.6371 41.0917 10.7726 39.2274C8.90817 37.3631 7.43072 35.1485 6.42531 32.7111C5.41989 30.2736 4.90636 27.6615 4.91424 25.0248C4.92213 22.3882 5.45128 19.7791 6.47126 17.3477C7.49124 14.9164 8.98191 12.7107 10.8575 10.8575C14.6083 7.1067 19.6955 4.99951 25 4.99951C30.3045 4.99951 35.3917 7.1067 39.1425 10.8575C42.8933 14.6084 45.0005 19.6956 45.0005 25C45.0005 30.3045 42.8933 35.3892 39.1425 39.14Z" fill="white" />
            </svg>
            <p className='text-xl text-white  text-center font-poppins not-italic font-semibold leading-normal'>Sport Center</p>
            </div>
            <div className='text-white'>
              <p className='text-base text-white  text-justify font-poppins not-italic font-normal leading-normal'>Create your sports center field booking application. Suitable for futsal, mini soccer, badminton, tennis, golf, basketball, to table tennis. Give your customers the freedom to</p>
              <div className='text-base text-white text-justify font-poppins not-italic font-normal leading-normal pl-6 mt-12'>
                <p className='list-item'> Choose a booking schedule</p>
                <p className='list-item'> Online payments</p>
                <p className='list-item'> Automatic scheduling system</p>
                <p className='list-item'> Search for Friends feature</p>
                <p className='list-item'> Split Payment with team members</p>
                <p className='list-item'> Information and announcements from you</p>
              </div>
            </div>
          </div>
          <div>
          <div className='flex gap-5 items-center mb-2.5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
              <path d="M40.625 3.90625H14.0625C12.1977 3.90625 10.4093 4.64704 9.09066 5.96566C7.77204 7.28427 7.03125 9.0727 7.03125 10.9375V43.75C7.03125 44.3716 7.27818 44.9677 7.71772 45.4073C8.15726 45.8468 8.7534 46.0938 9.375 46.0938H37.5C38.1216 46.0938 38.7177 45.8468 39.1573 45.4073C39.5968 44.9677 39.8438 44.3716 39.8438 43.75C39.8438 43.1284 39.5968 42.5323 39.1573 42.0927C38.7177 41.6532 38.1216 41.4062 37.5 41.4062H11.7188V40.625C11.7188 40.0034 11.9657 39.4073 12.4052 38.9677C12.8448 38.5282 13.4409 38.2812 14.0625 38.2812H40.625C41.2466 38.2812 41.8427 38.0343 42.2823 37.5948C42.7218 37.1552 42.9688 36.5591 42.9688 35.9375V6.25C42.9688 5.6284 42.7218 5.03226 42.2823 4.59272C41.8427 4.15318 41.2466 3.90625 40.625 3.90625ZM38.2812 33.5938H14.0625C13.2639 33.5922 12.4711 33.7283 11.7188 33.9961V10.9375C11.7188 10.3159 11.9657 9.71976 12.4052 9.28022C12.8448 8.84068 13.4409 8.59375 14.0625 8.59375H38.2812V33.5938Z" fill="white" />
            </svg>
            <p className='text-xl text-white  text-center font-poppins not-italic font-semibold leading-normal'>Booking</p>
          </div>
          <div>
          <p className='text-base text-white  text-justify font-poppins not-italic font-normal leading-normal'>Offer your services in your own application to place orders to delivery directly to the client's house. Suitable for ac service, cleaning, cleaning service, CCTV, massage, and even other digital services. Features that can be made:</p>
          <div className='text-base text-white text-justify font-poppins not-italic font-normal leading-normal pl-6 mt-12'>
            <p className='list-item'>Memilih jenis dan kategori jasa yang dikehendaki</p>
            <p className='list-item'>Melakukan reservasi online dan pembayaran dengan metode pembayaran digital</p>
            <p className='list-item'>Penjadwalan dengan tim lapangan</p>
            <p className='list-item'>Aplikasi khusus untuk tim</p>
            <p className='list-item'>Promosi dan Kode voucher khusus</p>
          </div>
          </div>
          </div>
        </div>
      </div>

      {/* //List Icon// */}
      <div className='flex gap-6 m-auto items-center mb-24'>
        <div className='flex gap-1 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
            <path d="M43.5664 13.2861V7.03125C43.5664 6.16699 42.8682 5.46875 42.0039 5.46875H8.99609C8.13184 5.46875 7.43359 6.16699 7.43359 7.03125V13.2861C6.61816 13.335 5.96875 14.0137 5.96875 14.8438V21.2744C5.96562 22.4563 6.20493 23.6262 6.67187 24.7119C6.88184 25.21 7.14062 25.6787 7.43359 26.123V42.9688C7.43359 43.8281 8.13184 44.5312 8.99609 44.5312H42.0039C42.8682 44.5312 43.5664 43.833 43.5664 42.9688V26.123C43.864 25.6776 44.119 25.2051 44.3281 24.7119C44.792 23.623 45.0312 22.4658 45.0312 21.2744V14.8438C45.0312 14.0137 44.3818 13.335 43.5664 13.2861ZM10.9492 8.98438H40.0508V13.2812H10.9492V8.98438ZM28.625 41.0205H22.375V35.9375H28.625V41.0205ZM40.0508 41.0205H31.75V34.375C31.75 33.5107 31.0518 32.8125 30.1875 32.8125H20.8125C19.9482 32.8125 19.25 33.5107 19.25 34.375V41.0205H10.9492V29.1943C11.0908 29.2627 11.2373 29.3311 11.3887 29.3897C12.4775 29.8486 13.6348 30.0781 14.8262 30.0781C16.0176 30.0781 17.1699 29.8486 18.2637 29.3897C18.9375 29.1064 19.5723 28.7451 20.1533 28.3105C20.1631 28.3057 20.1729 28.3057 20.1826 28.3105C20.7655 28.747 21.4002 29.1094 22.0723 29.3897C23.1611 29.8486 24.3184 30.0781 25.5098 30.0781C26.7012 30.0781 27.8535 29.8486 28.9473 29.3897C29.6211 29.1064 30.2559 28.7451 30.8369 28.3105C30.8467 28.3057 30.8564 28.3057 30.8662 28.3105C31.4491 28.747 32.0838 29.1094 32.7559 29.3897C33.8447 29.8486 35.002 30.0781 36.1934 30.0781C37.3848 30.0781 38.5371 29.8486 39.6309 29.3897C39.7773 29.3262 39.9238 29.2627 40.0703 29.1943V41.0205H40.0508ZM41.5156 21.2744C41.5156 24.1943 39.123 26.5625 36.1787 26.5625C34.1865 26.5625 32.4482 25.4834 31.5303 23.8818C31.3887 23.6377 31.1348 23.4863 30.8516 23.4863H30.8223C30.5439 23.4863 30.2852 23.6377 30.1436 23.8818C29.6751 24.6988 28.9987 25.3772 28.1831 25.848C27.3675 26.3189 26.4417 26.5654 25.5 26.5625C23.5127 26.5625 21.7793 25.4883 20.8613 23.8916C20.7148 23.6426 20.4512 23.4863 20.1631 23.4863C19.875 23.4863 19.6064 23.6426 19.4648 23.8916C18.9937 24.7055 18.3164 25.3808 17.5012 25.8497C16.686 26.3186 15.7617 26.5644 14.8213 26.5625C11.877 26.5625 9.48437 24.1943 9.48437 21.2744V16.8213C9.48437 16.8066 9.49414 16.7969 9.50879 16.7969H41.4912C41.5059 16.7969 41.5156 16.8066 41.5156 16.8213V21.2744Z" fill="white" />
          </svg>
          <p className='text-xl text-white  text-center font-poppins not-italic font-semibold leading-normal'>E-commerce</p>
        </div>
        <div className='flex gap-1 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
            <path d="M38 31.25H33.8333V35.4167H38M38 22.9167H33.8333V27.0833H38M42.1667 39.5833H25.5V35.4167H29.6667V31.25H25.5V27.0833H29.6667V22.9167H25.5V18.75H42.1667M21.3333 14.5833H17.1667V10.4167H21.3333M21.3333 22.9167H17.1667V18.75H21.3333M21.3333 31.25H17.1667V27.0833H21.3333M21.3333 39.5833H17.1667V35.4167H21.3333M13 14.5833H8.83333V10.4167H13M13 22.9167H8.83333V18.75H13M13 31.25H8.83333V27.0833H13M13 39.5833H8.83333V35.4167H13M25.5 14.5833V6.25H4.66667V43.75H46.3333V14.5833H25.5Z" fill="white" />
          </svg>
          <p className='text-xl text-white  text-center font-poppins not-italic font-semibold leading-normal'>Company Profile</p>
        </div>
        <div className='flex gap-1 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
            <g clip-path="url(#clip0_0_197)">
              <path d="M23.7143 39.2858H27.2857M36.2143 17.8572V10.7143M20.1429 17.8572V5.3572H9.42857V17.8572M43.3571 6.25005C43.3571 6.83631 43.2417 7.41683 43.0173 7.95846C42.793 8.50009 42.4641 8.99223 42.0496 9.40678C41.635 9.82133 41.1429 10.1502 40.6013 10.3745C40.0596 10.5989 39.4791 10.7143 38.8929 10.7143H33.5357C32.3517 10.7143 31.2162 10.244 30.379 9.40678C29.5418 8.56956 29.0714 7.43405 29.0714 6.25005C29.0714 5.06605 29.5418 3.93054 30.379 3.09333C31.2162 2.25611 32.3517 1.78577 33.5357 1.78577H38.8929C39.4791 1.78577 40.0596 1.90124 40.6013 2.12559C41.1429 2.34994 41.635 2.67878 42.0496 3.09333C42.4641 3.50787 42.793 4.00001 43.0173 4.54164C43.2417 5.08328 43.3571 5.66379 43.3571 6.25005Z" stroke="white" stroke-width="3.57143" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M45.1429 30.3572H5.85715C3.8847 30.3572 2.28572 31.9562 2.28572 33.9286V44.6429C2.28572 46.6153 3.8847 48.2143 5.85715 48.2143H45.1429C47.1153 48.2143 48.7143 46.6153 48.7143 44.6429V33.9286C48.7143 31.9562 47.1153 30.3572 45.1429 30.3572Z" stroke="white" stroke-width="3.57143" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M45.1429 30.3572V21.4286C45.1429 20.4814 44.7666 19.573 44.0968 18.9032C43.427 18.2335 42.5186 17.8572 41.5714 17.8572H9.42858C8.48137 17.8572 7.57297 18.2335 6.90319 18.9032C6.23342 19.573 5.85715 20.4814 5.85715 21.4286V30.3572" stroke="white" stroke-width="3.57143" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_0_197">
                <rect width="50" height="50" fill="white" transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>
          <p className='text-xl text-white  text-center font-poppins not-italic font-semibold leading-normal'>Cashier</p>
        </div>
        <div className='flex gap-1 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
            <path d="M42.6875 8.59375H8.3125C7.2765 8.59375 6.28293 9.0053 5.55037 9.73786C4.8178 10.4704 4.40625 11.464 4.40625 12.5V43.75C4.40313 44.4939 4.61442 45.2229 5.01484 45.8499C5.41525 46.4768 5.98784 46.9751 6.66407 47.2852C7.18316 47.5282 7.7491 47.6548 8.32227 47.6562C9.23951 47.6539 10.1264 47.3274 10.8262 46.7344L10.8633 46.7031L16.9063 41.4062H42.6875C43.7235 41.4062 44.7171 40.9947 45.4496 40.2621C46.1822 39.5296 46.5938 38.536 46.5938 37.5V12.5C46.5938 11.464 46.1822 10.4704 45.4496 9.73786C44.7171 9.0053 43.7235 8.59375 42.6875 8.59375ZM41.9063 36.7188H16.6133C15.6937 36.7187 14.8036 37.0431 14.0996 37.6348L14.0625 37.666L9.09375 42.0195V13.2812H41.9063V36.7188Z" fill="white" />
          </svg>
          <p className='text-xl text-white  text-center font-poppins not-italic font-semibold leading-normal'>Chat</p>
        </div>
        <div className='flex gap-1 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
            <path d="M20.125 14.375C19.0781 14.375 18.2031 15.0937 17.9688 16.0625C17.8906 16.3281 18.1094 16.6094 18.3906 16.6094H19.0781C19.0214 16.3982 19.0139 16.1768 19.0563 15.9622C19.0988 15.7477 19.19 15.5458 19.3229 15.3721C19.4558 15.1985 19.6268 15.0577 19.8228 14.9606C20.0188 14.8636 20.2344 14.8129 20.4531 14.8125C21.25 14.8125 21.875 15.4531 21.875 16.2344C21.875 16.3594 21.8594 16.4844 21.8281 16.6094H21.9531C22.1875 16.6094 22.3594 16.4063 22.3125 16.1719C22.1094 15.1406 21.2031 14.375 20.125 14.375ZM27.7656 14.375C28.8125 14.375 29.6875 15.0937 29.9219 16.0625C29.9844 16.3438 29.7813 16.6094 29.5 16.6094H28.8125C28.8693 16.3982 28.8767 16.1768 28.8343 15.9622C28.7919 15.7477 28.7007 15.5458 28.5678 15.3721C28.4349 15.1985 28.2638 15.0577 28.0678 14.9606C27.8719 14.8636 27.6562 14.8129 27.4375 14.8125C27.2502 14.8104 27.0644 14.8458 26.8909 14.9165C26.7175 14.9872 26.5599 15.0918 26.4274 15.2243C26.295 15.3567 26.1903 15.5143 26.1196 15.6878C26.0489 15.8612 26.0135 16.0471 26.0156 16.2344C26.0156 16.3594 26.0313 16.4844 26.0625 16.6094H25.9375C25.883 16.6107 25.8288 16.5996 25.7792 16.5768C25.7296 16.5541 25.6858 16.5204 25.6512 16.4782C25.6166 16.436 25.592 16.3866 25.5793 16.3335C25.5667 16.2804 25.5663 16.2251 25.5781 16.1719C25.7813 15.1406 26.6719 14.375 27.7656 14.375Z" fill="white" />
            <path d="M20.4531 15.4062C20.5932 15.4047 20.7313 15.4398 20.8537 15.508C20.9762 15.5761 21.0787 15.675 21.1512 15.7949C21.2238 15.9148 21.2639 16.0515 21.2675 16.1915C21.2711 16.3316 21.2382 16.4702 21.1719 16.5937H19.7344C19.6692 16.4692 19.6372 16.33 19.6416 16.1896C19.646 16.0492 19.6865 15.9122 19.7594 15.7921C19.7788 15.8221 19.8044 15.8477 19.8345 15.867C19.8646 15.8863 19.8984 15.8989 19.9338 15.904C19.9692 15.9091 20.0053 15.9065 20.0396 15.8965C20.0739 15.8865 20.1056 15.8692 20.1327 15.8458C20.1598 15.8225 20.1815 15.7936 20.1965 15.7611C20.2114 15.7287 20.2193 15.6934 20.2194 15.6576C20.2196 15.6219 20.2121 15.5865 20.1974 15.5539C20.1827 15.5213 20.1612 15.4923 20.1344 15.4687C20.2354 15.4268 20.3438 15.4056 20.4531 15.4062ZM27.4375 15.4062C27.336 15.406 27.2354 15.4245 27.1406 15.4609C27.1695 15.4844 27.1928 15.5141 27.2087 15.5478C27.2246 15.5815 27.2328 15.6183 27.2326 15.6555C27.2325 15.6928 27.224 15.7295 27.2079 15.7631C27.1917 15.7967 27.1683 15.8262 27.1392 15.8495C27.1102 15.8728 27.0763 15.8894 27.04 15.8979C27.0038 15.9065 26.966 15.9068 26.9296 15.8989C26.8932 15.891 26.8591 15.8751 26.8296 15.8523C26.8001 15.8295 26.7762 15.8004 26.7594 15.7671C26.6795 15.8887 26.6336 16.0295 26.6265 16.1749C26.6193 16.3202 26.6512 16.4648 26.7188 16.5937H28.1563C28.2225 16.4702 28.2555 16.3316 28.2519 16.1915C28.2482 16.0515 28.2082 15.9148 28.1356 15.7949C28.0631 15.675 27.9605 15.5761 27.8381 15.508C27.7157 15.4398 27.5776 15.4047 27.4375 15.4062ZM23.4531 16.1093L22.625 18.7812C22.4531 19.328 22.8594 19.8905 23.4375 19.8905H24.6563C25.2344 19.8905 25.6406 19.328 25.4688 18.7812L24.6406 16.1093C24.4688 15.5155 23.6406 15.5155 23.4531 16.1093ZM21.625 20.8124C22.2969 21.1718 23.0938 21.3749 23.9375 21.3749C24.7969 21.3749 25.5781 21.1718 26.25 20.8124C26.4688 20.703 26.7188 20.953 26.5781 21.1718C26.0156 22.0312 25.0469 22.6093 23.9375 22.6093C22.8281 22.6093 21.8594 22.0312 21.2969 21.1718C21.1563 20.953 21.3906 20.6874 21.625 20.8124Z" fill="white" />
            <path d="M31.4062 4.77808C29.9844 3.38745 27.8281 2.83276 25.5781 2.83276H22.2812C20.0312 2.83276 17.875 3.38589 16.4531 4.77808C15.3594 5.84683 14.7656 7.8062 15.2031 10.0093L15.3094 9.99683C15.1031 10.1718 14.8984 10.3562 14.6969 10.5484L14.175 11.0437L14.9328 11.9859L14.9531 12.8359C14.9562 12.9609 14.9625 13.0859 14.9703 13.2109L14.9937 13.5453C14.3886 13.8346 13.8845 14.2993 13.547 14.8789C13.2094 15.4585 13.0539 16.1262 13.1007 16.7953C13.1476 17.4644 13.3946 18.104 13.8096 18.6309C14.2247 19.1578 14.7886 19.5477 15.4281 19.75L15.5797 21.9296L15.5812 21.95C15.6516 22.6671 15.8359 23.3375 16.1141 23.9468C16.2812 24.3125 16.4828 24.6562 16.7156 24.9734L16.1562 25.2C13.095 26.6557 10.5114 28.9528 8.70736 31.8226C6.90334 34.6924 5.95346 38.0165 5.96875 41.4062V46.875C5.96875 47.0822 6.05106 47.2809 6.19757 47.4274C6.34408 47.5739 6.5428 47.6562 6.75 47.6562H41.1094C41.1797 47.6562 41.25 47.6453 41.3187 47.625H41.3281C41.8959 47.625 42.4403 47.3994 42.8418 46.998C43.2432 46.5965 43.4688 46.0521 43.4688 45.4843V39.9968C43.4687 39.9107 43.4635 39.8246 43.4531 39.739V36.8406C43.4522 36.4715 43.3643 36.1079 43.1965 35.7791C43.0288 35.4504 42.7859 35.1658 42.4876 34.9485C42.1893 34.7311 41.844 34.5872 41.4796 34.5283C41.1153 34.4693 40.7422 34.4971 40.3906 34.6093V32.9156C40.3906 32.7593 40.4844 32.6031 40.625 32.525C41.8594 31.8687 42.6875 30.5718 42.6875 29.0875C42.6719 27.6343 41.8438 26.3375 40.625 25.6812C40.3281 25.525 39.9531 25.7281 39.9531 26.0718V28.4937C39.9531 29.15 39.4219 29.6968 38.7656 29.6812C38.4596 29.675 38.1683 29.5486 37.9549 29.3293C37.7414 29.11 37.6229 28.8154 37.625 28.5093V26.0718C37.625 25.7281 37.25 25.5093 36.9531 25.6656C36.3855 25.9695 35.9025 26.4101 35.5478 26.9475C35.1932 27.4849 34.9781 28.1023 34.9219 28.7437V29.4453C35.0453 30.7968 35.875 31.9578 37.0312 32.5562C37.1719 32.6343 37.2656 32.7906 37.2656 32.9468V37.8593H36.1719C36.1049 37.8596 36.0382 37.8686 35.9734 37.8859C35.5893 37.9246 35.2244 38.0726 34.9219 38.3125V32.9171C34.2953 32.287 33.8329 31.5127 33.5755 30.6622C33.318 29.8116 33.2733 28.9109 33.4453 28.039L33.4578 28.0484C33.5606 27.5197 33.7417 27.0094 33.9953 26.5343C33.2641 26.0343 32.4984 25.5859 31.7031 25.1968L31.7234 25.1687C31.5193 25.1041 31.3117 25.0509 31.1016 25.0093C31.7595 24.1141 32.1609 23.0563 32.2625 21.95V21.9296L32.4156 19.7562C33.0594 19.5566 33.6278 19.167 34.0463 18.6387C34.4649 18.1103 34.7139 17.4679 34.7609 16.7955C34.8079 16.1231 34.6505 15.4522 34.3095 14.8708C33.9685 14.2894 33.4598 13.8246 32.85 13.5375L32.8734 13.2093C32.8812 13.0937 32.8875 12.9781 32.8906 12.8625L32.9141 12.0781L33.7469 11.0437L33.225 10.5484C33.0289 10.3617 32.8272 10.1809 32.6203 10.0062L32.6562 10.0093C33.0937 7.8187 32.5 5.84683 31.4062 4.77808ZM31.2531 13.9859L30.7062 21.8093C30.4734 24.15 28.6453 25.7812 26.4375 25.7812H21.4062C20.6495 25.7864 19.9054 25.5876 19.2521 25.2057C18.5988 24.8238 18.0605 24.2729 17.6937 23.6109C17.3863 23.0551 17.1969 22.4417 17.1375 21.8093L16.5906 13.9843C17.0578 14.0265 17.5406 13.9375 17.9766 13.7046L17.9937 13.6953C18.1517 13.8439 18.3613 13.9251 18.5781 13.9218C18.75 13.9218 18.9375 13.875 19.0937 13.7656C19.125 13.7343 19.9062 13.1562 21.0781 13.3125C21.2047 13.3275 21.333 13.3142 21.4538 13.2735C21.5746 13.2328 21.6849 13.1658 21.7765 13.0772C21.8682 12.9887 21.9391 12.8809 21.9839 12.7616C22.0288 12.6423 22.0466 12.5145 22.0359 12.3875C23.2969 12.2031 24.5781 12.2031 25.8391 12.3875C25.8284 12.5145 25.8462 12.6423 25.8911 12.7616C25.9359 12.8809 26.0068 12.9887 26.0985 13.0772C26.1901 13.1658 26.3004 13.2328 26.4212 13.2735C26.542 13.3142 26.6703 13.3275 26.7969 13.3125C27.9203 13.1765 28.6875 13.7031 28.775 13.7609L28.7812 13.7656C28.9375 13.875 29.1094 13.9375 29.2969 13.9375C29.5174 13.933 29.7291 13.8499 29.8937 13.7031C30.3219 13.9359 30.7953 14.025 31.2531 13.9859ZM32.5422 17.9468L32.7234 15.3468C32.8909 15.5252 33.0198 15.7363 33.1019 15.9668C33.184 16.1973 33.2176 16.4423 33.2005 16.6864C33.1835 16.9305 33.1163 17.1685 33.003 17.3854C32.8897 17.6022 32.7328 17.7934 32.5422 17.9468ZM15.3 17.9343C15.114 17.7808 14.9612 17.5911 14.8509 17.3766C14.7405 17.1622 14.6749 16.9275 14.6581 16.687C14.6413 16.4464 14.6736 16.2049 14.7531 15.9772C14.8325 15.7495 14.9575 15.5403 15.1203 15.3625L15.3 17.9343ZM27.7344 27.2015C28.3312 27.0671 28.8937 26.8421 29.4062 26.539V32.9375C29.4062 32.9687 29.3984 32.9843 29.3937 32.9937C29.3847 33.007 29.3723 33.0178 29.3578 33.025C29.3434 33.0326 29.3272 33.0364 29.3109 33.0359C29.3001 33.0355 29.2894 33.0329 29.2797 33.0281L25.3984 29.6765C25.9447 29.4593 26.4369 29.1251 26.8404 28.6976C27.2439 28.2701 27.549 27.7594 27.7344 27.2015ZM25.5437 27.3437H25.9344C25.71 27.6663 25.411 27.9299 25.0627 28.1119C24.7145 28.294 24.3273 28.389 23.9344 28.389C23.5414 28.389 23.1543 28.294 22.806 28.1119C22.4578 27.9299 22.1587 27.6663 21.9344 27.3437H25.5437ZM18.4687 26.5578C18.9812 26.8562 19.5422 27.0781 20.1375 27.2078C20.3215 27.7658 20.6262 28.2765 21.0299 28.7035C21.4337 29.1304 21.9265 29.4632 22.4734 29.6781L18.5937 33.0281C18.5845 33.0327 18.5744 33.0353 18.5641 33.0359C18.5478 33.0364 18.5316 33.0326 18.5172 33.025C18.5027 33.0178 18.4903 33.007 18.4812 32.9937C18.4717 32.9766 18.4673 32.957 18.4687 32.9375V26.5578ZM18.5172 9.77651C20.222 8.98326 22.0796 8.57212 23.96 8.57185C25.8403 8.57158 27.698 8.98219 29.4031 9.77495C30.1859 10.1437 30.9078 10.6046 31.6156 11.2015L31.4375 11.4203L31.4344 11.4265C31.3186 11.5705 31.1556 11.6688 30.9743 11.704C30.7929 11.7392 30.6049 11.709 30.4437 11.6187H30.4406C28.4568 10.5328 26.2303 9.96676 23.9688 9.97339C21.7073 9.96628 19.4809 10.5318 17.4969 11.6171L17.4937 11.6203C17.3281 11.7104 17.136 11.7396 16.951 11.7028C16.766 11.666 16.5998 11.5654 16.4812 11.4187L16.3062 11.2C16.9717 10.6253 17.7143 10.1467 18.5125 9.77808L18.5172 9.77495V9.77651ZM31.6875 26.9453V35.2968C31.6875 35.6562 31.4062 35.9375 31.0469 35.9375H16.875C16.5156 35.9375 16.2344 35.6562 16.2344 35.2968V26.9093C16.4547 26.7921 16.6797 26.6812 16.9062 26.575V32.9375C16.9062 34.2921 18.4187 35.0625 19.5125 34.2968L19.5437 34.2734L23.8 30.5968C23.8383 30.5639 23.887 30.5459 23.9375 30.5459C23.988 30.5459 24.0367 30.5639 24.075 30.5968L28.3312 34.2734L28.3625 34.2953C29.4562 35.064 30.9687 34.2921 30.9687 32.9375V26.5812C31.2109 26.6968 31.4516 26.8171 31.6875 26.9453ZM13 29.1515V46.0937H7.53125V41.4062C7.52159 39.0925 8.00423 36.8033 8.9471 34.6905C9.88997 32.5776 11.2715 30.6895 13 29.1515ZM41.8906 37.7921H40.3906V36.5375C40.4509 36.3964 40.551 36.2761 40.6786 36.1911C40.8063 36.1062 40.956 36.0604 41.1094 36.0593C41.5375 36.0593 41.8906 36.4124 41.8906 36.8406V37.7921ZM36.1719 46.0625C35.9297 46.0625 35.7594 45.8781 35.75 45.6937C35.7491 45.6239 35.7653 45.555 35.7972 45.4929C35.8291 45.4308 35.8756 45.3774 35.9328 45.3375C36.0416 45.2649 36.1305 45.1662 36.1913 45.0503C36.252 44.9345 36.2827 44.8052 36.2805 44.6744C36.2784 44.5437 36.2434 44.4155 36.1788 44.3018C36.1142 44.188 36.0221 44.0923 35.9109 44.0234C35.8599 43.991 35.8182 43.9459 35.79 43.8924C35.7617 43.839 35.748 43.7791 35.75 43.7187C35.75 43.5968 35.8187 43.475 35.9266 43.4062C36.0371 43.3344 36.1276 43.2359 36.1898 43.1197C36.252 43.0035 36.2838 42.8735 36.2823 42.7417C36.2807 42.61 36.2458 42.4807 36.1809 42.3661C36.116 42.2514 36.0231 42.155 35.9109 42.0859C35.8599 42.0535 35.8182 42.0084 35.79 41.9549C35.7617 41.9015 35.748 41.8416 35.75 41.7812C35.75 41.6593 35.8187 41.5375 35.9266 41.4687C36.0352 41.3981 36.1246 41.3016 36.1867 41.1879C36.2488 41.0742 36.2816 40.9468 36.2822 40.8173C36.2829 40.6877 36.2513 40.56 36.1903 40.4457C36.1293 40.3314 36.0408 40.2341 35.9328 40.1625C35.8761 40.1268 35.8295 40.0772 35.7975 40.0184C35.7655 39.9596 35.7491 39.8935 35.75 39.8265V39.8156C35.7547 39.6281 35.9266 39.4375 36.1719 39.4375C36.2243 39.4375 36.2767 39.4323 36.3281 39.4218H41.3281C41.6094 39.4218 41.8438 39.6218 41.8953 39.8875L41.9062 40.0031V45.4843C41.9062 45.6377 41.8453 45.7847 41.7369 45.8931C41.6285 46.0015 41.4814 46.0625 41.3281 46.0625H36.1719ZM21.9062 40.2187C21.9062 41.3437 21.0156 42.2343 19.8906 42.2343H17.625C16.5156 42.2343 15.6094 41.3281 15.6094 40.2187C15.6094 39.1093 16.5156 38.2031 17.625 38.2031H19.8906C21 38.2031 21.9062 39.1093 21.9062 40.2187Z" fill="white" />
          </svg>
          <p className='text-xl text-white  text-center font-poppins not-italic font-semibold leading-normal'>Workshop</p>
        </div>
        <div className='flex gap-1 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2 4.16663H31.7C31.9762 4.16663 32.2412 4.27637 32.4365 4.47172C32.6319 4.66707 32.7416 4.93203 32.7416 5.20829V5.72913H33.8333V4.16663H38V11.4583H33.8333V9.89579H32.7416V10.4166C32.7416 10.6929 32.6319 10.9578 32.4365 11.1532C32.2412 11.3485 31.9762 11.4583 31.7 11.4583H28.9229V21.0968L30.1625 22.3364V43.0062C30.1625 43.835 29.8332 44.6299 29.2472 45.2159C28.6611 45.802 27.8663 46.1312 27.0375 46.1312H25.0041C24.1753 46.1312 23.3805 45.802 22.7944 45.2159C22.2084 44.6299 21.8791 43.835 21.8791 43.0062V22.3364L23.1187 21.0968V11.4583H21.2833C20.7308 11.4583 20.2009 11.2388 19.8102 10.8481C19.4195 10.4574 19.2 9.92749 19.2 9.37496V6.24996C17.8273 6.26314 16.5154 6.81768 15.5494 7.79301C14.5834 8.76834 14.0416 10.0856 14.0416 11.4583H11.9583C11.9583 9.53305 12.7196 7.68593 14.0763 6.3199C15.4329 4.95388 17.2748 4.17983 19.2 4.16663ZM30.6583 6.24996H21.2833V9.37496H30.6583V6.24996ZM25.2021 11.4583H26.8396V21.9583L28.0791 23.1989V43.0062C28.0791 43.2825 27.9694 43.5474 27.774 43.7428C27.5787 43.9381 27.3137 44.0479 27.0375 44.0479H25.0041C24.7279 44.0479 24.4629 43.9381 24.2676 43.7428C24.0722 43.5474 23.9625 43.2825 23.9625 43.0062V23.1979L25.2021 21.9583V11.4583Z" fill="white" />
          </svg>
          <p className='text-xl text-white  text-center font-poppins not-italic font-semibold leading-normal'>Construction</p>
        </div>
        <p className='text-xl text-white  text-center font-poppins not-italic font-semibold leading-normal'>and many others</p>
      </div>


      {/* //Create Website// */}
      <div className='mb-20'>
        <p className='text-white text-center font-poppins text-2xl not-italic font-semibold leading-normal mb-8'>Start Creating Websites or Mobile Apps For You Now</p>
        <div className='flex gap-24 justify-center'>
          <div className='flex '>
            <div className='bg-white rounded-l-lg'>
              <p className='text-slate-800 text-2xl  text-center font-poppins not-italic font-semibold leading-normal mb-8 mt-8 m-auto'>Website</p>
              <p className='text-slate-800 text-base  text-center font-poppins not-italic font-semibold leading-normal mb-0.5 m-auto'>Start From</p>
              <div className='flex'>
                <p className='line-red bg-red-700 text-slate-600 text-sm  text-center font-poppins not-italic font-normal leading-normal mb-0.5 m-auto'>Rp 1.000.000</p>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                    <g clip-path="url(#clip0_0_59)">
                      <path d="M8.37943 21.2113C8.28817 20.9121 8.18448 20.5722 8.03576 20.465C7.76651 20.3542 7.47233 20.3182 7.1843 20.3607L7.19134 20.3594C6.85176 20.393 6.50892 20.353 6.18623 20.242L6.17681 20.2385L6.16924 20.2351C6.07391 20.1911 5.98823 20.1288 5.91713 20.0516L5.92097 20.0552C5.62083 19.7292 5.66882 19.23 5.71733 18.7475C5.77545 18.4704 5.76403 18.1831 5.6841 17.9115L5.68491 17.9137C5.58344 17.7897 5.44991 17.6959 5.29885 17.6426L5.30187 17.644C5.19143 17.593 5.07178 17.5459 4.95214 17.4989C4.82306 17.4485 4.69469 17.3965 4.57517 17.3413C4.42538 17.2885 4.28749 17.2066 4.16943 17.1004C4.05136 16.9942 3.95544 16.8657 3.88718 16.7223L3.88799 16.7245C3.84738 16.4998 3.85442 16.2691 3.90866 16.0473C3.96291 15.8255 4.06314 15.6176 4.20288 15.437L4.19682 15.4461C4.36067 15.2079 4.46158 14.9321 4.49014 14.6444L4.48793 14.6572C4.37514 14.4024 4.20141 14.1793 3.98207 14.0076L3.97252 14.0004C3.62321 13.6637 3.26122 13.3147 3.28003 12.8726C3.32876 12.652 3.42294 12.444 3.55657 12.2619C3.6902 12.0798 3.86034 11.9275 4.05613 11.8148L4.05101 11.8179C4.29173 11.6599 4.4886 11.4436 4.62334 11.1892L4.62509 11.1854C4.66917 11.0065 4.52752 10.6813 4.40308 10.3943C4.20736 9.9477 4.00629 9.48485 4.19468 9.0771C4.38308 8.66935 4.86587 8.52248 5.33312 8.37943C5.63232 8.28818 5.97215 8.18449 6.07942 8.03577C6.18584 7.76512 6.22183 7.4719 6.18401 7.18355L6.185 7.19135C6.14484 6.96809 6.15179 6.73889 6.20542 6.51848C6.25904 6.29806 6.35815 6.09129 6.49639 5.91143L6.49033 5.92057C6.81627 5.62043 7.31552 5.66842 7.79799 5.71693C8.08805 5.77659 8.37133 5.76152 8.63438 5.68294L8.63217 5.68375C8.83189 5.47548 8.97484 5.21945 9.04734 4.94015L9.04466 4.94993C9.09324 4.72771 9.18748 4.51802 9.32142 4.33416C9.45536 4.15031 9.62606 3.99631 9.82269 3.88195L9.81757 3.88509C9.97142 3.84475 10.1317 3.83519 10.2893 3.85695C10.4468 3.87871 10.5986 3.93136 10.7357 4.01188L10.7312 4.00978C10.8522 4.06571 10.9739 4.13019 11.0956 4.19467C11.2089 4.25531 11.3223 4.31594 11.4327 4.36697C11.572 4.44749 11.7308 4.48813 11.8916 4.48444L11.886 4.48461C12.1346 4.37367 12.3598 4.20229 12.5348 3.9784L12.542 3.96886C12.8795 3.6199 13.2285 3.25791 13.6698 3.27637C13.7728 3.28088 13.874 3.30577 13.9673 3.34959L13.9757 3.35344L13.9749 3.35309C14.289 3.53953 14.5414 3.78007 14.7334 4.05789L14.7253 4.0477C14.8773 4.29223 15.0932 4.49067 15.3496 4.62166L15.3526 4.62306C15.5315 4.66713 15.8567 4.52549 16.1437 4.40105C16.5952 4.20667 17.0588 4.00594 17.4665 4.19434C17.8743 4.38273 18.0212 4.86553 18.1638 5.33353C18.2551 5.63273 18.3588 5.97256 18.5075 6.07983C18.7772 6.18963 19.0712 6.22536 19.3593 6.18332L19.3515 6.18431C19.6913 6.15079 20.0343 6.19122 20.357 6.30282L20.3665 6.30625L20.374 6.30975C20.4724 6.35519 20.5571 6.4182 20.6262 6.49325L20.6223 6.48964C20.9224 6.81558 20.8745 7.31482 20.8259 7.7973C20.7663 8.08736 20.7817 8.36988 20.8592 8.63334L20.8584 8.63112C20.9602 8.75514 21.0943 8.84857 21.2459 8.90105L21.2429 8.89966C21.3533 8.95069 21.473 8.99771 21.5922 9.04548C21.721 9.09669 21.8497 9.14791 21.9692 9.20313C22.1191 9.25607 22.257 9.33802 22.3752 9.44428C22.4934 9.55055 22.5895 9.67905 22.658 9.82246L22.6571 9.82025C22.6973 10.0449 22.69 10.2755 22.6356 10.4972C22.5812 10.7189 22.4811 10.9268 22.3415 11.1074L22.3476 11.0982C22.1836 11.3365 22.0829 11.6125 22.055 11.9003L22.0569 11.8883C22.1667 12.1374 22.3388 12.3629 22.5631 12.5372L22.5726 12.5443C22.9216 12.8818 23.2836 13.2308 23.2651 13.6721C23.2159 13.8925 23.1217 14.1003 22.9882 14.2824C22.8548 14.4645 22.6851 14.617 22.4898 14.7303L22.4949 14.7272C22.2546 14.8833 22.0576 15.0977 21.9224 15.3503L21.9203 15.3549C21.8762 15.5337 22.0179 15.859 22.1423 16.146C22.3385 16.5974 22.5396 17.0602 22.3512 17.468C22.1628 17.8757 21.6797 18.0234 21.2117 18.1661C20.9125 18.2573 20.573 18.3603 20.4654 18.5097C20.3551 18.792 20.3242 19.0834 20.3604 19.3627L20.3598 19.3542C20.4 19.5773 20.3932 19.8063 20.3396 20.0266C20.286 20.2469 20.187 20.4536 20.0488 20.6333L20.0548 20.6242C19.7293 20.9254 19.2296 20.8763 18.7471 20.8278C18.4698 20.7696 18.1824 20.7813 17.9108 20.8618L17.913 20.861C17.7133 21.0693 17.5703 21.3253 17.4978 21.6046L17.5005 21.5948C17.4518 21.8169 17.3576 22.0264 17.2237 22.2101C17.0899 22.3938 16.9193 22.5477 16.7228 22.662L16.7279 22.6589C16.5742 22.6995 16.414 22.7094 16.2564 22.6879C16.0989 22.6665 15.9471 22.6142 15.8098 22.534L15.8144 22.5361C15.6933 22.4801 15.5717 22.4157 15.45 22.3512C15.3393 22.2905 15.2268 22.2331 15.1128 22.1789C14.9737 22.0981 14.8148 22.0574 14.654 22.0614L14.6595 22.0612C14.4052 22.1745 14.1824 22.3483 14.0107 22.5674L14.0036 22.577C13.6661 22.9259 13.3171 23.2879 12.8758 23.2695C12.7727 23.265 12.6716 23.2401 12.5782 23.1963L12.5699 23.1924C12.2691 23.0153 12.0114 22.775 11.8133 22.4876L11.8206 22.4974C11.6687 22.2528 11.4527 22.0546 11.196 21.9242L11.1929 21.9228C11.0141 21.8787 10.6889 22.0204 10.4019 22.1448C9.94996 22.3381 9.48711 22.5392 9.07861 22.3504C8.67011 22.1617 8.52323 21.6789 8.37943 21.2113ZM16.5746 10.4918L9.78331 15.4946C9.76399 15.5089 9.7487 15.5279 9.73895 15.5498C9.72921 15.5718 9.72534 15.5959 9.72773 15.6198C9.73013 15.6436 9.73869 15.6665 9.7526 15.6861C9.7665 15.7056 9.78525 15.7213 9.80702 15.7314L10.4478 16.0274C10.47 16.0378 10.4946 16.0419 10.519 16.0395C10.5434 16.037 10.5667 16.028 10.5864 16.0135L17.3731 11.0067C17.3924 10.9924 17.4077 10.9734 17.4174 10.9515C17.4272 10.9295 17.4311 10.9054 17.4287 10.8815C17.4263 10.8576 17.4177 10.8348 17.4038 10.8152C17.3899 10.7956 17.3711 10.78 17.3494 10.7699L16.7147 10.4766C16.6922 10.4663 16.6674 10.4622 16.6429 10.4648C16.6183 10.4673 16.5945 10.4771 16.5746 10.4918ZM14.452 13.687C14.3192 13.722 14.1957 13.786 14.0905 13.8743C13.9852 13.9627 13.9008 14.0732 13.8432 14.1979L13.004 16.0142C12.8838 16.2745 12.896 16.5619 13.0123 16.8011L13.0131 16.8033C13.1319 17.0547 13.338 17.2683 13.6126 17.3952C13.8872 17.5221 14.1838 17.5398 14.4541 17.4673L14.4519 17.4681C14.712 17.4019 14.9388 17.2249 15.0591 16.9647L15.8979 15.1491C16.0182 14.8889 16.0089 14.6009 15.8971 14.3602L15.8959 14.3587C15.7838 14.0978 15.579 13.8878 15.3211 13.769L15.2976 13.7582L15.2991 13.7589L15.2757 13.7481C15.0174 13.6283 14.7242 13.6071 14.4513 13.6885L14.4532 13.6884L14.452 13.687ZM12.7469 8.94538C12.6141 8.98044 12.4906 9.04442 12.3854 9.13274C12.2801 9.22107 12.1957 9.33156 12.1381 9.45632L11.2993 11.2719C11.1787 11.5329 11.1894 11.8215 11.3061 12.0618L11.3069 12.064C11.4247 12.3176 11.6308 12.5331 11.9062 12.6603C12.1816 12.7876 12.4804 12.8044 12.751 12.7294L12.7488 12.7302C13.0111 12.6632 13.2393 12.485 13.3606 12.2225L14.1974 10.4115C14.3187 10.149 14.3079 9.86033 14.1923 9.61781L14.1912 9.61635C14.0686 9.35095 13.8555 9.1379 13.5901 9.01543C13.3247 8.89296 13.0243 8.86909 12.7429 8.94811L12.7451 8.9473L12.7469 8.94538ZM13.821 16.511C13.8107 16.4906 13.8052 16.4681 13.8048 16.4452C13.8044 16.4222 13.8092 16.3996 13.8188 16.3788L14.658 14.5624C14.6783 14.5185 14.7165 14.4894 14.7591 14.4788C14.8141 14.4628 14.873 14.4672 14.925 14.4912L14.9348 14.4957L14.9341 14.4954L14.9431 14.4996C14.9953 14.5236 15.0371 14.5654 15.0612 14.6175C15.0715 14.6378 15.077 14.6602 15.0774 14.683C15.0779 14.7057 15.0732 14.7283 15.0638 14.749L14.2242 16.5661C14.2147 16.5867 14.2007 16.6049 14.1832 16.6194C14.1657 16.6339 14.1452 16.6443 14.1232 16.6498C14.0669 16.6642 14.0049 16.6594 13.9474 16.6328C13.8899 16.6062 13.846 16.5621 13.8202 16.5088L13.8209 16.5092L13.821 16.511ZM12.1185 11.7716C12.1084 11.7511 12.1029 11.7286 12.1025 11.7057C12.1021 11.6828 12.1069 11.6601 12.1163 11.6393L12.9552 9.82374C12.9755 9.77986 13.0137 9.75072 13.0566 9.73933C13.1128 9.72492 13.1749 9.72972 13.2324 9.75628C13.2899 9.78285 13.3337 9.82698 13.3596 9.88025C13.3699 9.90072 13.3747 9.92289 13.3751 9.94579C13.3754 9.9687 13.3707 9.99139 13.3611 10.0122L12.5219 11.8285C12.5123 11.8492 12.4982 11.8675 12.4806 11.8821C12.4631 11.8967 12.4425 11.9072 12.4204 11.9129C12.3642 11.9273 12.3022 11.9225 12.2447 11.896C12.1872 11.8694 12.1433 11.8253 12.1174 11.772L12.1185 11.7716Z" fill="#FF3939" />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_59">
                        <rect width="20" height="20" fill="white" transform="translate(8.38867) rotate(24.7989)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <p className='text-slate-800 text-sm  text-center font-poppins not-italic font-medium leading-normal mb-0.5 m-auto'>Rp 500.000</p>
              <Button
                label="Order Now"
                // loading={loading || disabled}
                className={'w-44 pr-5 pl-5 pt-3 pb-3 mt-2.5 mb-8 ml-14 mr-14 text-white rounded-full bg-teal-400'}
              />
            </div>
            <Image src={BgCode} />
          </div>
          <div className='flex'>
            <div className='bg-white rounded-l-lg'>
              <p className='text-slate-800 text-2xl  text-center font-poppins not-italic font-semibold leading-normal mb-8 mt-8 m-auto'>Mobile Apps</p>
              <p className='text-slate-800 text-base  text-center font-poppins not-italic font-semibold leading-normal mb-0.5 m-auto'>Start From</p>
              <p className='text-slate-800 text-sm  text-center font-poppins not-italic font-medium leading-normal mb-0.5 m-auto'>Rp 999.000</p>
              <Button
                label="Order Now"
                // loading={loading || disabled}
                className={'w-44 pr-5 pl-5 pt-3 pb-3 mt-2.5 mb-8 ml-14 mr-14 text-white rounded-full bg-teal-400'}
              />
            </div>
            <Image src={BgPhone} />
          </div>
        </div>
      </div>

    </main>
  )
}

export default Home;