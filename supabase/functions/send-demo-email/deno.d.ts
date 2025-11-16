/// <reference lib="deno.ns" />

declare const Deno: {
  env: {
    get(key: string): string | undefined;
  };
};

// Deno runtime provides these globals
declare const console: Console;
declare const fetch: typeof globalThis.fetch;
declare const Response: typeof globalThis.Response;

