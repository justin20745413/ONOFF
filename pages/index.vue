<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="container mx-auto py-20 px-4">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2">
          <div
            class="inline-block mb-2 bg-white rounded-full px-3 py-1 text-sm border"
          >
            Hello
          </div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            I'm <span class="text-orange-500">Jenny</span>,<br />
            Product Designer
          </h1>
          <p class="text-gray-600 mb-8">
            Joyously exceptional product design solving complex problems.
          </p>
          <div class="flex gap-4">
            <button
              class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium"
            >
              Portfolio
            </button>

            <Button
              icon="pi pi-search"
              severity="success"
              aria-label="Search"
            />

            <button
              class="border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-full font-medium"
            >
              Hire Me
            </button>
          </div>
        </div>
        <div class="md:w-1/2 relative mt-10 md:mt-0">
          <div class="relative z-10">
            <div
              class="bg-orange-500 rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden mx-auto"
            >
              <img
                src="https://picsum.photos/300/200/?random=10"
                alt="Jenny"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="absolute top-0 right-8 bg-white p-4 rounded-lg shadow-md">
            <div class="text-center">
              <h3 class="text-3xl font-bold text-orange-500">10 Years</h3>
              <p class="text-sm text-gray-500">Experience</p>
            </div>
          </div>
          <div
            class="absolute bottom-4 left-8 bg-white p-4 rounded-lg shadow-md"
          >
            <div class="text-center">
              <h3 class="text-3xl font-bold">450+</h3>
              <p class="text-sm text-gray-500">Client Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="container mx-auto py-16 px-4">
      <h2 class="text-2xl font-bold mb-8">My Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gray-100 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">UI/UX Design</h3>
          <div class="relative h-40 overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/300/200/?random=11"
              alt="UI/UX Design"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute bottom-4 right-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <span class="icon">→</span>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">Web Design</h3>
          <div class="relative h-40 overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/300/200/?random=12"
              alt="Web Design"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute bottom-4 right-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <span class="icon">→</span>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 p-6 rounded-lg">
          <h3 class="text-xl font-semibold mb-4">Landing Page</h3>
          <div class="relative h-40 overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/300/200/?random=13"
              alt="Landing Page"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute bottom-4 right-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <span class="icon">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="container mx-auto py-16 px-4">
      <h2 class="text-2xl font-bold mb-8">My Work Experience</h2>
      <div class="space-y-6">
        <div class="flex">
          <div class="mr-4 relative">
            <div class="w-4 h-4 bg-orange-500 rounded-full"></div>
            <div
              class="absolute top-4 left-2 -ml-px h-full w-0.5 bg-gray-300"
            ></div>
          </div>
          <div>
            <h3 class="text-xl font-semibold">Self-Employed, NYC</h3>
            <p class="text-gray-500 text-sm mb-2">June 2021 - July 2023</p>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>

        <div class="flex">
          <div class="mr-4 relative">
            <div class="w-4 h-4 bg-orange-500 rounded-full"></div>
            <div
              class="absolute top-4 left-2 -ml-px h-full w-0.5 bg-gray-300"
            ></div>
          </div>
          <div>
            <h3 class="text-xl font-semibold">Visual Designer</h3>
            <p class="text-gray-500 text-sm mb-2">Insighthancer</p>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>

        <div class="flex">
          <div class="mr-4">
            <div class="w-4 h-4 bg-orange-500 rounded-full"></div>
          </div>
          <div>
            <h3 class="text-xl font-semibold">UI/UX Designer</h3>
            <p class="text-gray-500 text-sm mb-2">KG Design Studio</p>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Hire Me Section -->
    <section class="container mx-auto py-16 px-4 bg-gray-50 rounded-lg">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h2 class="text-2xl font-bold mb-4">
            Why You <span class="text-orange-500">Hire Me</span> for Your Next
            Projects?
          </h2>
          <p class="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-2xl font-bold">600+</p>
              <p class="text-gray-500">Projects Completed</p>
            </div>
            <div>
              <p class="text-2xl font-bold">80+</p>
              <p class="text-gray-500">Happy Clients</p>
            </div>
          </div>
          <button
            class="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium"
          >
            Hire Me
          </button>
        </div>
        <div class="md:w-1/2">
          <div
            class="bg-orange-500 rounded-full w-64 h-64 overflow-hidden mx-auto"
          >
            <img
              src="https://picsum.photos/300/200/?random=14"
              alt="Jenny"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="container mx-auto py-16 px-4">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-2xl font-bold">
          Let's Have a Look at my <span class="text-orange-500">Portfolio</span>
        </h2>
        <button class="text-orange-500 font-medium flex items-center">
          See More <span class="ml-1">→</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gray-100 p-4 rounded-lg">
          <div class="h-48 bg-white rounded-lg mb-4"></div>
          <p class="text-gray-500">UI/UX Design</p>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg">
          <div class="h-48 bg-white rounded-lg mb-4"></div>
          <p class="text-gray-500">Landing Page</p>
        </div>
        <div class="bg-gray-100 p-4 rounded-lg">
          <div class="h-48 bg-white rounded-lg mb-4"></div>
          <p class="text-gray-500">Website</p>
        </div>
      </div>

      <!-- Case Study -->
      <div class="mt-10 bg-gray-100 p-6 rounded-lg">
        <div class="flex flex-col md:flex-row gap-6">
          <div class="md:w-1/3">
            <img
              src="https://picsum.photos/300/200/?random=15"
              alt="Food Express"
              class="w-full h-48 object-cover rounded-lg"
            />
          </div>
          <div class="md:w-2/3">
            <div
              class="inline-block mb-2 bg-orange-500 rounded-full w-2 h-2"
            ></div>
            <h3 class="text-xl font-bold mb-2">
              Food Express - Food Delivery Solution
            </h3>
            <p class="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="bg-gray-900 text-white py-16 px-4">
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-8">
          Testimonials that
          <span class="text-orange-500">Speak to My Results</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="flex mb-4">
              <div class="text-orange-500 text-2xl mr-1">★★★★★</div>
            </div>
            <p class="mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis.
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gray-500 rounded-full mr-3"></div>
              <div>
                <p class="font-semibold">Sarah Brown</p>
                <p class="text-sm text-gray-400">Marketing Director</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="flex mb-4">
              <div class="text-orange-500 text-2xl mr-1">★★★★★</div>
            </div>
            <p class="mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis.
            </p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-gray-500 rounded-full mr-3"></div>
              <div>
                <p class="font-semibold">Andrew Miller</p>
                <p class="text-sm text-gray-400">CEO, Tech Startup</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-8">
          <div class="flex space-x-2">
            <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div class="w-3 h-3 bg-gray-600 rounded-full"></div>
            <div class="w-3 h-3 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="container mx-auto py-16 px-4">
      <h2 class="text-2xl font-bold mb-8">
        Have An Awesome Project Idea?
        <span class="text-orange-500">Let's Discuss</span>
      </h2>

      <div class="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label class="block text-sm text-gray-600 mb-2"
              >Your Email Address</label
            >
            <input
              type="email"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label class="block text-sm text-gray-600 mb-2">Phone Number</label>
            <input
              type="tel"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
        <div class="mb-6">
          <label class="block text-sm text-gray-600 mb-2"
            >Project Details</label
          >
          <textarea
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows="4"
          ></textarea>
        </div>
        <button
          class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium"
        >
          Submit
        </button>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="container mx-auto py-8 px-4">
      <div class="flex flex-wrap gap-2">
        <span class="bg-gray-100 rounded-full px-4 py-2 text-sm">Design</span>
        <span class="bg-gray-100 rounded-full px-4 py-2 text-sm"
          >App Design</span
        >
        <span class="bg-gray-100 rounded-full px-4 py-2 text-sm"
          >Dashboard</span
        >
        <span class="bg-gray-100 rounded-full px-4 py-2 text-sm"
          >Wireframe</span
        >
        <span class="bg-gray-100 rounded-full px-4 py-2 text-sm"
          >User Research</span
        >
      </div>
    </section>

    <!-- Blog Section -->
    <section class="container mx-auto py-16 px-4">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-2xl font-bold">
          From my <span class="text-orange-500">blog post</span>
        </h2>
        <button class="text-orange-500 font-medium flex items-center">
          View All <span class="ml-1">→</span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gray-100 rounded-lg overflow-hidden">
          <div class="h-40 bg-gray-300 relative">
            <div
              class="absolute bottom-4 right-4 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <span class="icon">→</span>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-bold mb-2">
              Design Unleashed: Behind the Scenes of UI/UX Magic
            </h3>
            <div class="flex items-center text-sm text-gray-500 mb-2">
              <span class="mr-2">⭐ 4 rating</span>
              <span>• 22 July 2023</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 rounded-lg overflow-hidden">
          <div class="h-40 bg-gray-300 relative">
            <div
              class="absolute bottom-4 right-4 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <span class="icon">→</span>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-bold mb-2">
              Beyond Aesthetic: Crafting intuitive UX
            </h3>
            <div class="flex items-center text-sm text-gray-500 mb-2">
              <span class="mr-2">⭐ 4.5 rating</span>
              <span>• 15 July 2023</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 rounded-lg overflow-hidden">
          <div class="h-40 bg-gray-300 relative">
            <div
              class="absolute bottom-4 right-4 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              <span class="icon">→</span>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-bold mb-2">
              Pixels & Insights: Unveiling the Art of UX/UI
            </h3>
            <div class="flex items-center text-sm text-gray-500 mb-2">
              <span class="mr-2">⭐ 5 rating</span>
              <span>• 8 July 2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import Lenis from '@studio-freight/lenis';

onMounted(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // GSAP animations
  gsap.from('.hero-content', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });

  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    if (index === 0) return;

    gsap.from(section, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  });
});
</script>

<style lang="scss" scoped>
/* Additional custom styles can be added here */
</style>
