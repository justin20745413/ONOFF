<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 導航欄 -->
    <Menubar
      :model="menuItems"
      class="border-b border-gray-200 bg-white shadow-md"
    >
      <template #start>
        <div class="flex items-center">
          <span class="text-primary ml-3 text-xl font-bold">ONOFF</span>
        </div>
      </template>
      <template #end>
        <div class="flex items-center gap-4">
          <!-- 主題切換 -->
          <div class="mr-2 flex items-center gap-2">
            <Button
              icon="pi pi-palette"
              text
              rounded
              severity="secondary"
              @click="toggleThemeMenuVisibility"
              aria-label="切換主題"
              class="hover:bg-gray-100"
            />
            <Menu
              id="theme-menu"
              ref="themeMenuRef"
              :model="themeOptions"
              :popup="true"
            />
          </div>
          <Button
            icon="pi pi-search"
            rounded
            text
            aria-label="搜尋"
            class="hover:bg-gray-100"
          />
          <Button
            icon="pi pi-user"
            rounded
            text
            aria-label="用戶"
            class="hover:bg-gray-100"
          />
          <Button
            icon="pi pi-shopping-cart"
            rounded
            text
            aria-label="購物車"
            class="hover:bg-gray-100"
          />
        </div>
      </template>
    </Menubar>

    <!-- 頁面內容 -->
    <main>
      <slot />
    </main>

    <!-- 頁腳 -->
    <footer class="mt-10 bg-gray-800 p-8 text-white">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 class="mb-4 text-lg font-bold">關於我們</h3>
            <p class="text-gray-300">
              ONOFF是一個專注於提供優質智能科技產品的平台。
            </p>
          </div>
          <div>
            <h3 class="mb-4 text-lg font-bold">聯絡方式</h3>
            <p class="flex items-center gap-2 text-gray-300">
              <i class="pi pi-envelope"></i> 電郵：contact@onoff.com
            </p>
            <p class="mt-2 flex items-center gap-2 text-gray-300">
              <i class="pi pi-phone"></i> 電話：123-456-7890
            </p>
          </div>
          <div>
            <h3 class="mb-4 text-lg font-bold">快速連結</h3>
            <ul class="space-y-2 text-gray-300">
              <li>
                <a href="/" class="transition-colors hover:text-white">首頁</a>
              </li>
              <li>
                <a href="/products" class="transition-colors hover:text-white"
                  >產品</a
                >
              </li>
              <li>
                <a href="/about" class="transition-colors hover:text-white"
                  >關於我們</a
                >
              </li>
              <li>
                <a href="/contact" class="transition-colors hover:text-white"
                  >聯絡我們</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h3 class="mb-4 text-lg font-bold">關注我們</h3>
            <div class="flex gap-4">
              <a
                href="#"
                class="text-gray-300 transition-colors hover:text-white"
                ><i class="pi pi-facebook text-xl"></i
              ></a>
              <a
                href="#"
                class="text-gray-300 transition-colors hover:text-white"
                ><i class="pi pi-twitter text-xl"></i
              ></a>
              <a
                href="#"
                class="text-gray-300 transition-colors hover:text-white"
                ><i class="pi pi-instagram text-xl"></i
              ></a>
              <a
                href="#"
                class="text-gray-300 transition-colors hover:text-white"
                ><i class="pi pi-youtube text-xl"></i
              ></a>
            </div>
          </div>
        </div>
        <div
          class="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400"
        >
          <p>© 2024 ONOFF. 保留所有權利。</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
// 從 plugins/primevue.ts 導入新的主題切換函數和活動主題 ref
import {
  switchPrimeTheme,
  activeThemeName,
  type ThemePresetName,
} from "~/plugins/primevue";
import Menu from "primevue/menu"; // Menu 組件的導入保持不變
import type { MenuItem } from "primevue/menuitem"; // 導入 MenuItem 類型以獲得更好的類型提示

const themeMenuRef = ref<InstanceType<typeof Menu> | null>(null); // 給 Menu 組件一個 ref

// 控制主題菜單的顯示/隱藏
const toggleThemeMenuVisibility = (event: Event) => {
  themeMenuRef.value?.toggle(event);
};

// 主題選項菜單
// 使用 computed 屬性來動態標記當前活動的主題
const themeOptions = computed<MenuItem[]>(() => [
  {
    label: "Aura 主題",
    icon:
      activeThemeName.value === "aura"
        ? "pi pi-check-circle text-primary"
        : "pi pi-circle",
    command: () => {
      switchPrimeTheme("aura");
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("app-active-theme", "aura");
      }
    },
  },
  {
    label: "Nora 主題",
    icon:
      activeThemeName.value === "nora"
        ? "pi pi-check-circle text-primary"
        : "pi pi-circle",
    command: () => {
      switchPrimeTheme("nora");
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("app-active-theme", "nora");
      }
    },
  },
  {
    label: "海洋藍主題",
    icon:
      activeThemeName.value === "ocean-blue"
        ? "pi pi-check-circle text-primary"
        : "pi pi-circle",
    command: () => {
      switchPrimeTheme("ocean-blue");
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("app-active-theme", "ocean-blue");
      }
    },
  },
  {
    label: "日落橙主題",
    icon:
      activeThemeName.value === "sunset-orange"
        ? "pi pi-check-circle text-primary"
        : "pi pi-circle",
    command: () => {
      switchPrimeTheme("sunset-orange");
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("app-active-theme", "sunset-orange");
      }
    },
  },
  // 如果你在 plugins/primevue.ts 的 availableThemes 中添加了更多主題，
  // 可以在這裡添加對應的選項
]);

const menuItems: MenuItem[] = [
  {
    label: "首頁",
    icon: "pi pi-home",
    to: "/",
  },
  {
    label: "產品",
    icon: "pi pi-box",
    items: [
      {
        label: "全部產品",
        to: "/products",
      },
      {
        label: "熱門產品",
        to: "/products/hot",
      },
      {
        label: "新品上市",
        to: "/products/new",
      },
    ],
  },
  {
    label: "關於我們",
    icon: "pi pi-info-circle",
    to: "/about",
  },
  {
    label: "聯絡我們",
    icon: "pi pi-envelope",
    to: "/contact",
  },
];
</script>
