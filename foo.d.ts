declare module 'demo-dts-facade/a' {
	import { Address } from 'demo-dts-facade/address.ts';
	export class A {
	    name: string;
	    address: Address;
	    private age;
	}
	export class B {
	    id: string;
	}

}
declare module 'demo-dts-facade/facade' {
	export { A } from 'demo-dts-facade/a';

}
