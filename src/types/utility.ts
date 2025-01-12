import type { Component } from "vue";

export type ComponentLoader = () => Promise<{ default: Component }>
