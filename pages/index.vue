<template>
  <div>
    <!-- 英雄區域 -->
    <section
      class="to-primary relative bg-gradient-to-br from-gray-900 py-24 text-white"
    >
      <div class="bg-pattern absolute inset-0 opacity-20"></div>
      <div class="container relative z-10 mx-auto px-4">
        <div class="max-w-2xl">
          <h1 class="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            創新科技，智慧生活
          </h1>
          <p class="mb-8 text-xl leading-relaxed">
            探索我們最新的產品系列，體驗前所未有的智慧生活方式。
          </p>
          <div class="flex flex-wrap gap-4">
            <Button
              label="了解更多"
              class="p-button-lg shadow-lg transition-all hover:shadow-xl"
            />
            <Button
              label="聯絡我們"
              class="p-button-outlined p-button-lg border-2 transition-all hover:bg-white hover:text-gray-900"
              severity="secondary"
            />
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          class="fill-current text-white"
        >
          <path
            d="M0,32L80,53.3C160,75,320,117,480,117.3C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>

    <!-- 產品輪播圖 -->
    <section class="bg-white py-20">
      <div class="container mx-auto px-4">
        <h2 class="mb-4 text-center text-3xl font-bold">精選產品</h2>
        <p class="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          發現我們專為現代生活設計的高品質智能產品
        </p>
        <Swiper
          :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
          :slides-per-view="1"
          :space-between="30"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
          }"
          :pagination="{
            clickable: true,
          }"
          :navigation="true"
          class="product-swiper"
        >
          <SwiperSlide v-for="(product, index) in products" :key="index">
            <Card class="h-full shadow-sm transition-shadow hover:shadow-lg">
              <template #header>
                <div class="relative overflow-hidden">
                  <img
                    :src="product.image"
                    :alt="product.name"
                    class="h-60 w-full transform object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <span
                    class="bg-primary absolute right-2 top-2 rounded px-2 py-1 text-sm font-medium text-white"
                  >
                    熱門
                  </span>
                </div>
              </template>
              <template #title>
                <div class="flex items-center justify-between">
                  <span>{{ product.name }}</span>
                  <Rating :modelValue="4" readonly :cancel="false" />
                </div>
              </template>
              <template #content>
                <p class="text-gray-600">{{ product.description }}</p>
                <div class="mt-4 flex items-center justify-between">
                  <span class="text-primary text-xl font-bold"
                    >¥{{ product.price }}</span
                  >
                  <span class="text-sm text-gray-500 line-through"
                    >¥{{ Math.round(product.price * 1.2) }}</span
                  >
                </div>
              </template>
              <template #footer>
                <div class="flex items-center justify-between">
                  <Button
                    icon="pi pi-heart"
                    text
                    severity="secondary"
                    class="p-button-rounded"
                  />
                  <Button icon="pi pi-shopping-cart" label="加入購物車" />
                </div>
              </template>
            </Card>
          </SwiperSlide>
        </Swiper>
        <div class="mt-10 text-center">
          <Button label="查看所有產品" outlined class="px-6" />
        </div>
      </div>
    </section>

    <!-- 特色區域 -->
    <section class="bg-gray-50 py-20">
      <div class="container mx-auto px-4">
        <h2 class="mb-4 text-center text-3xl font-bold">我們的特色</h2>
        <p class="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          堅持不懈地為客戶提供最佳的產品和服務體驗
        </p>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            class="border-primary rounded-lg border-t-4 bg-white p-8 text-center shadow-md transition-shadow hover:shadow-lg"
          >
            <div
              class="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
            >
              <i class="pi pi-check-circle text-primary text-3xl"></i>
            </div>
            <h3 class="mb-4 text-xl font-semibold">高品質保證</h3>
            <p class="text-gray-600">
              我們所有產品均經過嚴格的品質檢測，確保每一件產品都達到最高標準。
            </p>
          </div>
          <div
            class="border-primary rounded-lg border-t-4 bg-white p-8 text-center shadow-md transition-shadow hover:shadow-lg"
          >
            <div
              class="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
            >
              <i class="pi pi-truck text-primary text-3xl"></i>
            </div>
            <h3 class="mb-4 text-xl font-semibold">快速配送</h3>
            <p class="text-gray-600">
              全國範圍內48小時送達，讓您第一時間體驗我們的產品。
            </p>
          </div>
          <div
            class="border-primary rounded-lg border-t-4 bg-white p-8 text-center shadow-md transition-shadow hover:shadow-lg"
          >
            <div
              class="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
            >
              <i class="pi pi-heart text-primary text-3xl"></i>
            </div>
            <h3 class="mb-4 text-xl font-semibold">貼心服務</h3>
            <p class="text-gray-600">
              7×24小時客戶服務，隨時解答您的疑問，提供專業的產品諮詢。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 訂閱區域 -->
    <section class="bg-primary relative overflow-hidden py-20 text-white">
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute inset-0 rotate-45 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0tNCAwaDJ2LTJoLTJ2MnoiLz48cGF0aCBkPSJNMzAgMzRoLTJ2LTRoMnY0em0tNCAwaDJ2LTJoLTJ2MnoiLz48cGF0aCBkPSJNMjQgMzRoLTJ2LTRoMnY0em0tNCAwaDJ2LTJoLTJ2MnoiLz48cGF0aCBkPSJNMTggMzRoLTJ2LTRoMnY0em0tNCAwaDJ2LTJoLTJ2MnoiLz48cGF0aCBkPSJNMTIgMzRoLTJ2LTRoMnY0em0tNCAwaDJ2LTJoLTJ2MnoiLz48cGF0aCBkPSJNNiAzNEg0di00aDJ2NHptLTQgMGgydi0yaC0ydjJ6Ii8+PHBhdGggZD0iTTAgMzRoMnYtMkgwdjJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"
        ></div>
      </div>
      <div class="container relative z-10 mx-auto px-4 text-center">
        <h2 class="mb-6 text-3xl font-bold">訂閱我們的新聞</h2>
        <p class="mx-auto mb-8 max-w-2xl">
          及時了解我們的最新產品和促銷活動，不錯過任何優惠。
        </p>
        <div
          class="mx-auto flex max-w-md flex-col justify-center gap-4 overflow-hidden rounded-lg bg-white/10 p-1 shadow-lg backdrop-blur-sm sm:flex-row"
        >
          <InputText placeholder="輸入您的郵箱" class="flex-grow border-0" />
          <Button label="訂閱" severity="secondary" class="px-6" />
        </div>
        <div class="mt-6 text-sm text-white/70">
          我們不會向您發送垃圾郵件，您可以隨時取消訂閱。
        </div>
      </div>
    </section>

    <!-- 客戶評價 -->
    <section class="bg-white py-20">
      <div class="container mx-auto px-4">
        <h2 class="mb-4 text-center text-3xl font-bold">用戶評價</h2>
        <p class="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          聽聽我們的客戶怎麼說
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="relative rounded-lg bg-gray-50 p-6 shadow-md">
            <div class="text-primary absolute left-4 top-4 text-5xl opacity-20">
              <i class="pi pi-quote-left"></i>
            </div>
            <div class="relative z-10">
              <p class="mb-4 italic text-gray-600">
                「這款智能手錶超出了我的預期，續航能力非常強，健康監測功能也很全面。」
              </p>
              <div class="flex items-center">
                <div class="mr-4 h-12 w-12 rounded-full bg-gray-300"></div>
                <div>
                  <p class="font-semibold">陳小明</p>
                  <Rating :modelValue="5" readonly :cancel="false" />
                </div>
              </div>
            </div>
          </div>

          <div class="relative rounded-lg bg-gray-50 p-6 shadow-md">
            <div class="text-primary absolute left-4 top-4 text-5xl opacity-20">
              <i class="pi pi-quote-left"></i>
            </div>
            <div class="relative z-10">
              <p class="mb-4 italic text-gray-600">
                「無線耳機的音質令人驚嘆，降噪效果也很好，非常適合在辦公室使用。」
              </p>
              <div class="flex items-center">
                <div class="mr-4 h-12 w-12 rounded-full bg-gray-300"></div>
                <div>
                  <p class="font-semibold">林美玲</p>
                  <Rating :modelValue="4" readonly :cancel="false" />
                </div>
              </div>
            </div>
          </div>

          <div class="relative rounded-lg bg-gray-50 p-6 shadow-md">
            <div class="text-primary absolute left-4 top-4 text-5xl opacity-20">
              <i class="pi pi-quote-left"></i>
            </div>
            <div class="relative z-10">
              <p class="mb-4 italic text-gray-600">
                「智能家居套裝大大提高了我的生活品質，語音控制非常方便，設置也很簡單。」
              </p>
              <div class="flex items-center">
                <div class="mr-4 h-12 w-12 rounded-full bg-gray-300"></div>
                <div>
                  <p class="font-semibold">王大偉</p>
                  <Rating :modelValue="5" readonly :cancel="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// 引用Swiper模組
