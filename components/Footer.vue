<template>
  <div>
    <footer class="bg-gray-900 text-white py-16 px-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center mb-4">
              <div
                class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2"
              >
                J
              </div>
              <h3 class="font-bold text-xl">Jenny</h3>
            </div>
            <p class="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">
                <span class="icon">FB</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <span class="icon">TW</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <span class="icon">IG</span>
              </a>
            </div>
          </div>

          <div>
            <h4 class="font-bold mb-4">{{ $t('nav.pages') }}</h4>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white">{{
                  $t('nav.home')
                }}</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">{{
                  $t('nav.about')
                }}</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">{{
                  $t('nav.services')
                }}</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">{{
                  $t('nav.portfolio')
                }}</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">{{
                  $t('nav.blog')
                }}</a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">{{
                  $t('nav.contact')
                }}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold mb-4">Contact</h4>
            <div class="space-y-3 text-gray-400">
              <p>New York, NY 10012</p>
              <p>info@example.com</p>
              <p>+ 01 234 567 88</p>
            </div>
            <div class="mt-4">
              <div class="relative">
                <input
                  type="email"
                  placeholder="Email"
                  class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <button
                  class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-1 rounded"
                >
                  <span class="icon">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm"
        >
          <p>Copyright © 2023 - All Rights Reserved</p>
          <div class="mt-2">
            <a href="#" class="hover:text-gray-300">View Terms & Conditions</a>
            | <a href="#" class="hover:text-gray-300">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
