// PRISMA CONFIG:
import type { PrismaClient } from '@prisma/client';
/////

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	// PRISMA CONFIG:
	// eslint-disable-next-line no-var
	var prisma: PrismaClient;
	/////
}

export {};