const SwiperAutoplay = Autoplay;
const SwiperPagination = Pagination;
const SwiperNavigation = Navigation;

// 設置頁面標題
useHead({
  title: "ONOFF - 智慧生活解決方案",
  meta: [
    {
      name: "description",
      content:
        "探索ONOFF提供的高品質智能科技產品，為您帶來智慧便捷的生活體驗。",
    },
  ],
});

// 示例產品數據
const products = [
  {
    name: "智能手錶 Pro",
    description: "全天候健康監測，長達7天續航，多種運動模式支持。",
    price: 1299,
    image: "https://via.placeholder.com/500x300?text=Smart+Watch",
  },
  {
    name: "無線耳機 Max",
    description: "主動降噪，環境聲模式，高保真音質，長續航。",
    price: 899,
    image: "https://via.placeholder.com/500x300?text=Wireless+Earphones",
  },
  {
    name: "智能家居套裝",
    description: "一鍵控制家中所有智能設備，語音助手支持。",
    price: 2499,
    image: "https://via.placeholder.com/500x300?text=Smart+Home+Kit",
  },
  {
    name: "便攜式藍牙音箱",
    description: "360°環繞立體聲，防水設計，長達12小時播放時間。",
    price: 599,
    image: "https://via.placeholder.com/500x300?text=Bluetooth+Speaker",
  },
];
</script>

<style scoped>
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34h-2v-4h2v4zm0-6h-2v-4h2v4zm6 0h-2v-4h2v4zm-12-6h-2v-4h2v4zm6 0h-2v-4h2v4zm-6-6h-2v-4h2v4zm-6 6h-2v-4h2v4zm-6 6h-2v-4h2v4zm36-18h-2v-4h2v4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.product-swiper :deep(.swiper-pagination-bullet-active) {
  background-color: var(--primary-color);
}

.product-swiper :deep(.swiper-button-next),
.product-swiper :deep(.swiper-button-prev) {
  color: var(--primary-color);
}
</style>
