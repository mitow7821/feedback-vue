export {};

import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth: boolean;
  }
}

import "pinia";

declare module "pinia" {}
