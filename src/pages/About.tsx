import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const About = () => {
  return (
    <>
      <SEO
        title="About MacrocosmTech - Building the Future, One Line of Code at a Time"
        description="We are a software agency dedicated to creating innovative solutions and ensuring client success through cutting-edge technology. Learn about our story, mission, values, and team."
        path="/about"
      />
      <main className="flex flex-col gap-16 md:gap-24">
        <section
          className="min-h-[520px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-6 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.7) 0%, rgba(16, 22, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQDl_dMyDBIZURciGsXh1_xwLstn9HaeKqQsWQL41zoV06Y2p9pJ8uPtk6KaHFzqw3pqYVHaJ9dmn_pfh933n9lG1edUCDE1N1uBI6K1UMtNZyz-j9DNWCjKvo6Mst9BB46sy4l2tNhrYPqrcwLe89jp9pr5LhuxEqT-aPw4Gsia62QPHIUEttnxUpu5xnH6BTvWCe5NWfjXefhBlKT7xnmj9tfD20iRnfKqB9KPSSTwfMG8C1nhVZIoKGEhnwuar9WSWH-x54VJef")`,
          }}
        >
          <div className="flex flex-col gap-4 max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
              Building the Future, One Line of Code at a Time.
            </h1>
            <h2 className="text-gray-300 text-base sm:text-lg font-normal leading-normal">
              We are a software agency dedicated to creating innovative solutions and ensuring client success through cutting-edge technology.
            </h2>
          </div>
        </section>

        <section>
          <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Our Story
          </h2>
          <p className="text-base font-normal leading-normal pb-3 pt-1 px-4 text-gray-800 dark:text-gray-300">
            MacrocosmTech was founded with a singular purpose: to bridge the gap between brilliant ideas and powerful execution. Our journey began with a small team of passionate developers and designers who believed in the transformative power of code and creativity. Today, we've grown into a dynamic agency that helps businesses navigate the digital frontier and achieve their most ambitious goals.
          </p>
        </section>

        <section>
          <h2 className="text-center text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3 p-6 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200/80 dark:border-white/10">
              <span className="material-symbols-outlined text-3xl text-primary">groups</span>
              <h3 className="text-lg font-bold">Client-Centric</h3>
              <p className="text-sm text-gray-800 dark:text-gray-300">
                Your success is our success. We build lasting partnerships by putting your needs at the heart of everything we do.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-6 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200/80 dark:border-white/10">
              <span className="material-symbols-outlined text-3xl text-primary">visibility</span>
              <h3 className="text-lg font-bold">Radical Transparency</h3>
              <p className="text-sm text-gray-800 dark:text-gray-300">
                We believe in open, honest communication. You'll always be in the loop with clear insights and regular updates.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-6 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200/80 dark:border-white/10">
              <span className="material-symbols-outlined text-3xl text-primary">rocket_launch</span>
              <h3 className="text-lg font-bold">Constant Innovation</h3>
              <p className="text-sm text-gray-800 dark:text-gray-300">
                We thrive on pushing boundaries, exploring new technologies, and delivering solutions that are ahead of the curve.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-center text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-12 pt-5">
            The MacrocosmTech Journey
          </h2>
          <div className="relative flex flex-col items-center w-full">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-200/80 dark:bg-white/10 -translate-x-1/2"></div>
            {[
              { year: '2023', title: 'Founded', desc: 'MacrocosmTech is born from a shared passion for code.', align: 'left' },
              { year: '2024', title: 'First Major Client', desc: 'Partnered with a Fortune 500 company.', align: 'right' },
              { year: '2025', title: 'Key Product Launch', desc: 'Launched our first proprietary SaaS platform.', align: 'left' },
            ].map((milestone, index) => (
              <div
                key={index}
                className={`relative z-10 w-full flex ${milestone.align === 'left' ? 'justify-start' : 'justify-end'} mb-12`}
              >
                <div className={`w-1/2 ${milestone.align === 'left' ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-gray-100 dark:bg-white/5 p-4 rounded-lg border border-gray-200/80 dark:border-white/10">
                    <p className="font-bold text-primary">{milestone.year}</p>
                    <h3 className="font-bold">{milestone.title}</h3>
                    <p className="text-sm text-gray-800 dark:text-gray-300">{milestone.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-center text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">
            Our Constellation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Alex Johnson', role: 'Founder & CEO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqpQqF66IwQIaIrIO73eMBSFTweSiRXQ1Ez3AkCheIy7lrQs4lZI8vCvrbdyRKCKdIBmmbtilT9jBx1SETh9c4lxNZO90Nbr1x7UUBznn7vKDlQWzVWOzQRg4Gj4TZkHoJogGNdpFUIoy8o0vk1aFrHrmc7C6cYZ38elWPXlNb0bqjJkPvvI6WykpJSGy1vQrCdetStv904u9AjsA5nbykMlShhJh54yhIvOVzGFr7wTv9rm64ZdlcgcTCrbFHlR1V87OL-BpiJLlG' },
              { name: 'Samantha Carter', role: 'Lead Designer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9z32-W80nA0j_e4Me-kSRS5sWUWdaTl-3toU8eL_MbvcvzDbgny7jX6jx2vYci5u1CRp7fWrmCXDhmVf0jo5X_MSfNkZZGX2b9Ww22LZDi5nrycF6EAp5ehwyC9NSMg-0Ey6YYn_o6iZuPRXalSHq7bc6HYhqdMnz-kjPcWmjIMHiXvOpCrd4cbaUyrTs64tBEsQWWho9UnfIvy_ZnpJmhSLJn3rdmsajc3mOjNTEYfzc_e7eXxVikabpwh_6hG4LKWwFPFKaiFXB' },
              { name: 'David Chen', role: 'Head of Engineering', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUJCPHqoaSKTPucwg5Hu9K91-lFhT--r-S6F6upjVgTfIaMeYLOH_pm_VDhJD-mJ1bK9B_mOuuX9RIdsDZcsuSD1mFSKbvd0chPYXm5yqq51gG_Er0i_rCAyRrLUvOSz74iapwLe-OlxBv9jFEVnRkLA56d5mX-PQO1fM_TdAfTVVTElzPjnwbBGinmUywQKH4c3JNNd0UHjangcSvoHvcNTLtsgAMY0g4Rq1DMIfi7qnHzuABg1e1S_wfxV74-KzXOtSLrDq46STU' },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  className="w-32 h-32 rounded-full object-cover mb-4"
                  alt={`Photo of ${member.name}`}
                  src={member.img}
                  loading="lazy"
                />
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Culture Section */}
        <section className="py-12 md:py-20">
          <h2 className="text-center text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">
            Our Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <div className="flex flex-col gap-4 p-6 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200/80 dark:border-white/10">
              <span className="material-symbols-outlined text-4xl text-primary">diversity_3</span>
              <h3 className="text-xl font-bold">Diverse & Inclusive</h3>
              <p className="text-sm text-gray-800 dark:text-gray-300">
                We celebrate diversity and believe that different perspectives lead to better solutions. Our team comes from various backgrounds, bringing unique insights to every project.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200/80 dark:border-white/10">
              <span className="material-symbols-outlined text-4xl text-primary">school</span>
              <h3 className="text-xl font-bold">Continuous Learning</h3>
              <p className="text-sm text-gray-800 dark:text-gray-300">
                Technology evolves rapidly, and so do we. We invest in our team's growth through training, conferences, and knowledge sharing sessions.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200/80 dark:border-white/10">
              <span className="material-symbols-outlined text-4xl text-primary">work_history</span>
              <h3 className="text-xl font-bold">Work-Life Balance</h3>
              <p className="text-sm text-gray-800 dark:text-gray-300">
                We believe in sustainable productivity. Our flexible work arrangements and wellness programs ensure our team stays healthy and motivated.
              </p>
            </div>
            <div className="flex flex-col gap-4 p-6 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200/80 dark:border-white/10">
              <span className="material-symbols-outlined text-4xl text-primary">celebration</span>
              <h3 className="text-xl font-bold">Celebrate Success</h3>
              <p className="text-sm text-gray-800 dark:text-gray-300">
                We recognize and celebrate both big wins and small victories. Every milestone matters, and every team member's contribution is valued.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-12 md:py-20 bg-primary/5 dark:bg-primary/10 rounded-xl mx-4">
          <h2 className="text-center text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {[
              { number: '200+', label: 'Projects Completed', icon: 'check_circle' },
              { number: '150+', label: 'Happy Clients', icon: 'favorite' },
              { number: '50+', label: 'Team Members', icon: 'groups' },
              { number: '10+', label: 'Years Experience', icon: 'calendar_today' },
            ].map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                  <span className="material-symbols-outlined text-3xl">{achievement.icon}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{achievement.number}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-12 md:py-20">
          <h2 className="text-center text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">
            Our Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {[
              { city: 'San Francisco', country: 'USA', address: '123 Innovation Drive, Tech City' },
              { city: 'London', country: 'UK', address: '456 Innovation Street, Tech District' },
              { city: 'Tokyo', country: 'Japan', address: '789 Digital Avenue, Future Ward' },
            ].map((office, index) => (
              <div key={index} className="flex flex-col gap-3 p-6 bg-white dark:bg-[#1C2333] rounded-xl border border-gray-200 dark:border-[#282e39]">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{office.city}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{office.country}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{office.address}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="py-12 md:py-20">
          <h2 className="text-center text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">
            Our Partners
          </h2>
          <p className="text-center text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 mb-8">
            We collaborate with leading technology companies and platforms to deliver the best solutions for our clients.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="flex items-center justify-center p-6 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 h-24"
              >
                <span className="text-gray-400 dark:text-gray-600 text-sm">Partner Logo</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary/20 dark:bg-primary/10 rounded-xl p-8 sm:p-12 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em]">
            Let's Create Together
          </h2>
          <p className="max-w-xl">
            Have a project in mind? We'd love to hear about it. Let's collaborate to build something amazing.
          </p>
          <Link to="/contact">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">Work With Us</span>
            </button>
          </Link>
        </section>
      </main>
    </>
  )
}

export default About

