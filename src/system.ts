type int = number;
type Stream = "alpha" | "beta" | "release";

interface System {
	version: string;
	versionCode: number;
	stream: Stream
}

const system: System = {
	version: "1.0.0-alpha.1",
	versionCode: 1,
	stream: "alpha"
};

export function _long(n: any): int {
	if (typeof n === "number") {
		if (String(n).includes(".")) {
			throw "Type 'number' is not assignable to type 'long'";
			return 2 ** 63 * -1;
		} else {
			if (Number(n) < 2 ** 63 * -1 || Number(n) > 2 ** 63 - 1) {
				throw "Type 'number' is not assignable to type 'long'";
				return 2 ** 63 * -1;
			}
			return Number(n);
		}
	} else {
		throw "Type '" + typeof n + "' is not assignable to type 'long'";
		return 2 ** 63 * -1;
	}
}
export function _int(n: any): int {
	if (typeof n === "number") {
		if (String(n).includes(".")) {
			throw "Type 'number' is not assignable to type 'int'";
			return -2147483648;
		} else {
			if (Number(n) < -2147483648 || Number(n) > 2147483647) {
				throw "Type 'long' is not assignable to type 'int'";
				return -2147483648;
			}
			return Number(n);
		}
	} else {
		throw "Type '" + typeof n + "' is not assignable to type 'int'";
		return -2147483648;
	}
}
export function _short(n: any): int {
	if (typeof n === "number") {
		if (String(n).includes(".")) {
			throw "Type 'number' is not assignable to type 'short'";
			return -32768;
		} else {
			if (Number(n) < -32768 || Number(n) > 32767) {
				throw "Type 'long' is not assignable to type 'short'";
				return -32768;
			}
			return Number(n);
		}
	} else {
		throw "Type '" + typeof n + "' is not assignable to type 'short'";
		return -32768;
	}
}

export default system;
