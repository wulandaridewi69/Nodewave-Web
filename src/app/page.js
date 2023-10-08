import Image from 'next/image';

import Button from './components/Button';
import Top from '../app/assets/background_top.png';
import Iphone from '../app/assets/iphone.png';
import Minimo from  '../app/assets/mini-mobile.png';
import Minip from  '../app/assets/mini-pc.png';
import MiniCards from './components/MiniCards';

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

const Home = () =>  {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      
      {/* //section-1// */}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
        <g clip-path="url(#clip0_0_27)">
          <path d="M12.7583 13.1223L7.66914 15.5411L10.9665 20.1103C11.0763 20.2599 11.1555 20.4298 11.1993 20.6102C11.2432 20.7905 11.2509 20.9778 11.2221 21.1611C11.1932 21.3445 11.1283 21.5203 11.0312 21.6785C10.934 21.8367 10.8065 21.974 10.656 22.0827C10.5055 22.1913 10.335 22.2691 10.1543 22.3115C9.97359 22.3539 9.78628 22.3602 9.60316 22.3298C9.42003 22.2995 9.24473 22.2332 9.08734 22.1348C8.92996 22.0364 8.79362 21.9078 8.68618 21.7564L4.4017 15.8187C4.28102 15.6515 4.19858 15.4599 4.16022 15.2573C4.12187 15.0547 4.12853 14.8461 4.17974 14.6464C4.23096 14.4467 4.32546 14.2606 4.45657 14.1015C4.58768 13.9423 4.75218 13.814 4.93842 13.7255L11.5514 10.582C11.8878 10.4255 12.2724 10.4082 12.6214 10.534C12.9705 10.6598 13.2557 10.9184 13.4149 11.2535C13.5741 11.5886 13.5944 11.9731 13.4714 12.3231C13.3485 12.6731 13.0921 12.9604 12.7583 13.1223ZM32.1095 20.6924L27.825 14.7547C27.7175 14.6033 27.5812 14.4747 27.4238 14.3763C27.2664 14.2779 27.0911 14.2116 26.908 14.1813C26.7249 14.151 26.5376 14.1572 26.3569 14.1996C26.1762 14.242 26.0056 14.3198 25.8551 14.4284C25.7046 14.5371 25.5771 14.6744 25.48 14.8326C25.3828 14.9908 25.318 15.1666 25.2891 15.35C25.2602 15.5333 25.2679 15.7206 25.3118 15.9009C25.3557 16.0813 25.4348 16.2512 25.5447 16.4008L28.842 20.97L23.7529 23.3888C23.5846 23.4671 23.4335 23.578 23.3082 23.715C23.183 23.852 23.0861 24.0124 23.0232 24.1871C22.9603 24.3617 22.9325 24.547 22.9416 24.7324C22.9506 24.9178 22.9963 25.0996 23.076 25.2673C23.1556 25.4349 23.2677 25.5851 23.4057 25.7093C23.5437 25.8334 23.7049 25.929 23.88 25.9905C24.0551 26.0521 24.2407 26.0783 24.426 26.0678C24.6113 26.0572 24.7927 26.0101 24.9597 25.9291L31.5727 22.7856C31.759 22.6971 31.9235 22.5688 32.0546 22.4096C32.1857 22.2505 32.2802 22.0645 32.3314 21.8647C32.3826 21.665 32.3893 21.4564 32.3509 21.2538C32.3126 21.0513 32.2301 20.8596 32.1095 20.6924ZM25.2432 8.03649C25.0907 7.93222 24.9192 7.85902 24.7384 7.82105C24.5576 7.78309 24.3712 7.78111 24.1896 7.81522C24.0081 7.84934 23.8351 7.91888 23.6804 8.01989C23.5258 8.12089 23.3925 8.25137 23.2883 8.40387L10.9006 26.5198C10.6904 26.8276 10.6111 27.2064 10.68 27.5727C10.749 27.9391 10.9606 28.2631 11.2683 28.4735C11.4032 28.5667 11.5536 28.6352 11.7125 28.6757C11.9921 28.7474 12.2871 28.7314 12.5573 28.6297C12.8275 28.528 13.0599 28.3456 13.2228 28.1072L25.6105 9.99134C25.7148 9.83887 25.788 9.66735 25.826 9.48658C25.8639 9.30582 25.8659 9.11934 25.8318 8.93781C25.7977 8.75628 25.7281 8.58324 25.6271 8.42859C25.5261 8.27394 25.3957 8.1407 25.2432 8.03649Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_0_27">
            <rect width="30" height="30" fill="white" transform="translate(7.45123) rotate(14.3813)"/>
          </clipPath>
        </defs>      
      </svg>

    <p className='text-white text-left font-poppins text-5xl not-italic font-semibold leading-normal mb-2'>
        Make Your Own<br/>
        Website and Mobile Application<br/>
        With Nodewave
      </p>
      <Button
        label="Get Started Now"
        // loading={loading || disabled}
        className={'w-44 pr-5 pl-5 pt-3 pb-3 mt-2.5 mb-8 rounded-full bg-teal-400'} 
      />
      <p className='text-white text-left font-poppins text-sm not-italic font-semibold leading-normal'>
        Create Mobile Applications and Websites for Companies or Your Business<br/>
        Have a transparent pricing, easy and straightforward development process
      </p>
      <Image src={Top} className='absolute right-0 top-0'/>
      </div>

      {/* //Our Product// */}
      <div className='mt-40'>
        <p className='text-white text-center font-poppins text-sm not-italic font-semibold leading-normal'>Our Product</p>
        <div className='flex gap-8'>
          <div>
            <div className='bg-white w-1/2 flex gap-4'>
              <Image src={Minimo}/>
              <div>
                <p>Mobile Apps</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13.75 3.75L18.75 10M18.75 10L13.75 16.25M18.75 10H1.25" stroke="#FFB347" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div className='bg-black w-1/2 flex gap-4'>
              <Image src={Minip}/>
              <div>
                  <p>Website</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13.75 3.75L18.75 10M18.75 10L13.75 16.25M18.75 10H1.25" stroke="#FFB347" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className='bg-white w-1/2'>
            <div className='flex gap-8'>
              <Image src={Iphone}/>
              <Image src={Iphone}/>
              <Image src={Iphone}/>
            </div>
            <p>Mobile Apps</p>
            <p>Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur sesuka anda. 
              Bisa untuk aplikasi transaksi jual beli, Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.</p>
            <Button
              label="Pelajari Selengkapnya"
              // loading={loading || disabled}
              className={'w-44 pr-5 pl-5 pt-3 pb-3 mt-2.5 mb-8 rounded-full bg-teal-400 text-white'} 
            />
          </div>
        </div>
      </div>

      {/* //testimony// */}
      <div>
        <p className='text-white text-center font-poppins text-sm not-italic font-semibold leading-normal'>Testimony</p>
        <div className="flex gap-8 mb-12 flex-nowrap">
        {data.result.map((item) => {
          return <MiniCards
            id={item.id}
            description={item.description}
            name={item.name}
          />
        })}
          </div>

      </div>

    </main>
  )
}

export default Home;